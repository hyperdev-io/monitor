const _ = require("lodash");

const calcServiceState = (desiredState, tasks) =>
  tasks.reduce(
    (state, task) =>
      task.Status.State === desiredState ? state : task.Status.State,
    desiredState
  );

const reduceIPs = (agg, na) => {
  agg[`${na.Network.Spec.Name}`] = na.Addresses.map(a => a.split("/")[0]);
  return agg;
};

const getIP = (tasks, netName) => {
  if (tasks && tasks.map) {
    return _.flatten(
      tasks.map(t => t.NetworksAttachments.reduce(reduceIPs, {})[netName])
    )[0];
  }
};

module.exports = (networkName, swarmManagerUrl) => (services, containers) => {
  const swarm = services.reduce((instances, srv) => {
    const labels = srv.Spec.Labels;
    const instanceName = labels["bigboat.instance.name"];
    const serviceName = labels["bigboat.service.name"];
    const domain = labels["bigboat.domain"];
    const tld = labels["bigboat.tld"];

    if (!instances[instanceName]) {
      instances[instanceName] = {
        name: instanceName,
        agent: {
          url: labels["bigboat.agent.url"]
        },
        app: {
          name: labels["bigboat.application.name"],
          version: labels["bigboat.application.version"]
        },
        storageBucket: labels["bigboat.storage.bucket"],
        startedBy: labels["bigboat.startedBy"],
        state: "running",
        services: {}
      };
    }

    const logsUrl = `${swarmManagerUrl}/services/${srv.ID}/logs?timestamps=true&stdout=true&stderr=true&tail=1000`;
    instances[instanceName].services[serviceName] = {
      fqdn: `${serviceName}.${instanceName}.${domain}.${tld}`,
      ip: getIP(srv.CurrentTasks, networkName),
      state: srv.CurrentTasks
        ? calcServiceState("running", srv.CurrentTasks)
        : "failing",
      endpoint: {
        path: labels["bigboat.instance.endpoint.path"],
        protocol: labels["bigboat.instance.endpoint.protocol"]
      },
      errors: srv.CurrentTasks.map(t => t.Status.Err).join(";"),
      logs: {
        "200": `${logsUrl}&tail=200`,
        "500": `${logsUrl}&tail=500`,
        "1000": `${logsUrl}&tail=1000`,
        all: logsUrl,
        follow: `${logsUrl}&follow=true`
      }
    };

    if (instances[instanceName].services[serviceName].state !== "running")
      instances[instanceName].state = "failing";
    return instances;
  }, {});

  return containers.reduce((state, cnt) => {
    const labels = cnt.Labels;
    const instanceName = labels["bigboat.instance.name"];
    const serviceName = labels["bigboat.service.name"];
    if (state[instanceName] && state[instanceName].services[serviceName]) {
      let srv = state[instanceName].services[serviceName];
      const ports = cnt.Ports.map(p => `${p.PrivatePort}/${p.Type}`);
      srv = _.merge(srv, {
        container: {
          id: cnt.Id,
          name: cnt.Names,
          created: cnt.Created * 1000
        },
        ports
      });
    }
    return state;
  }, swarm);
};
