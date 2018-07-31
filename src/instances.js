const _ = require("lodash");

const calcServiceState = (desiredState, tasks) =>
  tasks.reduce(
    (state, task) =>
      task.Status.State === desiredState ? state : task.Status.State,
    desiredState
  );

module.exports = (networkName, swarmManagerUrl) => (services, containers) => {
  const swarm = services.reduce((instances, srv) => {
    const labels = srv.Spec.Labels;
    const instanceName = labels["bigboat.instance.name"];
    const serviceName = labels["bigboat.service.name"];

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
    instances[instanceName].services[serviceName] = {
      state: srv.CurrentTasks
        ? calcServiceState("running", srv.CurrentTasks)
        : "failing",
      errors: srv.CurrentTasks.map(t => t.Status.Err).join(";"),
      logsUrl: `${swarmManagerUrl}/services/${srv.ID}/logs?timestamps=true&stdout=true&stderr=true&tail=1000`
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
      const srvName = labels["bigboat.service.name"];
      const domain = labels["bigboat.domain"];
      const tld = labels["bigboat.tld"];
      const ports = cnt.Ports.map(p => `${p.PrivatePort}/${p.Type}`);
      srv = _.merge(srv, {
        container: {
          id: cnt.Id,
          name: cnt.Names,
          created: cnt.Created * 1000
        },
        ip: cnt.NetworkSettings.Networks[networkName].IPAddress,
        fqdn: `${srvName}.${instanceName}.${domain}.${tld}`,
        ports,
        state: cnt.State
      });
    }
    return state;
  }, swarm);
};
