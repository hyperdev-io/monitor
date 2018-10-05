const _ = require("lodash");

const tasks = [
  {
    Status: {
      Timestamp: "2017-11-03T12:09:38.947104914Z",
      State: "running",
      Message: "started",
      ContainerStatus: {
        ContainerID:
          "cb162819025a5e56eafd12356115ad75001c1f779e12ff62cf44c4b09219f42d",
        PID: 31801
      },
      PortStatus: {}
    },
    DesiredState: "running",
    NetworksAttachments: [
      {
        Network: {
          ID: "yx1hkofxp9os0n05gsx7wpyde",
          Version: { Index: 128555 },
          CreatedAt: "2017-09-15T12:44:34.894736386Z",
          UpdatedAt: "2017-09-19T13:38:35.308651709Z",
          Spec: {
            Name: "swarm-net",
            Labels: {},
            DriverConfiguration: { Name: "overlay" },
            Attachable: true,
            IPAMOptions: {
              Driver: { Name: "default" },
              Configs: [{ Subnet: "10.50.2.0/24", Gateway: "10.50.2.254" }]
            },
            Scope: "swarm"
          },
          DriverState: {
            Name: "overlay",
            Options: {
              "com.docker.network.driver.overlay.vxlanid_list": "4097"
            }
          },
          IPAMOptions: {
            Driver: { Name: "default" },
            Configs: [{ Subnet: "10.50.2.0/24", Gateway: "10.50.2.254" }]
          }
        },
        Addresses: ["10.50.2.5/24"]
      },
      {
        Network: {
          ID: "f5szftocoahnhhkz3wcsuu9om",
          Version: { Index: 251754 },
          CreatedAt: "2017-11-03T12:09:35.340508776Z",
          UpdatedAt: "2017-11-03T12:09:35.34866986Z",
          Spec: {
            Name: "swarm-sonar_private",
            Labels: { "com.docker.stack.namespace": "swarm-sonar" },
            DriverConfiguration: { Name: "overlay" },
            Scope: "swarm"
          },
          DriverState: {
            Name: "overlay",
            Options: {
              "com.docker.network.driver.overlay.vxlanid_list": "4099"
            }
          },
          IPAMOptions: {
            Driver: { Name: "default" },
            Configs: [{ Subnet: "10.0.1.0/24", Gateway: "10.0.1.1" }]
          }
        },
        Addresses: ["10.0.1.2/24"]
      }
    ]
  },
  {
    Status: {
      Timestamp: "2017-11-03T12:09:40.487496763Z",
      State: "running",
      Message: "started",
      ContainerStatus: {
        ContainerID:
          "10434d52c8a2652a1bd31a19b16a8f76ae04ae245c0f2f56b781855ddaf63037",
        PID: 11729
      },
      PortStatus: {}
    },
    DesiredState: "running",
    NetworksAttachments: [
      {
        Network: {
          ID: "yx1hkofxp9os0n05gsx7wpyde",
          Version: { Index: 128555 },
          CreatedAt: "2017-09-15T12:44:34.894736386Z",
          UpdatedAt: "2017-09-19T13:38:35.308651709Z",
          Spec: {
            Name: "swarm-net",
            Labels: {},
            DriverConfiguration: { Name: "overlay" },
            Attachable: true,
            IPAMOptions: {
              Driver: { Name: "default" },
              Configs: [{ Subnet: "10.50.2.0/24", Gateway: "10.50.2.254" }]
            },
            Scope: "swarm"
          },
          DriverState: {
            Name: "overlay",
            Options: {
              "com.docker.network.driver.overlay.vxlanid_list": "4097"
            }
          },
          IPAMOptions: {
            Driver: { Name: "default" },
            Configs: [{ Subnet: "10.50.2.0/24", Gateway: "10.50.2.254" }]
          }
        },
        Addresses: ["10.50.2.6/24"]
      },
      {
        Network: {
          ID: "f5szftocoahnhhkz3wcsuu9om",
          Version: { Index: 251754 },
          CreatedAt: "2017-11-03T12:09:35.340508776Z",
          UpdatedAt: "2017-11-03T12:09:35.34866986Z",
          Spec: {
            Name: "swarm-sonar_private",
            Labels: { "com.docker.stack.namespace": "swarm-sonar" },
            DriverConfiguration: { Name: "overlay" },
            Scope: "swarm"
          },
          DriverState: {
            Name: "overlay",
            Options: {
              "com.docker.network.driver.overlay.vxlanid_list": "4099"
            }
          },
          IPAMOptions: {
            Driver: { Name: "default" },
            Configs: [{ Subnet: "10.0.1.0/24", Gateway: "10.0.1.1" }]
          }
        },
        Addresses: ["10.0.1.3/24"]
      }
    ]
  }
];
const services = [
  {
    ID: "jjqf4db07jvggtwx6ces4qszk",
    Spec: {
      Name: "swarm-sonar_www",
      Labels: {
        "bigboat.agent.url": "http://agent",
        "bigboat.application.name": "sonar",
        "bigboat.application.version": "6.4.1",
        "bigboat.domain": "swarm",
        "bigboat.instance.name": "sonar",
        "bigboat.instance.endpoint.path": ":9000",
        "bigboat.instance.endpoint.protocol": "https",
        "bigboat.service.name": "www",
        "bigboat.service.type": "service",
        "bigboat.startedBy": "ex9W6G6RdwzMRAFut",
        "bigboat.storage.bucket": "sonar",
        "bigboat.tld": "ictu",
        "com.docker.stack.image": "ictu/sonar:6.4.1",
        "com.docker.stack.namespace": "swarm-sonar"
      }
    },
    CurrentTasks: [tasks[0]]
  },
  {
    ID: "oyri69t9tn4lvcyx7zs4myfkx",
    Spec: {
      Name: "swarm-sonar_db",
      Labels: {
        "bigboat.agent.url": "http://agent",
        "bigboat.application.name": "sonar",
        "bigboat.application.version": "6.4.1",
        "bigboat.domain": "swarm",
        "bigboat.instance.name": "sonar",
        "bigboat.service.name": "db",
        "bigboat.service.type": "service",
        "bigboat.startedBy": "ex9W6G6RdwzMRAFut",
        "bigboat.storage.bucket": "sonar",
        "bigboat.tld": "ictu",
        "com.docker.stack.image": "postgres",
        "com.docker.stack.namespace": "swarm-sonar"
      }
    },
    CurrentTasks: [tasks[1]]
  }
];

