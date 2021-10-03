import { LazyObject } from "./list.ts";

export interface ListClusterUpdate {
    Name? : string;
    Labels? : LazyObject;
    Role? : string;
    Availability? : string;
}