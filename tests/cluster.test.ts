import {
    assert,
} from "https://deno.land/std/testing/asserts.ts";
import Orcinusd from "../main.ts";

const orcinus = new Orcinusd();

Deno.test({
    name: "Cluster list and inspect",
    fn: async () => {
        const cluster = await orcinus.cluster.list();
        if (cluster.length > 0) {
            const id = cluster[0].ID;
            assert(typeof id === "string");
            const clusterFilter = await orcinus.cluster.list({ filters: JSON.stringify({ id: [id] }) });
            assert(clusterFilter[0].ID === id);
            const clusterFilterFail = await orcinus.cluster.list({ filters: JSON.stringify({ id: ["failinput"] }) });
            assert(clusterFilterFail.length === 0);
            const clusterInspect = await orcinus.cluster.inspect(id);
            assert(clusterInspect.ID === id)
        }
        else {
            assert(typeof cluster === "object");
        }
    },
    sanitizeResources: false,
    sanitizeOps: false
});
