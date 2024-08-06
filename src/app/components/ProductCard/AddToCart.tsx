'use client'

import React, { useState, useRef } from 'react'
import Link from 'next/link'

import useLocalStorage from '../../services/UseLocalStorage';

import { ProductModel, VariantModel } from '../../interfaces/ProductModel'
import { CartModel } from '../../models/CartModel';

// const AddToCart = ({ id }: { id: number }) => {
const AddToCart = ({product}: {product: ProductModel}) => {
    const [value, setValue, getValue] = useLocalStorage("cart", []);

    const [optionValue, setOptionValue] = useState(0);
    const [cartAction, setCartAction] = useState(0);
    const [added, setAdded] = useState(false);

    const diag = useRef<HTMLDialogElement>(null);

    function addToCart (product: ProductModel) {
        if (optionValue == 0) {
          diag.current!.showModal();
          return;
        }

        setCartAction(1);

        const variant: VariantModel = product.variants.find((variant) => {
            if (variant.id == Number(optionValue)) {
                return variant;
            }
        })!;

        let found = false;
        let currentCart = getValue();

        currentCart.map((item: VariantModel) => {
            if(item.id == variant.id) {
                item.ammountInCart = item.ammountInCart + 1;
                variant.ammountInCart = item.ammountInCart;
                console.log('found in cart');
                console.log(variant.ammountInCart);
                found = true;
            }
        });
        if (!found) {
            variant.ammountInCart = variant.ammountInCart + 1;
            currentCart.push(variant);
        }

        setValue(currentCart);

        // cart.addVariant(variant);

        setTimeout(() => {
            setCartAction(2);
            setTimeout(() => {
                setCartAction(0);
                setAdded(true);
              }, 500);
        }, 1000);
    }

    return (
        <div className='m-3'>

            <select 
                className="select select-bordered w-full max-w-xs my-4"
                value={optionValue}
                onChange={(e) => { setOptionValue(Number(e.target.value)); }}
            >
                <option disabled value="0" >Size:</option>
                {product.variants.map((variants: VariantModel, i: number) => 
                    <option key={variants.id} disabled={variants.available === true ? false : true  } value={variants.id}>{variants.title}</option>    
                )}
            </select>

            <dialog ref={diag} className="modal">
                <div className="modal-box">
                    <p className="py-4">Please select a size</p>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>

            <button className='btn btn-primary btn-md' onClick={() => addToCart(product)}>
                { cartAction == 0 &&
                    <svg className="w-3.5 h-3.5 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                        <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"/>
                    </svg>
                }
                { cartAction == 1 &&
                    <div>
                        <span className="loading loading-ball loading-xs"></span>
                        <span className="loading loading-ball loading-sm"></span>
                        <span className="loading loading-ball loading-md"></span>
                        <span className="loading loading-ball loading-lg"></span>
                    </div>
                }
                { cartAction == 2 &&
                    <svg className="w-3.5 h-3.5 text-blue-600 lg:w-4 lg:h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                    </svg>
                }
                { cartAction != 1 &&
                    <span>Add to cart</span>
                }
            </button>
            { added == true &&
                <Link  className="inline-flex items-center justify-center p-3 ml-4 text-base font-medium text-gray-500 rounded-lg bg-gray-100 hover:text-gray-900 hover:bg-gray-100" href="/cart">
                    <span className="w-full">View your cart</span>
                    <svg className="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>

                </Link>
            }
        </div>
    )
}

export default AddToCart