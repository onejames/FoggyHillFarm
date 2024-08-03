import { VariantModel } from "../interfaces/ProductModel"

import useLocalStorage from "../services/UseLocalStorage"

export class CartModel {

    // public variants: VariantModel[];
    private setVariants;
    public getVariants;

    private currencyType = 'USD';

    public Currency = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: this.currencyType,
    });

    constructor () {
        const  [getValue, setValue] = useLocalStorage("cart", []);

        // this.variants = variants;
        this.setVariants = setValue;
        this.getVariants = getValue;

        // console.log(this.variants);
    }
    
    addVariant(val: VariantModel) {
        let variants = this.getVariants();
        let found = false;

        variants.filter((item, i) => {
            if (item.id == val.id) {
                variants[i].ammountInCart = item.ammountInCart + 1;
                found = true;
            }
        });

        if (!found) {
            val.ammountInCart = 1;
            variants.push(val);
        }

        this.setVariants(variants);

        return variants;
    }

    removeVariant(val: VariantModel) {
        let variants = this.getVariants()

        if (!variants.length) {
            return variants;
        }

        variants.forEach((item, i) => {
            if (item.id == val.id) {
                delete variants[i];
            }
        });

        this.setVariants(variants);

        return variants;
    }

    increaseVariant(val: VariantModel) {
        let variants = this.getVariants()

        variants.filter((item, i) => {
            if (item.id == val.id) {
                variants[i].ammountInCart = item.ammountInCart + 1;
            }
        });

        this.setVariants(variants)
    }

    decreaseVariant(val: VariantModel) {
        let variants = this.getVariants()

        variants.filter((item, i) => {
            if (item.id == val.id) {
                variants[i].ammountInCart = item.ammountInCart - 1;
            }
        });

        this.setVariants(variants)
    }

    clearCart() {
        // this.variants = [];
        this.setVariants([]);
    }

    calculateCartQuantity() {
        let variants = this.getVariants()

        if (variants == null || !variants.length) {
            return 0;
        }

        let total = 0;

        variants.forEach((item) => {
            total = total + item.ammountInCart;
        });

        return total;
    }

    calculateCartTotal() {
        let variants = this.getVariants()
        
        if (variants == null || !variants.length) {
            return 0;
        }

        let total = 0;

        variants.forEach((item) => {
            total = total + (item.price * item.ammountInCart);
        });

        return this.Currency.format(total);
    }
}