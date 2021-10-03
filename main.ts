import { RegistryAuth, OrcinusClient } from "./libs/orcinusClient.ts";
import { Cluster } from "./apis/cluster.ts";

export default class Orcinusd {
  cluster: Cluster;

  constructor(socketAddress: string = "/var/run/docker.sock", auth: RegistryAuth | null = null) {
    const client = new OrcinusClient(socketAddress, auth);
    this.cluster = new Cluster(client);
  }
}