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

const containers = [
  {
    Id: "88f7b6be6d382665a2b37260f5e42939e49549532f8705721d5218607af1cb41",
    Names: ["/swarm-sonar_www.1.k45jksij0zwvd1c3yyfd1kuy2"],
    Image:
      "ictu/sonar:6.4.1@sha256:c72c8628da3326fae062d6e80710d85243c69133d04803563433dc3990c09bb8",
    ImageID:
      "sha256:939cd279a4e09ddc8d657467dd6c75a339871bb3c0bef956bd64ab8c40750539",
    Command: "./bin/run.sh",
    Created: 1506066037,
    Ports: [
      {
        PrivatePort: 9000,
        Type: "tcp"
      }
    ],
    Labels: {
      "bigboat.agent.url": "http://agent",
      "bigboat.application.name": "sonar",
      "bigboat.application.version": "6.4.1",
      "bigboat.domain": "swarm",
      "bigboat.instance.name": "sonar",
      "bigboat.service.name": "www",
      "bigboat.service.type": "service",
      "bigboat.startedBy": "ex9W6G6RdwzMRAFut",
      "bigboat.storage.bucket": "sonar",
      "bigboat.tld": "ictu",
      "com.docker.stack.namespace": "swarm-sonar",
      "com.docker.swarm.node.id": "sfmczt3ik53p36v412nzq38hb",
      "com.docker.swarm.service.id": "jjqf4db07jvggtwx6ces4qszk",
      "com.docker.swarm.service.name": "swarm-sonar_www",
      "com.docker.swarm.task": "",
      "com.docker.swarm.task.id": "k45jksij0zwvd1c3yyfd1kuy2",
      "com.docker.swarm.task.name":
        "swarm-sonar_www.1.k45jksij0zwvd1c3yyfd1kuy2"
    },
    State: "running",
    Status: "Up 2 hours",
    HostConfig: {
      NetworkMode: "default"
    },
    NetworkSettings: {
      Networks: {
        "swarm-net": {
          IPAMConfig: {
            IPv4Address: "10.50.2.6"
          },
          Links: null,
          Aliases: null,
          NetworkID: "yx1hkofxp9os0n05gsx7wpyde",
          EndpointID:
            "00e94e1459673e8712defb843cc876d403dadcfe35e11ab8382b3c8d211dca73",
          Gateway: "",
          IPAddress: "10.50.2.6",
          IPPrefixLen: 24,
          IPv6Gateway: "",
          GlobalIPv6Address: "",
          GlobalIPv6PrefixLen: 0,
          MacAddress: "02:42:0a:32:02:06",
          DriverOpts: null
        }
      }
    },
    Mounts: [
      {
        Type: "bind",
        Source: "/etc/localtime",
        Destination: "/etc/localtime",
        Mode: "",
        RW: false,
        Propagation: "rprivate"
      },
      {
        Type: "volume",
        Name:
          "99cb283ac5e731381df828b5143e260e41f5c00095e7497c41849f6a893c720c",
        Source:
          "/var/lib/docker/volumes/99cb283ac5e731381df828b5143e260e41f5c00095e7497c41849f6a893c720c/_data",
        Destination: "/opt/sonarqube/data",
        Driver: "local",
        Mode: "",
        RW: true,
        Propagation: ""
      }
    ]
  },
  {
    Id: "10434d52c8a2652a1bd31a19b16a8f76ae04ae245c0f2f56b781855ddaf63037",
    Names: ["/swarm-sonar_db.1.em4yby2u5v9b5eoz4qxmbmcto"],
    Image:
      "postgres:latest@sha256:60e613c1e730e55bf7047ea833a49d2f033f5f910268c806a34888306b84c252",
    ImageID:
      "sha256:b106d5a0dc75f330cee9a1c9681ca674846235c04c8c084c5c9de7566990d635",
    Command: "docker-entrypoint.sh postgres",
    Created: 1509710979,
    Ports: [{ PrivatePort: 5432, Type: "tcp" }],
    Labels: {
      "bigboat.agent.url": "http://localhost:8080",
      "bigboat.application.name": "sonar",
      "bigboat.application.version": "6.4.1",
      "bigboat.domain": "swarm",
      "bigboat.instance.name": "sonar",
      "bigboat.service.name": "db",
      "bigboat.service.type": "service",
      "bigboat.startedBy": "cELK3ehmKasbFBgkK",
      "bigboat.storage.bucket": "sonar",
      "bigboat.tld": "ictu",
      "com.docker.stack.namespace": "swarm-sonar",
      "com.docker.swarm.node.id": "sfmczt3ik53p36v412nzq38hb",
      "com.docker.swarm.service.id": "pihpaognsbhrskcyu50z1s04c",
      "com.docker.swarm.service.name": "swarm-sonar_db",
      "com.docker.swarm.task": "",
      "com.docker.swarm.task.id": "em4yby2u5v9b5eoz4qxmbmcto",
      "com.docker.swarm.task.name": "swarm-sonar_db.1.em4yby2u5v9b5eoz4qxmbmcto"
    },
    State: "running",
    Status: "Up 42 minutes",
    HostConfig: { NetworkMode: "default" },
    NetworkSettings: {
      Networks: {
        "swarm-net": {
          IPAMConfig: { IPv4Address: "10.50.2.6" },
          Links: null,
          Aliases: null,
          NetworkID: "yx1hkofxp9os0n05gsx7wpyde",
          EndpointID:
            "dd20f381a8c826f5573139afbae85d7b113adefd748997beefe14efa71acc938",
          Gateway: "",
          IPAddress: "10.50.2.6",
          IPPrefixLen: 24,
          IPv6Gateway: "",
          GlobalIPv6Address: "",
          GlobalIPv6PrefixLen: 0,
          MacAddress: "02:42:0a:32:02:06",
          DriverOpts: null
        },
        "swarm-sonar_private": {
          IPAMConfig: { IPv4Address: "10.0.1.3" },
          Links: null,
          Aliases: null,
          NetworkID: "f5szftocoahnhhkz3wcsuu9om",
          EndpointID:
            "57f8b75a2a3c774300631d1d27ab7268887775cfac27f50771814ce32f31af89",
          Gateway: "",
          IPAddress: "10.0.1.3",
          IPPrefixLen: 24,
          IPv6Gateway: "",
          GlobalIPv6Address: "",
          GlobalIPv6PrefixLen: 0,
          MacAddress: "02:42:0a:00:01:03",
          DriverOpts: null
        }
      }
    },
    Mounts: [
      {
        Type: "bind",
        Source: "/etc/localtime",
        Destination: "/etc/localtime",
        Mode: "",
        RW: false,
        Propagation: "rprivate"
      },
      {
        Type: "volume",
        Name:
          "5c0dac99c0f4f1410770c5661cb9d001ae8172716ced7143d82f64019490a67e",
        Source:
          "/var/lib/docker/volumes/5c0dac99c0f4f1410770c5661cb9d001ae8172716ced7143d82f64019490a67e/_data",
        Destination: "/var/lib/postgresql/data",
        Driver: "local",
        Mode: "",
        RW: true,
        Propagation: ""
      }
    ]
  }
];

