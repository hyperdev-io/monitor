const swarm = require("./swarm");
const mqtt = require("./mqtt");

const managerUrl = process.env.SWARM_MANAGER_URL || "http://10.25.96.21:2375";
const networkName = process.env.NET_NAME || "swarm-net";

const mqttSettings = {
  url: process.env.MQTT_URL || "mqtt://localhost:1883",
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

swarm.watch(mqtt(mqttSettings), opts);
