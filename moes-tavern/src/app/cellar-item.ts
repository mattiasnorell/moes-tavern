import { ICellarItem } from "app/icellar-item";

export class CellarItem implements ICellarItem {
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
