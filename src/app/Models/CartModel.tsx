import { VariantModel } from "../interfaces/ProductModel"

import useLocalStorage from "../services/UseLocalStorage"

export class CartModel {
    value: []
    setValue: Function
    getValue: Function
    currency: Intl.NumberFormat

    constructor () {
         // eslint-disable-next-line react-hooks/exhaustive-deps
        const [value, setValue, getValue] = useLocalStorage("cart", []);

        this.value = value;
        this.setValue = setValue;
        this.getValue = getValue;

        this.currency = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD', //process.env.CURRENCY this should also probibly be loaded from the suer profile
        });
    }

    modifyVariant (variant: VariantModel, add: boolean = true, remove: boolean = false) {
        //NOTE: its possible that the old variant ammountInCart is sticking around after removal
        let found = false;
        let currentCart = this.getValue();

        currentCart.map((item: VariantModel, i: number) => {
            if(item.id == variant.id) {
                if (add) {
                    item.ammountInCart = item.ammountInCart + 1;
                } else {
                    if(item.ammountInCart > 0 && !remove) {
                        item.ammountInCart = item.ammountInCart - 1;
                    } else if (remove) {
                        item.ammountInCart = 0;
                        console.log(i);
                        currentCart.splice(i, 1);
                    }
                }
                variant.ammountInCart = item.ammountInCart;
                found = true;
            }
        });

        if (!found && add) {
            variant.ammountInCart = variant.ammountInCart + 1;
            currentCart.push(variant);
        }

        this.setValue(currentCart);

        return currentCart;
    }

    addVariant (variant: VariantModel) {
        return this.modifyVariant(variant);
    }

    increaseVariant (variant: VariantModel) {
        return this.modifyVariant(variant);
    }

    decreaseVariant (variant: VariantModel) {
        return this.modifyVariant (variant, false);
    }

    removeVariant (variant: VariantModel) {
        return this.modifyVariant (variant, false, true);
    }

    clear () {
        this.setValue([]);
    }

    update (variants: VariantModel[]) {
        this.setValue(variants);
    }

    calculateCartQuantity () {
        let total = 0;

        this.getValue().map((item: VariantModel) => {
            total = total + item.ammountInCart;
        });

        return total;
    }

    calculateVariantPrice (item: VariantModel) {
        return item.price * item.ammountInCart;
    }

    calculateCartTotal () {
        let total = 0;

        this.getValue().map((item: VariantModel) => {
            total = total + this.calculateVariantPrice(item);
        });

        return total;
    }

    formatCurrency (int: number) {
        return this.currency.format(int);
    }
}