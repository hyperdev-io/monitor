const _ = require("lodash");

const calcServiceState = (desiredState, tasks) => {
  if (tasks && tasks.reduce) {
    return tasks.reduce(
      (state, task) =>
        task.Status.State === desiredState ? state : task.Status.State,
      desiredState
    );
  } else {
    return [];
  }
};

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

module.exports = (networkName, swarmManagerUrl) => services => {
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

    let currentService = instances[instanceName].services[serviceName];

    if (labels["bigboat.service.type"] === "service") {
      const logsUrl = `${swarmManagerUrl}/services/${srv.ID}/logs?timestamps=true&stdout=true&stderr=true`;
      currentService = _.merge(currentService, {
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
      });
      if (currentService.state !== "running")
        instances[instanceName].state = "failing";
    }

    if (labels["bigboat.service.type"] === "ssh") {
      currentService = _.merge(currentService, {
        ssh: {
          fqdn: `ssh.${serviceName}.${instanceName}.${domain}.${tld}`,
          ip: getIP(srv.CurrentTasks, networkName),
          state: srv.CurrentTasks
            ? calcServiceState("running", srv.CurrentTasks)
            : "failing",
          errors: srv.CurrentTasks.map(t => t.Status.Err).join(";")
        }
      });
    }

    instances[instanceName].services[serviceName] = currentService;
    return instances;
  }, {});

  return swarm;
};
