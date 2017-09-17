const most = require('most');
const fetch = require('node-fetch');

const fetchJson = path =>
  fetch(
    `http://10.25.96.22:2375/${path}?filters={"label":["bigboat.service.type"]}`,
  ).then(res => res.json());

const fetchSwarmEntities = () => {
  const services = fetchJson('services');
  const containers = fetchJson('containers/json');
  return Promise.all([services, containers]);
};

const getInstanceNames = services =>
  services.map(function(service) {
    return service.Spec.Name;
  });

const getInstanceState = containers =>
  containers.reduce((instances, cnt) => {
    const labels = cnt.Labels;
    const instanceName = labels['bigboat.instance.name'];
    const serviceName = labels['bigboat.service.name'];
    if (!instances[instanceName]) {
      instances[instanceName] = {
        agent: {
          url: labels['http://localhost:8080'],
        },
        app: {
          name: labels['bigboat.application.name'],
          version: labels['bigboat.application.version'],
        },
        storageBucket: labels['bigboat.storage.bucket'],
        startedBy: labels['bigboat.startedBy'],
        services: {},
      };
    }
    const srvName = labels['bigboat.service.name'];
    const domain = labels['bigboat.domain'];
    const tld = labels['bigboat.tld'];
    const ports = cnt.Ports.map(p => `${p.PrivatePort}/${p.Type}`);
    instances[instanceName].services[serviceName] = {
      container: {
        id: cnt.Id,
        name: cnt.Names,
        created: cnt.Created,
      },
      ip: cnt.NetworkSettings.Networks['swarm-net'].IPAddress,
      fqdn: `${srvName}.${instanceName}.${domain}.${tld}`,
      ports,
      state: cnt.State,
    };

    return instances;
  }, {});

most
  .periodic(5000)
  .map(fetchSwarmEntities)
  .observe(res =>
    res.then(([services, containers]) => {
      const instanceNames = getInstanceNames(services);
      const instances = getInstanceState(containers);
      console.log(JSON.stringify(instances, null, 2));
    }),
  );
