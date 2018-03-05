const assert = require("assert");
const mqtt = require("@bigboat/mqtt-client");

const swarm = require("./swarm");

const managerUrl = process.env.SWARM_MANAGER_URL;
const networkName = process.env.NET_NAME;

const opts = {
  managerUrl,
  networkName,
  scanInterval: {
    services: 5000
  }
};

process.on("unhandledRejection", up => {
  // Crash the node process on unhandled rejection
  throw up;
});
module.exports = () => {
  assert(managerUrl, "SWARM_MANAGER_URL is required");
  assert(networkName, "NET_NAME is required");

  swarm.watch(mqtt(), opts);
};
