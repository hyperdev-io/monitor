const most = require("most");
const fetch = require("node-fetch");
const _ = require("lodash");

const mqttSettings = {
  url: "mqtt://localhost:1883"
};
const mqtt = require("./mqtt")(mqttSettings);

const fetchNodes = () =>
  fetch(`http://10.25.96.22:2375/nodes`)
    .then(res => res.json())
    .then(nodes => nodes.map(node => node.Status.Addr));

const fetchContainers = nodeIp =>
  fetch(
    `http://${nodeIp}:2375/containers/json?filters={"label":["bigboat.service.type"]}`
  ).then(res => res.json());

const fetchAllContainers = nodes => {
  const result = Promise.resolve([]);
  if (nodes && nodes.length) {
    const containers = nodes.map(node => fetchContainers(node));
    return Promise.all(containers);
  }
  return result;
};

const nodes$ = most
  .periodic(60000)
  .map(fetchNodes)
  .chain(most.fromPromise);

const calcInstanceState = require("./instances");
most
  .combine(fetchAllContainers, nodes$, most.periodic(5000))
  .chain(most.fromPromise)
  .observe(containers => {
    const allContainers = _.flatten(containers);
    const instances = calcInstanceState(allContainers);
    mqtt.publish("/bigboat/instances", instances);
  });
