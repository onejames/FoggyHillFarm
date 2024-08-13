import { VariantModel } from "../interfaces/ProductModel"

export class CartModel {
    variants: VariantModel[];
    status: string | null;
    code: string | null;
    currency: Intl.NumberFormat;

    constructor (variants: VariantModel[] = [], status: string|null = '', code: string|null = '') {
        this.variants = variants;
        this.status = status;
        this.code = code;

        this.currency = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD', //process.env.CURRENCY this should also probibly be loaded from the suer profile
        });
    }

    calculateCartQuantity () {
        let total = 0;

        this.variants.map((item: VariantModel) => {
            total = total + item.ammountInCart;
        });

        return total;
    }

    calculateVariantPrice (item: VariantModel) {
        return item.price * item.ammountInCart;
    }

    calculateCartTotal () {
        let total = 0;

        this.variants.map((item: VariantModel) => {
            total = total + this.calculateVariantPrice(item);
        });

        return total;
    }

    formatCurrency (int: number) {
        return this.currency.format(int);
    }
}