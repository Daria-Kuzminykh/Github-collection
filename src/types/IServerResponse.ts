export interface IServerResponse<T> {
    total_count: number;
    incomplete_results: boolean;
    items: T[];
}
