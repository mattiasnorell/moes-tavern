export interface ICellarItem {
    id:string;
    userId: string;
    name:string;
    brewery: string;
    bestBefore: number;
    createdAt: number;
    archived: boolean;
    upc: number;
    count: number;
}
