"use client"
import { useRef, useEffect } from 'react'

import Image from 'next/image'
import { InputCounter } from 'flowbite';

import { ProductModel, VariantModel } from '@/interfaces/ProductModel';
import { useCartDispatch, useCart } from '@/context/CartContext'

const ProductRow = ({variant, products}: {variant: VariantModel, products: ProductModel[]}) => {
    const cart = useCart();
    const dispatch = useCartDispatch();

    const qty = useRef<HTMLInputElement>(null);
    const decrement = useRef<HTMLButtonElement>(null);
    const increment = useRef<HTMLButtonElement>(null);
    const removeConfirm = useRef<HTMLDialogElement>(null);

    const product: ProductModel = products.find((product: ProductModel) => {
        let found = false;

        product.variants.forEach((item) => {
            if (item.id == variant.id) {
                found = true;
            }
        });

        if (found) {
            return product;
        }
    })!;

    const options = {
        minValue: 0,
        maxValue: null, 
        onIncrement: () => {
            dispatch({ type: "addVariant", payload: variant  });
        },
        onDecrement: () => {
            dispatch({ type: "decreaseVariant", payload: variant }); 
        }
    };

    const instanceOptions = {
        id: "quantity-input"+variant.id,
        override: true
    };

    useEffect(() => {
        const counterInput = new InputCounter(qty.current, increment.current, decrement.current, options, instanceOptions);
    });

    useEffect(() => {
    }), [cart];

    const remove = (variant: VariantModel) => {
        removeConfirm.current!.close();
        dispatch({ type: "removeVariant", payload: variant });
        return <div></div>
    }
  
    return (
        <tr className="bg-white border-b hover:bg-gray-50">
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                <Image alt="Product" src={product.featured_image} width={150} height={200} />
            </td>
            <td className="px-6 py-4">
                {product.title}, {variant.title}
            </td>
            <td className="px-6 py-4">
                {cart.formatCurrency(variant.price)}
            </td>
            <td className="px-6 py-4">
                <form className="max-w-xs mx-auto">
                    <div className="relative flex items-center max-w-[8rem]">
                        <button type="button" id="decrement-button" data-input-counter-decrement={"quantity-input"+variant.id} ref={decrement} className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg className="w-3 h-3 text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16"/>
                            </svg>
                        </button>
                        <input value={variant.ammountInCart} readOnly type="text" ref={qty} id={"quantity-input"+variant.id} data-input-counter aria-describedby="helper-text-explanation" className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5" placeholder="0" required />
                        <button type="button" id="increment-button" data-input-counter-increment={"quantity-input"+variant.id} ref={increment} className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg className="w-3 h-3 text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                            </svg>
                        </button>
                    </div>
                </form>
            </td> 
            <td className="px-6 py-4 font-bold">
                {cart.formatCurrency(cart.calculateVariantPrice(variant))}
            </td> 
            <td className="px-6 py-4 text-right">
                <button onClick={() => { removeConfirm.current!.showModal() }} className="font-medium text-blue-600 hover:underline">
                    <svg className="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
                    </svg>
                </button>

                <dialog ref={removeConfirm} className="opacity-100 relative p-4 text-center bg-white rounded-lg shadow">
                    <svg className="text-gray-400 w-11 h-11 mb-3.5 mx-auto" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>
                    <p className="mb-4 text-gray-500">Are you sure you want to remove this item?</p>
                    <div className="flex justify-center items-center space-x-4">
                        <button onClick={() => { removeConfirm.current!.close() }} type="button" className="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10">
                            No, cancel
                        </button>
                        <button onClick={() => { remove(variant) }} className="py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300">
                            Yes, I&apos;m sure
                        </button>
                    </div>
                </dialog>
            </td>
        </tr>
    )
}

export default ProductRow