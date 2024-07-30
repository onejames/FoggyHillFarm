export interface ProductModel {
    id: number;
    title: string;
    description: string;
    published_at: Date;
    price: number;
    available: boolean;
    variants: VariantModel[];
    images: string[];
    featured_image: string;
    url: string;
    tags: string[];
}

export interface VariantModel {
    id: number;
    title: string;
    price: number;
    available: boolean;
    ammountInCart: number;
}