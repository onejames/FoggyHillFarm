export interface ProductModel {
    id: number;
    title: string;
    description: string;
    published_at: Date;
    price: number;
    available: boolean;
    variants: variantsModel[];
    images: string[];
    featured_image: string;
    url: string;
    tags: string[];
}

export interface variantsModel {
    id: number;
    title: string;
    price: number;
    available: boolean;
}