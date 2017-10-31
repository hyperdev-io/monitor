const most = require("most");
const fetch = require("node-fetch");
const _ = require("lodash");

const fetchJson = async url => fetch(url).then(res => res.json());
const fetchText = async url => fetch(url).then(res => res.text());

const fetchNodes = managerUrl => () =>
  fetchJson(`${managerUrl}/nodes`)
    .then(nodes => nodes.map(node => node.Description.Hostname))
    .catch(reason => {
      console.error(
        `Error while trying to retrieve swarm nodes information from ${managerUrl}`,
        reason
      );
      return [];
    });

const fetchContainers = nodeIp =>
  fetch(
    `http://${nodeIp}:2375/containers/json?filters={"label":["bigboat.service.type=service"]}`
  )
    .then(res => res.json())
    .catch(reason => {
      console.error(
        `Error while trying to retrieve containers from node ${nodeIp}`,
        reason
      );
      return [];
    });

const fetchAllContainers = nodes => {
  const result = Promise.resolve([]);
  if (nodes && nodes.length) {
    const containers = nodes.map(node => fetchContainers(node));
    return Promise.all(containers).catch(reason => {
      console.error(
        `Error while trying to retrieve containers information`,
        reason
      );
      return [];
    });
  }
  return result;
};

const fetchCurrentTasks = async (managerUrl, serviceName) =>
  fetchJson(
    `${managerUrl}/tasks?filters={"service":["${serviceName}"],"desired-state":["ready","running"]}`
  );

const fetchServices = async managerUrl => {
  try {
    const services = await fetchJson(
      `${managerUrl}/services?filters={"label":["bigboat.service.type=service"]}`
    );
    await Promise.all(
      services.map(async service => {
        const tasks = await fetchCurrentTasks(managerUrl, service.Spec.Name);
        service.CurrentTasks = tasks;
      })
    );
    return services;
  } catch (ex) {
    console.error(ex);
    return [];
  }
};

const fetchSwarmInfo = managerUrl => nodes =>
  Promise.all([fetchServices(managerUrl), fetchAllContainers(nodes)]);

module.exports = {
  watch: (mqtt, { managerUrl, networkName, scanInterval }) => {
    const nodes$ = most
      .periodic(scanInterval.nodes)
      .map(fetchNodes(managerUrl))
      .chain(most.fromPromise);

    const calcInstanceState = require("./instances")(networkName, managerUrl);
    most
      .combine(
        fetchSwarmInfo(managerUrl),
        nodes$,
        most.periodic(scanInterval.containers)
      )
      .chain(most.fromPromise)
      .observe(([services, containers]) => {
        let instances = {};
        if (containers) {
          const allContainers = _.flatten(containers);
          instances = calcInstanceState(services, allContainers);
        }
        mqtt.publish("/bigboat/instances", instances);
      });
  }
};
