module.exports = {
  single: {
    containers: [
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
      }
    ],
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
            container: {
              id:
                "88f7b6be6d382665a2b37260f5e42939e49549532f8705721d5218607af1cb41",
              name: ["/swarm-sonar_www.1.k45jksij0zwvd1c3yyfd1kuy2"],
              created: 1506066037000
            },
            ip: "10.50.2.6",
            fqdn: "www.sonar.swarm.ictu",
            ports: ["9000/tcp"],
            state: "running"
          }
        }
      }
    }
  },
  failing: {
    containers: [
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
        State: "failing",
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
      }
    ],
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
            container: {
              id:
                "88f7b6be6d382665a2b37260f5e42939e49549532f8705721d5218607af1cb41",
              name: ["/swarm-sonar_www.1.k45jksij0zwvd1c3yyfd1kuy2"],
              created: 1506066037000
            },
            ip: "10.50.2.6",
            fqdn: "www.sonar.swarm.ictu",
            ports: ["9000/tcp"],
            state: "failing"
          }
        }
      }
    }
  }
};
