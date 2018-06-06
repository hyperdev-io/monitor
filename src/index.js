const assert = require("assert");
const mqtt = require("@bigboat/mqtt-client");

const swarm = require("./swarm");

const managerUrl = process.env.SWARM_MANAGER_URL;
const networkName = process.env.NET_NAME;

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

  swarm.watch(mqtt(), opts);
};
