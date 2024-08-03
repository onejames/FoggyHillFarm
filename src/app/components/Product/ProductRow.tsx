"use client"
import { useRef } from 'react'

import Image from 'next/image'
import { InputCounter } from 'flowbite';

import { ProductModel, VariantModel } from '../../interfaces/ProductModel';
import { CartModel } from '../../Models/CartModel'

const ProductRow = ({variant, products}: {variant: VariantModel, products: ProductModel[]}) => {

    const qty = useRef<HTMLInputElement>(null);
    const decrement = useRef<HTMLInputElement>(null);
    const increment = useRef<HTMLInputElement>(null);

    const cart = new CartModel();

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

    let Currency = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    const calculatePrice = (item: VariantModel) => {
        const total = item.price * item.ammountInCart;

        return Currency.format(total);
    }

    const remove = (variant: VariantModel) => {
        console.log(variant)
    }

    const options = {
        minValue: 0,
        maxValue: null, 
        onIncrement: () => {
            cart.increaseVariant(variant);
        },
        onDecrement: () => {
            cart.decreaseVariant(variant);
        }
    };

    const instanceOptions = {
        id: "quantity-input"+variant.id,
        override: true
    };

    const counterInput = new InputCounter(qty.current, increment.current, decrement.current, options, instanceOptions);
  
    return (
        <tr className="bg-white border-b hover:bg-gray-50">
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                <Image alt="Product" src={product.featured_image} width={150} height={200} />
            </td>
            <td className="px-6 py-4">
                {product.title}
            </td>
            <td className="px-6 py-4">
                {Currency.format(variant.price)}
            </td>
            <td className="px-6 py-4">
                <form className="max-w-xs mx-auto">
                    <div className="relative flex items-center max-w-[8rem]">
                        <button type="button" id="decrement-button" data-input-counter-decrement={"quantity-input"+variant.id} ref={decrement} className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg className="w-3 h-3 text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16"/>
                            </svg>
                        </button>
                        <input value={variant.ammountInCart} type="text" ref={qty} id={"quantity-input"+variant.id} data-input-counter aria-describedby="helper-text-explanation" className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5" placeholder="0" required />
                        <button type="button" id="increment-button" data-input-counter-increment={"quantity-input"+variant.id} ref={increment} className="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                            <svg className="w-3 h-3 text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                            </svg>
                        </button>
                    </div>
                </form>
            </td> 
            <td className="px-6 py-4">
                {calculatePrice(variant)}
            </td> 
            <td className="px-6 py-4 text-right">
                <button onClick={() => { remove(variant )}} className="font-medium text-blue-600 hover:underline">
                    <svg className="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
                    </svg>
                </button>
            </td>
        </tr>
    )
}

export default ProductRow