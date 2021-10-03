import { ListOptions, LazyObject } from "../types/list.ts";
import { ListClusterUpdate } from "../types/cluster.ts";
import { OrcinusClient } from "../libs/orcinusClient.ts";

export class Cluster {
    private client: OrcinusClient;

    constructor(client: OrcinusClient) {
        this.client = client;
    }

    async list(options?: ListOptions): Promise<LazyObject[]> {
        const res = await this.client.get("/nodes", [
            { name: "filters", value: options?.filters ?? "" },
        ]);
        if (!res.body || !res.body.length) {
            return [];
        }
        return JSON.parse(res.body);
    }

    async inspect(id: string): Promise<LazyObject> {
        const res = await this.client.get("/nodes/" + id);
        if (!res.body || !res.body.length) {
            return {};
        }
        return JSON.parse(res.body);
    }

    async delete(id: string, force: boolean = false): Promise<LazyObject> {
        const res = await this.client.delete(`/nodes/${id}`, "", [{
            name: "force", value: force.toString()
        }]);
        if (!res.body || !res.body.length) {
            return {};
        }
        return JSON.parse(res.body);
    }

    async update(id: string, options: ListClusterUpdate): Promise<LazyObject> {
        const res = await this.client.post(`/nodes/${id}/update`, JSON.stringify(options), []);
        if (!res.body || !res.body.length) {
            return {};
        }
        return JSON.parse(res.body);
    }
}