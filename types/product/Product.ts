export type Product = {
    id: string;
    createdAt?: string;
    updatedAt?: string;
    deletedAt?: string;
    title?: string;
    description?: string;
    typeId?: string;
    type?: object;
    colorId?: string;
    color?: object;
    price?: number;
    ratingsId?: string;
    ratings?: object;
    promotion?: number;
    image?: string;
    ordersId?: string;
    orders?: object;
}