const most = require("most");
const fetch = require("node-fetch");

const fetchJson = async url => fetch(url).then(res => res.json());

const fetchCurrentTasks = async (managerUrl, serviceName) =>
  fetchJson(
    `${managerUrl}/tasks?filters={"service":["${serviceName}"],"desired-state":["ready","running"]}`
  );

const fetchServices = async managerUrl => {
  try {
    const services = await fetchJson(
      `${managerUrl}/services?filters={"label":["bigboat.service.type"]}`
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

module.exports = {
  watch: (mqtt, { managerUrl, networkName, scanInterval }) => {
    const calcInstanceState = require("./instances")(networkName, managerUrl);
    most
      .periodic(scanInterval.services, managerUrl)
      .map(fetchServices)
      .chain(most.fromPromise)
      .observe(services => {
        mqtt.publish("/bigboat/instances", calcInstanceState(services));
      });
  }
};
