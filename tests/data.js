module.exports = {
  single: {
    running: {
      services: [
        {
          ID: "jjqf4db07jvggtwx6ces4qszk",
          Version: {
            Index: 128913
          },
          CreatedAt: "2017-09-22T07:40:12.343163341Z",
          UpdatedAt: "2017-09-22T07:40:12.343163341Z",
          Spec: {
            Name: "swarm-sonar_www",
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
              "com.docker.stack.image": "ictu/sonar:6.4.1",
              "com.docker.stack.namespace": "swarm-sonar"
            },
            TaskTemplate: {
              ContainerSpec: {
                Image:
                  "ictu/sonar:6.4.1@sha256:c72c8628da3326fae062d6e80710d85243c69133d04803563433dc3990c09bb8",
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
                  "com.docker.stack.namespace": "swarm-sonar"
                },
                Hostname: "www.sonar.swarm.ictu",
                Env: [
                  "SONARQUBE_JDBC_PASSWORD=sonar",
                  "SONARQUBE_JDBC_URL=jdbc:postgresql://db:5432/sonar",
                  "SONARQUBE_JDBC_USERNAME=sonar"
                ],
                Privileges: {
                  CredentialSpec: null,
                  SELinuxContext: null
                },
                Mounts: [
                  {
                    Type: "bind",
                    Source: "/etc/localtime",
                    Target: "/etc/localtime",
                    ReadOnly: true
                  }
                ]
              },
              Resources: {
                Limits: {
                  MemoryBytes: 1073741824
                }
              },
              Placement: {
                Platforms: [
                  {
                    Architecture: "amd64",
                    OS: "linux"
                  }
                ]
              },
              Networks: [
                {
                  Target: "yx1hkofxp9os0n05gsx7wpyde",
                  Aliases: ["www.sonar.swarm.ictu", "www"]
                }
              ],
              ForceUpdate: 0,
              Runtime: "container"
            },
            Mode: {
              Replicated: {
                Replicas: 1
              }
            },
            EndpointSpec: {
              Mode: "dnsrr"
            }
          },
          Endpoint: {
            Spec: {}
          }
        }
      ],
      containers: [
        {
          Id:
            "88f7b6be6d382665a2b37260f5e42939e49549532f8705721d5218607af1cb41",
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
              logsUrl:
                "http://10.25.96.21:2375/services/jjqf4db07jvggtwx6ces4qszk/logs?timestamps=true&stdout=true&stderr=true&tail=200",
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
      services: [
        {
          ID: "jjqf4db07jvggtwx6ces4qszk",
          Version: {
            Index: 128913
          },
          CreatedAt: "2017-09-22T07:40:12.343163341Z",
          UpdatedAt: "2017-09-22T07:40:12.343163341Z",
          Spec: {
            Name: "swarm-sonar_www",
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
              "com.docker.stack.image": "ictu/sonar:6.4.1",
              "com.docker.stack.namespace": "swarm-sonar"
            },
            TaskTemplate: {
              ContainerSpec: {
                Image:
                  "ictu/sonar:6.4.1@sha256:c72c8628da3326fae062d6e80710d85243c69133d04803563433dc3990c09bb8",
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
                  "com.docker.stack.namespace": "swarm-sonar"
                },
                Hostname: "www.sonar.swarm.ictu",
                Env: [
                  "SONARQUBE_JDBC_PASSWORD=sonar",
                  "SONARQUBE_JDBC_URL=jdbc:postgresql://db:5432/sonar",
                  "SONARQUBE_JDBC_USERNAME=sonar"
                ],
                Privileges: {
                  CredentialSpec: null,
                  SELinuxContext: null
                },
                Mounts: [
                  {
                    Type: "bind",
                    Source: "/etc/localtime",
                    Target: "/etc/localtime",
                    ReadOnly: true
                  }
                ]
              },
              Resources: {
                Limits: {
                  MemoryBytes: 1073741824
                }
              },
              Placement: {
                Platforms: [
                  {
                    Architecture: "amd64",
                    OS: "linux"
                  }
                ]
              },
              Networks: [
                {
                  Target: "yx1hkofxp9os0n05gsx7wpyde",
                  Aliases: ["www.sonar.swarm.ictu", "www"]
                }
              ],
              ForceUpdate: 0,
              Runtime: "container"
            },
            Mode: {
              Replicated: {
                Replicas: 1
              }
            },
            EndpointSpec: {
              Mode: "dnsrr"
            }
          },
          Endpoint: {
            Spec: {}
          }
        }
      ],
      containers: [
        {
          Id:
            "88f7b6be6d382665a2b37260f5e42939e49549532f8705721d5218607af1cb41",
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
              logsUrl:
                "http://10.25.96.21:2375/services/jjqf4db07jvggtwx6ces4qszk/logs?timestamps=true&stdout=true&stderr=true&tail=200",
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
  },
  multi: {
    running: {
      services: [
        {
          ID: "jjqf4db07jvggtwx6ces4qszk",
          Version: {
            Index: 128913
          },
          CreatedAt: "2017-09-22T07:40:12.343163341Z",
          UpdatedAt: "2017-09-22T07:40:12.343163341Z",
          Spec: {
            Name: "swarm-sonar_www",
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
              "com.docker.stack.image": "ictu/sonar:6.4.1",
              "com.docker.stack.namespace": "swarm-sonar"
            },
            TaskTemplate: {
              ContainerSpec: {
                Image:
                  "ictu/sonar:6.4.1@sha256:c72c8628da3326fae062d6e80710d85243c69133d04803563433dc3990c09bb8",
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
                  "com.docker.stack.namespace": "swarm-sonar"
                },
                Hostname: "www.sonar.swarm.ictu",
                Env: [
                  "SONARQUBE_JDBC_PASSWORD=sonar",
                  "SONARQUBE_JDBC_URL=jdbc:postgresql://db:5432/sonar",
                  "SONARQUBE_JDBC_USERNAME=sonar"
                ],
                Privileges: {
                  CredentialSpec: null,
                  SELinuxContext: null
                },
                Mounts: [
                  {
                    Type: "bind",
                    Source: "/etc/localtime",
                    Target: "/etc/localtime",
                    ReadOnly: true
                  }
                ]
              },
              Resources: {
                Limits: {
                  MemoryBytes: 1073741824
                }
              },
              Placement: {
                Platforms: [
                  {
                    Architecture: "amd64",
                    OS: "linux"
                  }
                ]
              },
              Networks: [
                {
                  Target: "yx1hkofxp9os0n05gsx7wpyde",
                  Aliases: ["www.sonar.swarm.ictu", "www"]
                }
              ],
              ForceUpdate: 0,
              Runtime: "container"
            },
            Mode: {
              Replicated: {
                Replicas: 1
              }
            },
            EndpointSpec: {
              Mode: "dnsrr"
            }
          },
          Endpoint: {
            Spec: {}
          }
        },
        {
          ID: "oyri69t9tn4lvcyx7zs4myfkx",
          Version: {
            Index: 128908
          },
          CreatedAt: "2017-09-22T07:40:09.384537516Z",
          UpdatedAt: "2017-09-22T07:40:09.384537516Z",
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
            },
            TaskTemplate: {
              ContainerSpec: {
                Image:
                  "postgres:latest@sha256:144221a1e46af653bdda2bbb8e46ad3dd0c3f61ec0430030581031937f1d589d",
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
                  "com.docker.stack.namespace": "swarm-sonar"
                },
                Hostname: "db.sonar.swarm.ictu",
                Env: ["POSTGRES_PASSWORD=sonar", "POSTGRES_USER=sonar"],
                Privileges: {
                  CredentialSpec: null,
                  SELinuxContext: null
                },
                Mounts: [
                  {
                    Type: "bind",
                    Source: "/shared/data/swarm/sonar/postgresql",
                    Target: "/var/lib/postgresql"
                  },
                  {
                    Type: "bind",
                    Source: "/shared/data/swarm/sonar/postgresql_data",
                    Target: "/var/lib/postgresql/data"
                  },
                  {
                    Type: "bind",
                    Source: "/etc/localtime",
                    Target: "/etc/localtime",
                    ReadOnly: true
                  }
                ]
              },
              Resources: {
                Limits: {
                  MemoryBytes: 1073741824
                }
              },
              Placement: {
                Platforms: [
                  {
                    Architecture: "amd64",
                    OS: "linux"
                  },
                  {
                    Architecture: "arm",
                    OS: "linux"
                  },
                  {
                    Architecture: "arm",
                    OS: "linux"
                  },
                  {
                    Architecture: "arm64",
                    OS: "linux"
                  },
                  {
                    Architecture: "386",
                    OS: "linux"
                  },
                  {
                    Architecture: "ppc64le",
                    OS: "linux"
                  },
                  {
                    Architecture: "s390x",
                    OS: "linux"
                  }
                ]
              },
              Networks: [
                {
                  Target: "yx1hkofxp9os0n05gsx7wpyde",
                  Aliases: ["db.sonar.swarm.ictu", "db"]
                }
              ],
              ForceUpdate: 0,
              Runtime: "container"
            },
            Mode: {
              Replicated: {
                Replicas: 1
              }
            },
            EndpointSpec: {
              Mode: "dnsrr"
            }
          },
          Endpoint: {
            Spec: {}
          }
        }
      ],
      containers: [
        {
          Id:
            "88f7b6be6d382665a2b37260f5e42939e49549532f8705721d5218607af1cb41",
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
          Id:
            "293d7ff81e1dcd1460e7148541562d2bb57a5f6c540d5f500a88d9828ad83523",
          Names: ["/swarm-sonar_db.1.2gfv8uwscqm9445bl43irom8t"],
          Image:
            "postgres:latest@sha256:144221a1e46af653bdda2bbb8e46ad3dd0c3f61ec0430030581031937f1d589d",
          ImageID:
            "sha256:1227c4263c8c59af10d93968ad47e154eedbae2c173633cb4a8ccf49ba28fb19",
          Command: "docker-entrypoint.sh postgres",
          Created: 1506066018,
          Ports: [
            {
              PrivatePort: 5432,
              Type: "tcp"
            }
          ],
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
            "com.docker.stack.namespace": "swarm-sonar",
            "com.docker.swarm.node.id": "kdvcbem9f73zd1jpcg85z8b4c",
            "com.docker.swarm.service.id": "oyri69t9tn4lvcyx7zs4myfkx",
            "com.docker.swarm.service.name": "swarm-sonar_db",
            "com.docker.swarm.task": "",
            "com.docker.swarm.task.id": "2gfv8uwscqm9445bl43irom8t",
            "com.docker.swarm.task.name":
              "swarm-sonar_db.1.2gfv8uwscqm9445bl43irom8t"
          },
          State: "running",
          Status: "Up 6 hours",
          HostConfig: {
            NetworkMode: "default"
          },
          NetworkSettings: {
            Networks: {
              "swarm-net": {
                IPAMConfig: {
                  IPv4Address: "10.50.2.5"
                },
                Links: null,
                Aliases: null,
                NetworkID: "yx1hkofxp9os0n05gsx7wpyde",
                EndpointID:
                  "3f366421e40e4ae46cbe5872613951baaf68799090a1c2860a4901a9c16de7d8",
                Gateway: "",
                IPAddress: "10.50.2.5",
                IPPrefixLen: 24,
                IPv6Gateway: "",
                GlobalIPv6Address: "",
                GlobalIPv6PrefixLen: 0,
                MacAddress: "02:42:0a:32:02:05",
                DriverOpts: null
              }
            }
          },
          Mounts: [
            {
              Type: "bind",
              Source: "/shared/data/swarm/sonar/postgresql",
              Destination: "/var/lib/postgresql",
              Mode: "",
              RW: true,
              Propagation: "rprivate"
            },
            {
              Type: "bind",
              Source: "/shared/data/swarm/sonar/postgresql_data",
              Destination: "/var/lib/postgresql/data",
              Mode: "",
              RW: true,
              Propagation: "rprivate"
            },
            {
              Type: "bind",
              Source: "/etc/localtime",
              Destination: "/etc/localtime",
              Mode: "",
              RW: false,
              Propagation: "rprivate"
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
              logsUrl:
                "http://10.25.96.21:2375/services/jjqf4db07jvggtwx6ces4qszk/logs?timestamps=true&stdout=true&stderr=true&tail=200",
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
            },
            db: {
              logsUrl:
                "http://10.25.96.21:2375/services/oyri69t9tn4lvcyx7zs4myfkx/logs?timestamps=true&stdout=true&stderr=true&tail=200",
              container: {
                id:
                  "293d7ff81e1dcd1460e7148541562d2bb57a5f6c540d5f500a88d9828ad83523",
                name: ["/swarm-sonar_db.1.2gfv8uwscqm9445bl43irom8t"],
                created: 1506066018000
              },
              ip: "10.50.2.5",
              fqdn: "db.sonar.swarm.ictu",
              ports: ["5432/tcp"],
              state: "running"
            }
          }
        }
      }
    },
    failing: {
      services: [
        {
          ID: "jjqf4db07jvggtwx6ces4qszk",
          Version: {
            Index: 128913
          },
          CreatedAt: "2017-09-22T07:40:12.343163341Z",
          UpdatedAt: "2017-09-22T07:40:12.343163341Z",
          Spec: {
            Name: "swarm-sonar_www",
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
              "com.docker.stack.image": "ictu/sonar:6.4.1",
              "com.docker.stack.namespace": "swarm-sonar"
            },
            TaskTemplate: {
              ContainerSpec: {
                Image:
                  "ictu/sonar:6.4.1@sha256:c72c8628da3326fae062d6e80710d85243c69133d04803563433dc3990c09bb8",
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
                  "com.docker.stack.namespace": "swarm-sonar"
                },
                Hostname: "www.sonar.swarm.ictu",
                Env: [
                  "SONARQUBE_JDBC_PASSWORD=sonar",
                  "SONARQUBE_JDBC_URL=jdbc:postgresql://db:5432/sonar",
                  "SONARQUBE_JDBC_USERNAME=sonar"
                ],
                Privileges: {
                  CredentialSpec: null,
                  SELinuxContext: null
                },
                Mounts: [
                  {
                    Type: "bind",
                    Source: "/etc/localtime",
                    Target: "/etc/localtime",
                    ReadOnly: true
                  }
                ]
              },
              Resources: {
                Limits: {
                  MemoryBytes: 1073741824
                }
              },
              Placement: {
                Platforms: [
                  {
                    Architecture: "amd64",
                    OS: "linux"
                  }
                ]
              },
              Networks: [
                {
                  Target: "yx1hkofxp9os0n05gsx7wpyde",
                  Aliases: ["www.sonar.swarm.ictu", "www"]
                }
              ],
              ForceUpdate: 0,
              Runtime: "container"
            },
            Mode: {
              Replicated: {
                Replicas: 1
              }
            },
            EndpointSpec: {
              Mode: "dnsrr"
            }
          },
          Endpoint: {
            Spec: {}
          }
        },
        {
          ID: "oyri69t9tn4lvcyx7zs4myfkx",
          Version: {
            Index: 128908
          },
          CreatedAt: "2017-09-22T07:40:09.384537516Z",
          UpdatedAt: "2017-09-22T07:40:09.384537516Z",
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
            },
            TaskTemplate: {
              ContainerSpec: {
                Image:
                  "postgres:latest@sha256:144221a1e46af653bdda2bbb8e46ad3dd0c3f61ec0430030581031937f1d589d",
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
                  "com.docker.stack.namespace": "swarm-sonar"
                },
                Hostname: "db.sonar.swarm.ictu",
                Env: ["POSTGRES_PASSWORD=sonar", "POSTGRES_USER=sonar"],
                Privileges: {
                  CredentialSpec: null,
                  SELinuxContext: null
                },
                Mounts: [
                  {
                    Type: "bind",
                    Source: "/shared/data/swarm/sonar/postgresql",
                    Target: "/var/lib/postgresql"
                  },
                  {
                    Type: "bind",
                    Source: "/shared/data/swarm/sonar/postgresql_data",
                    Target: "/var/lib/postgresql/data"
                  },
                  {
                    Type: "bind",
                    Source: "/etc/localtime",
                    Target: "/etc/localtime",
                    ReadOnly: true
                  }
                ]
              },
              Resources: {
                Limits: {
                  MemoryBytes: 1073741824
                }
              },
              Placement: {
                Platforms: [
                  {
                    Architecture: "amd64",
                    OS: "linux"
                  },
                  {
                    Architecture: "arm",
                    OS: "linux"
                  },
                  {
                    Architecture: "arm",
                    OS: "linux"
                  },
                  {
                    Architecture: "arm64",
                    OS: "linux"
                  },
                  {
                    Architecture: "386",
                    OS: "linux"
                  },
                  {
                    Architecture: "ppc64le",
                    OS: "linux"
                  },
                  {
                    Architecture: "s390x",
                    OS: "linux"
                  }
                ]
              },
              Networks: [
                {
                  Target: "yx1hkofxp9os0n05gsx7wpyde",
                  Aliases: ["db.sonar.swarm.ictu", "db"]
                }
              ],
              ForceUpdate: 0,
              Runtime: "container"
            },
            Mode: {
              Replicated: {
                Replicas: 1
              }
            },
            EndpointSpec: {
              Mode: "dnsrr"
            }
          },
          Endpoint: {
            Spec: {}
          }
        }
      ],
      containers: [
        {
          Id:
            "88f7b6be6d382665a2b37260f5e42939e49549532f8705721d5218607af1cb41",
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
        },
        {
          Id:
            "293d7ff81e1dcd1460e7148541562d2bb57a5f6c540d5f500a88d9828ad83523",
          Names: ["/swarm-sonar_db.1.2gfv8uwscqm9445bl43irom8t"],
          Image:
            "postgres:latest@sha256:144221a1e46af653bdda2bbb8e46ad3dd0c3f61ec0430030581031937f1d589d",
          ImageID:
            "sha256:1227c4263c8c59af10d93968ad47e154eedbae2c173633cb4a8ccf49ba28fb19",
          Command: "docker-entrypoint.sh postgres",
          Created: 1506066018,
          Ports: [
            {
              PrivatePort: 5432,
              Type: "tcp"
            }
          ],
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
            "com.docker.stack.namespace": "swarm-sonar",
            "com.docker.swarm.node.id": "kdvcbem9f73zd1jpcg85z8b4c",
            "com.docker.swarm.service.id": "oyri69t9tn4lvcyx7zs4myfkx",
            "com.docker.swarm.service.name": "swarm-sonar_db",
            "com.docker.swarm.task": "",
            "com.docker.swarm.task.id": "2gfv8uwscqm9445bl43irom8t",
            "com.docker.swarm.task.name":
              "swarm-sonar_db.1.2gfv8uwscqm9445bl43irom8t"
          },
          State: "running",
          Status: "Up 6 hours",
          HostConfig: {
            NetworkMode: "default"
          },
          NetworkSettings: {
            Networks: {
              "swarm-net": {
                IPAMConfig: {
                  IPv4Address: "10.50.2.5"
                },
                Links: null,
                Aliases: null,
                NetworkID: "yx1hkofxp9os0n05gsx7wpyde",
                EndpointID:
                  "3f366421e40e4ae46cbe5872613951baaf68799090a1c2860a4901a9c16de7d8",
                Gateway: "",
                IPAddress: "10.50.2.5",
                IPPrefixLen: 24,
                IPv6Gateway: "",
                GlobalIPv6Address: "",
                GlobalIPv6PrefixLen: 0,
                MacAddress: "02:42:0a:32:02:05",
                DriverOpts: null
              }
            }
          },
          Mounts: [
            {
              Type: "bind",
              Source: "/shared/data/swarm/sonar/postgresql",
              Destination: "/var/lib/postgresql",
              Mode: "",
              RW: true,
              Propagation: "rprivate"
            },
            {
              Type: "bind",
              Source: "/shared/data/swarm/sonar/postgresql_data",
              Destination: "/var/lib/postgresql/data",
              Mode: "",
              RW: true,
              Propagation: "rprivate"
            },
            {
              Type: "bind",
              Source: "/etc/localtime",
              Destination: "/etc/localtime",
              Mode: "",
              RW: false,
              Propagation: "rprivate"
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
              logsUrl:
                "http://10.25.96.21:2375/services/jjqf4db07jvggtwx6ces4qszk/logs?timestamps=true&stdout=true&stderr=true&tail=200",
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
            },
            db: {
              logsUrl:
                "http://10.25.96.21:2375/services/oyri69t9tn4lvcyx7zs4myfkx/logs?timestamps=true&stdout=true&stderr=true&tail=200",
              container: {
                id:
                  "293d7ff81e1dcd1460e7148541562d2bb57a5f6c540d5f500a88d9828ad83523",
                name: ["/swarm-sonar_db.1.2gfv8uwscqm9445bl43irom8t"],
                created: 1506066018000
              },
              ip: "10.50.2.5",
              fqdn: "db.sonar.swarm.ictu",
              ports: ["5432/tcp"],
              state: "running"
            }
          }
        }
      }
    }
  }
};
