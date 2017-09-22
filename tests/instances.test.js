const assert = require("assert");
const instances = require("../src/instances");
const calcInstanceState = instances("swarm-net");

const testData = require("./data");

describe("Instance state", () => {
  it("from a single running conainer", () => {
    const actual = calcInstanceState(testData.single.containers);
    assert.deepEqual(actual, testData.single.instances);
  });
  it("from a single failing conainer", () => {
    const actual = calcInstanceState(testData.failing.containers);
    assert.deepEqual(actual, testData.failing.instances);
  });
});
