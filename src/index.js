const assert = require("assert");

const swarm = require("./swarm");
const mqtt = require("./mqtt");

const managerUrl = process.env.SWARM_MANAGER_URL;
const networkName = process.env.NET_NAME;

const mqttSettings = {
  url: process.env.MQTT_URL,
  username: process.env.MQTT_USERNAME,
  passwrod: process.env.MQTT_PASSWORD
};

const opts = {
  managerUrl,
  networkName,
  scanInterval: {
    nodes: 60000,
    containers: 5000
  }
};

module.exports = () => {
  assert(managerUrl, "SWARM_MANAGER_URL is required");
  assert(networkName, "NET_NAME is required");
  assert(mqttSettings.url, "MQTT_URL is required");

  swarm.watch(mqtt(mqttSettings), opts);
};
