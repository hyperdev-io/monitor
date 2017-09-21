const mqtt = require("mqtt");

module.exports = mqttConfig => {
  var client;
  client = mqtt.connect(mqttConfig.url, mqttConfig);
  client.on("connect", () => {
    console.log("Connected to", mqttConfig.url);
  });

  client.on("error", err => {
    console.error("An error occured", err);
  });
  client.on("close", () => {
    console.log("Connection closed");
  });

  return {
    publish: (topic, data) => {
      client.publish(topic, JSON.stringify(data), { retain: true }, err => {
        if (err) {
          consol.error(mqttConfig.topicNs + topic, err);
        }
      });
    }
  };
};
