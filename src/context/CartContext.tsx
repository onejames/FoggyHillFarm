"use client"

import { createContext, useContext, useReducer, useEffect, useState, type Dispatch } from 'react';

import { VariantModel } from "@/interfaces/ProductModel"
import { CartModel } from "@/models/CartModel"

export type CARTACTION =
  | { type: "addVariant"; payload: VariantModel }
  | { type: "increaseVariant"; payload: VariantModel }
  | { type: "decreaseVariant"; payload: VariantModel }
  | { type: "removeVariant"; payload: VariantModel }
  | { type: "setCart"; payload: CartModel }
  | { type: "clear"; };

const CartContext = createContext<CartModel> (new CartModel());
const CartDispatchContext = createContext<Dispatch<CARTACTION>> (() => {});

export function CartProvider({ children }: any) {
    const [cart, dispatch] = useReducer(
        cartReducer,
        new CartModel()
    );

    useEffect(() => {
        const cartStorage = localStorage.getItem( 'cart' );

        if( cartStorage ){
            const cartObject = JSON.parse( cartStorage ) as CartModel;

            if (cartObject) {
                dispatch({
                    type: 'setCart',
                    payload: new CartModel(cartObject.variants, cartObject.status, cartObject.code)
                });
            }
        }
    }, []);
  
    return (
      <CartContext.Provider value={cart}>
        <CartDispatchContext.Provider value={dispatch}>
          {children}
        </CartDispatchContext.Provider>
      </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}

export function useCartDispatch() {
    return useContext(CartDispatchContext);
}

function cartReducer(cart: CartModel, action: CARTACTION) {
    switch (action.type) {
        case 'addVariant': {
            modifyVariant(cart, action.payload);
            break;
        }
        case 'increaseVariant': {
            modifyVariant(cart, action.payload);
            break;
        }
        case 'decreaseVariant': {
            modifyVariant(cart, action.payload, false);
            break;
        }
        case 'removeVariant': {
            modifyVariant(cart, action.payload, false, true);
            break;
        }
        case 'setCart': {
            cart = action.payload;
            break;
        }
        case 'clear': {
            cart.variants = []
            cart;
            break;
        }
    }

    const newCart = new CartModel(cart.variants, cart.status, cart.code)

    localStorage.setItem( 'cart', JSON.stringify( newCart ) );
    return newCart;
}

function modifyVariant (cart: CartModel, variant: VariantModel, add: boolean = true, remove: boolean = false) {
    let found = false;

    cart.variants.map((item: VariantModel, i: number) => {
        if(item.id == variant.id) {
            if (add) {
                item.ammountInCart++;
            } else {
                if(item.ammountInCart > 0 && !remove) {
                    item.ammountInCart--;
                } else if (remove) {
                    item.ammountInCart = 0;
                    cart.variants.splice(i, 1);
                }
            }
            variant.ammountInCart = item.ammountInCart;
            found = true;
        }
    });

    if (!found && add) {
        variant.ammountInCart = 1;
        cart.variants.push(variant);
    }

    return cart;
}