const makeFailing = service =>
  _.merge({}, service, {
    CurrentTasks: [{ Status: { State: "failing" } }]
  });

const logs = {
  db: {
    "200":
      "http://10.25.96.21:2375/services/oyri69t9tn4lvcyx7zs4myfkx/logs?timestamps=true&stdout=true&stderr=true&tail=200",
    "500":
      "http://10.25.96.21:2375/services/oyri69t9tn4lvcyx7zs4myfkx/logs?timestamps=true&stdout=true&stderr=true&tail=500",
    "1000":
      "http://10.25.96.21:2375/services/oyri69t9tn4lvcyx7zs4myfkx/logs?timestamps=true&stdout=true&stderr=true&tail=1000",
    all:
      "http://10.25.96.21:2375/services/oyri69t9tn4lvcyx7zs4myfkx/logs?timestamps=true&stdout=true&stderr=true",
    follow:
      "http://10.25.96.21:2375/services/oyri69t9tn4lvcyx7zs4myfkx/logs?timestamps=true&stdout=true&stderr=true&follow=true"
  },
  www: {
    "200":
      "http://10.25.96.21:2375/services/jjqf4db07jvggtwx6ces4qszk/logs?timestamps=true&stdout=true&stderr=true&tail=200",
    "500":
      "http://10.25.96.21:2375/services/jjqf4db07jvggtwx6ces4qszk/logs?timestamps=true&stdout=true&stderr=true&tail=500",
    "1000":
      "http://10.25.96.21:2375/services/jjqf4db07jvggtwx6ces4qszk/logs?timestamps=true&stdout=true&stderr=true&tail=1000",
    all:
      "http://10.25.96.21:2375/services/jjqf4db07jvggtwx6ces4qszk/logs?timestamps=true&stdout=true&stderr=true",
    follow:
      "http://10.25.96.21:2375/services/jjqf4db07jvggtwx6ces4qszk/logs?timestamps=true&stdout=true&stderr=true&follow=true"
  }
};

module.exports = {
  single: {
    running: {
      services: [services[0]],
      instances: {
        sonar: {
          name: "sonar",
          agent: {
            url: "http://agent"
          },
          app: {
            name: "sonar",
            version: "6.4.1"
          },
          storageBucket: "sonar",
          startedBy: "ex9W6G6RdwzMRAFut",
          state: "running",
          services: {
            www: {
              logs: logs.www,
              endpoint: {
                path: ":9000",
                protocol: "https"
              },
              errors: "",
              ip: "10.50.2.5",
              fqdn: "www.sonar.swarm.ictu",
              state: "running"
            }
          }
        }
      }
    },
    failing: {
      services: [makeFailing(services[0])],
      instances: {
        sonar: {
          name: "sonar",
          agent: {
            url: "http://agent"
          },
          app: {
            name: "sonar",
            version: "6.4.1"
          },
          storageBucket: "sonar",
          startedBy: "ex9W6G6RdwzMRAFut",
          state: "failing",
          services: {
            www: {
              logs: logs.www,
              endpoint: {
                path: ":9000",
                protocol: "https"
              },
              errors: "",
              ip: "10.50.2.5",
              fqdn: "www.sonar.swarm.ictu",
              state: "failing"
            }
          }
        }
      }
    }
  },
  multi: {
    running: {
      services,
      instances: {
        sonar: {
          name: "sonar",
          agent: {
            url: "http://agent"
          },
          app: {
            name: "sonar",
            version: "6.4.1"
          },
          storageBucket: "sonar",
          startedBy: "ex9W6G6RdwzMRAFut",
          state: "running",
          services: {
            www: {
              logs: logs.www,
              endpoint: {
                path: ":9000",
                protocol: "https"
              },
              errors: "",
              ip: "10.50.2.5",
              fqdn: "www.sonar.swarm.ictu",
              state: "running"
            },
            db: {
              endpoint: {
                path: undefined,
                protocol: undefined
              },
              errors: "",
              logs: logs.db,
              ip: "10.50.2.6",
              fqdn: "db.sonar.swarm.ictu",
              state: "running"
            }
          }
        }
      }
    },
    failing: {
      services: [services[0], makeFailing(services[1])],
      instances: {
        sonar: {
          name: "sonar",
          agent: {
            url: "http://agent"
          },
          app: {
            name: "sonar",
            version: "6.4.1"
          },
          storageBucket: "sonar",
          startedBy: "ex9W6G6RdwzMRAFut",
          state: "failing",
          services: {
            www: {
              logs: logs.www,
              endpoint: {
                path: ":9000",
                protocol: "https"
              },
              errors: "",
              ip: "10.50.2.5",
              fqdn: "www.sonar.swarm.ictu",
              state: "running"
            },
            db: {
              endpoint: {
                path: undefined,
                protocol: undefined
              },
              errors: "",
              logs: logs.db,
              ip: "10.50.2.6",
              fqdn: "db.sonar.swarm.ictu",
              state: "failing"
            }
          }
        }
      }
    }
  }
};
