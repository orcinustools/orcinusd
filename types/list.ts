export interface ListOptions {
    // Return all containers. By default, only running containers are shown
    all?: boolean;
    // Return this number of most recently created containers, including non-running ones.
    limit?: number;
    // Return the size of container as fields SizeRw and SizeRootFs.
    size?: number;
    // Filters to process on the container list, encoded as JSON (a map[string][]string). For example, {"status": ["paused"]} will only return paused containers.
    filters?: string;
}

export interface LazyObject {
    [key: string]: any
}