const makeFailing = service =>
  _.merge({}, service, {
    CurrentTasks: [{ Status: { State: "failing" } }]
  });

module.exports = {
  single: {
    running: {
      services: [services[0]],
      containers,
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
              logsUrl:
                "http://10.25.96.21:2375/services/jjqf4db07jvggtwx6ces4qszk/logs?timestamps=true&stdout=true&stderr=true&tail=1000",
              container: {
                id:
                  "88f7b6be6d382665a2b37260f5e42939e49549532f8705721d5218607af1cb41",
                name: ["/swarm-sonar_www.1.k45jksij0zwvd1c3yyfd1kuy2"],
                created: 1506066037000
              },
              endpoint: {
                path: ":9000",
                protocol: "https"
              },
              errors: "",
              ip: "10.50.2.5",
              fqdn: "www.sonar.swarm.ictu",
              ports: ["9000/tcp"],
              state: "running"
            }
          }
        }
      }
    },
    failing: {
      services: [makeFailing(services[0])],
      containers,
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
              logsUrl:
                "http://10.25.96.21:2375/services/jjqf4db07jvggtwx6ces4qszk/logs?timestamps=true&stdout=true&stderr=true&tail=1000",
              container: {
                id:
                  "88f7b6be6d382665a2b37260f5e42939e49549532f8705721d5218607af1cb41",
                name: ["/swarm-sonar_www.1.k45jksij0zwvd1c3yyfd1kuy2"],
                created: 1506066037000
              },
              endpoint: {
                path: ":9000",
                protocol: "https"
              },
              errors: "",
              ip: "10.50.2.5",
              fqdn: "www.sonar.swarm.ictu",
              ports: ["9000/tcp"],
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
      containers,
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
              logsUrl:
                "http://10.25.96.21:2375/services/jjqf4db07jvggtwx6ces4qszk/logs?timestamps=true&stdout=true&stderr=true&tail=1000",
              container: {
                id:
                  "88f7b6be6d382665a2b37260f5e42939e49549532f8705721d5218607af1cb41",
                name: ["/swarm-sonar_www.1.k45jksij0zwvd1c3yyfd1kuy2"],
                created: 1506066037000
              },
              endpoint: {
                path: ":9000",
                protocol: "https"
              },
              errors: "",
              ip: "10.50.2.5",
              fqdn: "www.sonar.swarm.ictu",
              ports: ["9000/tcp"],
              state: "running"
            },
            db: {
              endpoint: {
                path: undefined,
                protocol: undefined
              },
              errors: "",
              logsUrl:
                "http://10.25.96.21:2375/services/oyri69t9tn4lvcyx7zs4myfkx/logs?timestamps=true&stdout=true&stderr=true&tail=1000",
              container: {
                id:
                  "10434d52c8a2652a1bd31a19b16a8f76ae04ae245c0f2f56b781855ddaf63037",
                name: ["/swarm-sonar_db.1.em4yby2u5v9b5eoz4qxmbmcto"],
                created: 1509710979000
              },
              ip: "10.50.2.6",
              fqdn: "db.sonar.swarm.ictu",
              ports: ["5432/tcp"],
              state: "running"
            }
          }
        }
      }
    },
    failing: {
      services: [services[0], makeFailing(services[1])],
      containers,
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
              logsUrl:
                "http://10.25.96.21:2375/services/jjqf4db07jvggtwx6ces4qszk/logs?timestamps=true&stdout=true&stderr=true&tail=1000",
              container: {
                id:
                  "88f7b6be6d382665a2b37260f5e42939e49549532f8705721d5218607af1cb41",
                name: ["/swarm-sonar_www.1.k45jksij0zwvd1c3yyfd1kuy2"],
                created: 1506066037000
              },
              endpoint: {
                path: ":9000",
                protocol: "https"
              },
              errors: "",
              ip: "10.50.2.5",
              fqdn: "www.sonar.swarm.ictu",
              ports: ["9000/tcp"],
              state: "running"
            },
            db: {
              endpoint: {
                path: undefined,
                protocol: undefined
              },
              errors: "",
              logsUrl:
                "http://10.25.96.21:2375/services/oyri69t9tn4lvcyx7zs4myfkx/logs?timestamps=true&stdout=true&stderr=true&tail=1000",
              container: {
                id:
                  "10434d52c8a2652a1bd31a19b16a8f76ae04ae245c0f2f56b781855ddaf63037",
                name: ["/swarm-sonar_db.1.em4yby2u5v9b5eoz4qxmbmcto"],
                created: 1509710979000
              },
              ip: "10.50.2.6",
              fqdn: "db.sonar.swarm.ictu",
              ports: ["5432/tcp"],
              state: "failing"
            }
          }
        }
      }
    }
  }
};
