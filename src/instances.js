module.exports = networkName => containers =>
  containers.reduce((instances, cnt) => {
    const labels = cnt.Labels;
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
    const srvName = labels["bigboat.service.name"];
    const domain = labels["bigboat.domain"];
    const tld = labels["bigboat.tld"];
    const ports = cnt.Ports.map(p => `${p.PrivatePort}/${p.Type}`);
    instances[instanceName].state =
      cnt.State === "running" ? instances[instanceName].state : cnt.State;
    instances[instanceName].services[serviceName] = {
      container: {
        id: cnt.Id,
        name: cnt.Names,
        created: cnt.Created * 1000
      },
      ip: cnt.NetworkSettings.Networks[networkName].IPAddress,
      fqdn: `${srvName}.${instanceName}.${domain}.${tld}`,
      ports,
      state: cnt.State
    };

    return instances;
  }, {});
