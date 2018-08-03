const assert = require("assert");
const instances = require("../src/instances");
const calcInstanceState = instances("swarm-net", "http://10.25.96.21:2375");

const testData = require("./data");

const check = data => () => {
  const actual = calcInstanceState(data.services, data.containers);
  assert.deepEqual(actual, data.instances);
};

describe("Instance state", () => {
  it("from a single running service", check(testData.single.running));
  it("from a single failing service", check(testData.single.failing));
  it("from multiple running services", check(testData.multi.running));
  it(
    "from multiple services where one is failing",
    check(testData.multi.failing)
  );
});
