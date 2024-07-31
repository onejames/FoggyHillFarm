import { VariantModel } from "./ProductModel"

export class CartModel {
    addVariant(variants: VariantModel[], val: VariantModel) {
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

        return variants;
    }

    removeVariant(variants: VariantModel[], val: VariantModel) {
        if (!variants.length) {
            return variants;
        }

        variants.forEach((item, i) => {
            if (item.id == val.id) {
                delete variants[i];
            }
        });

        return variants;
    }

    increaseVariant(variants: VariantModel[], val: VariantModel) {
        variants.filter((item, i) => {
            if (item.id == val.id) {
                variants[i].ammountInCart = item.ammountInCart + 1;
            }
        });
    }

    decreaseVariant(variants: VariantModel[], val: VariantModel) {
        variants.filter((item, i) => {
            if (item.id == val.id) {
                variants[i].ammountInCart = item.ammountInCart - 1;
            }
        });
    }

    calculateCartQuantity(variants: VariantModel[]) {
        if (variants == null || !variants.length) {
            return 0;
        }

        let total = 0;

        variants.forEach((item) => {
            total = total + item.ammountInCart;
        });

        return total;
    }

    calculateCartTotal(variants: VariantModel[]) {
        if (variants == null || !variants.length) {
            return 0;
        }

        let total = 0;

        variants.forEach((item) => {
            total = total + (item.price * item.ammountInCart);
        });

        let Currency = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        });

        return Currency.format(total);
    }
}