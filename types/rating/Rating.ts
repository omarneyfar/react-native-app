export type Rating = {
    id: string;
    createdAt?: string;
    updatedAt?: string;
    deletedAt?: string;
    username?: string;
    productId?: string;
    value: number;
    color?:string;
    description?:string;
    images?:string[]
}