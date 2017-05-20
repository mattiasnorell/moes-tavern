export interface ICellarItem {
    $key:string;
    name:string;
    brewery: string;
    bestBefore: number;
    createdAt: number;
    archived: boolean;
    upc: number;
    count: number;
}
