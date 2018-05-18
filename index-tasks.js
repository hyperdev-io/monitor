const most = require("most");
const fetch = require("node-fetch");

const mqttSettings = {
  url: "mqtt://localhost:1883"
};
const mqtt = require("./mqtt")(mqttSettings);

const fetchJson = path =>
  fetch(
    `http://10.25.96.22:2375/${path}?filters={"label":["bigboat.service.type"],"desired-state":["running"]}`
  ).then(res => res.json());

const fetchSwarmEntities = () => {
  // const services = fetchJson("services");
  const tasks = fetchJson("tasks");
  // const containers = fetchJson("containers/json");
  // return Promise.all([services, tasks, containers]);
  return tasks;
};

const fetchContainers = nodeIp =>
  fetch(
    `http://${nodeIp}:2375/containers/json?filters={"label":["bigboat.service.type"]}`
  ).then(res => res.json());

const fetchAllContainers = nodes => {
  // // const services = fetchJson("services");
  // const tasks = fetchJson("tasks");
  // const containers = fetchJson("containers/json");
  const containers = nodes.map(node => fetchJson());
  return Promise.all([services, tasks, containers]);
  return tasks;
};

// const getInstanceState = (services, containers) =>
//   containers.reduce((instances, cnt) => {
//     const labels = cnt.Labels;
//     const instanceName = labels["bigboat.instance.name"];
//     const serviceName = labels["bigboat.service.name"];
//     if (!instances[instanceName]) {
//       instances[instanceName] = {
//         agent: {
//           url: labels["bigboat.agent.url"]
//         },
//         app: {
//           name: labels["bigboat.application.name"],
//           version: labels["bigboat.application.version"]
//         },
//         storageBucket: labels["bigboat.storage.bucket"],
//         startedBy: labels["bigboat.startedBy"],
//         state: "running",
//         services: {}
//       };
//     }
//     const srvName = labels["bigboat.service.name"];
//     const domain = labels["bigboat.domain"];
//     const tld = labels["bigboat.tld"];
//     const ports = cnt.Ports.map(p => `${p.PrivatePort}/${p.Type}`);
//     instances[instanceName].state =
//       cnt.State === "running" ? instances[instanceName].state : cnt.State;
//     instances[instanceName].services[serviceName] = {
//       container: {
//         id: cnt.Id,
//         name: cnt.Names,
//         created: cnt.Created
//       },
//       ip: cnt.NetworkSettings.NetworksgetServiceNames["swarm-net"].IPAddress,
//       fqdn: `${srvName}.${instanceName}.${domain}.${tld}`,
//       ports,
//       state: cnt.State
//     };
//
//     return instances;
//   }, {});

const getInstanceState = tasks =>
  tasks.reduce((instances, task) => {
    const labels = task.Spec.ContainerSpec.Labels;
    const instanceName = labels["bigboat.instance.name"];
    const serviceName = labels["bigboat.service.name"];
    if (!instances[instanceName]) {
      instances[instanceName] = {
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
    const state = task.Status.State;
    // const ports = task.Ports.map(p => `${p.PrivatePort}/${p.Type}`);
    instances[instanceName].state =
      state === "running" ? instances[instanceName].state : state;
    instances[instanceName].services[serviceName] = {
      container: {
        id: task.Status.ContainerStatus.ContainerID,
        // name: task.Names,
        created: task.CreatedAt
      },
      ip: task.NetworksAttachments[0].Addresses.join(", "),
      fqdn: task.Spec.ContainerSpec.Hostname,
      // fqdn: `${srvName}.${instanceName}.${domain}.${tld}`,
      // ports,
      state
    };

    return instances;
  }, {});

const getServiceNames = services => services.map(service => service.Spec.Name);

// fetch("http://10.25.96.22:2375/events").map(console.log);
// const http = require("http");
// const url = "http://10.25.96.22:2375/events";
// http.get(url, res => {
//   res.on("data", data => console.log(data.toString()));
// });

const nodes$ = most.periodic(60000).map(fetchNodes);
const tic$ = most.periodic(2000);

most.combine(fetchContainers, tic$, nodes$).observe(res => {
  res.then(containers => {
    // const serviceNames = getServiceNames(services);
    // console.log(tasks);
    const instances = getInstanceState(tasks);
    // const instances = getInstanceState(containers);
    // console.log(JSON.stringify(instances, null, 2));
    mqtt.publish("/bigboat/instances", instances);
  });
});
// most
//   .periodic(2000)
//   .map(fetchSwarmEntities)
//   .observe(res =>
//     res.then(tasks => {
//       // const serviceNames = getServiceNames(services);
//       // console.log(tasks);
//       const instances = getInstanceState(tasks);
//       // const instances = getInstanceState(containers);
//       // console.log(JSON.stringify(instances, null, 2));
//       mqtt.publish("/bigboat/instances", instances);
//     })
//   );
