"use client"

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link'

import useLocalStorage from '../services/UseLocalStorage';

// import { CartModel } from '../Models/CartModel';

import ProductRow from '../components/Product/ProductRow';

import { VariantModel } from '../interfaces/ProductModel';

const Cart = () => {

    const [value, setValue, getValue] = useLocalStorage("cart", []);
    const [cart, setCart] = useState(value);

    const [products, setProducts] = useState([])
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        fetch('/api/products')
            .then((res) => res.json())
            .then((data) => {
                setProducts(JSON.parse(data))
                setLoading(false)
            })
    }, [])

    const clearCart = () => {
        setValue([]);
        setCart([]);
    }

    const cartUpdate = useCallback((e: CustomEvent) => {
        console.log(e.detail.value);
        setCart(getValue());
    }, []);

    useEffect(() => {
        window.addEventListener('localStorage.cart', cartUpdate);

        return () => {
            window.removeEventListener("localStorage.cart", cartUpdate);
        };
    }, [cartUpdate]);

    function calculateCartTotal () {
        let total = 0;

        cart.map((item: VariantModel) => {
            console.log(item);
            total = total + (item.price * item.ammountInCart);
        });

        return total;
    }

    function calculateCartQuantity () {
        let total = 0;

        cart.map((item: VariantModel) => {
            total = total + item.ammountInCart;
        });
        console.log(total);
        return total;
    }

    if (isLoading) return (
        <div>
            <span className="loading loading-ball loading-xs"></span>
            <span className="loading loading-ball loading-sm"></span>
            <span className="loading loading-ball loading-md"></span>
            <span className="loading loading-ball loading-lg"></span>
        </div>
    )

    return (
        <div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-500">
                        <tr>
                            <th scope="col" className="px-6 py-3"> </th>
                            <th scope="col" className="px-6 py-3"> Product name </th>
                            <th scope="col" className="px-6 py-3"> Price </th>
                            <th scope="col" className="px-6 py-3"> Quantity </th>
                            <th scope="col" className="px-6 py-3"> Total </th>
                            <th scope="col" className="px-6 py-3"> <span className="sr-only">Edit</span> </th>
                        </tr>
                    </thead>
                    <tbody>
                        { cart != null &&
                            cart.map((variant: VariantModel) => <ProductRow key={variant.id} variant={variant} products={products} />)
                        }
                    </tbody>
                    <tfoot>
                        <tr className="font-semibold text-gray-900">
                            <td colSpan={4} className="px-6 py-3">{calculateCartQuantity()} Items in cart</td>
                            <th scope="row" className="px-6 py-3 text-base">Total: </th>
                            <td className="px-6 py-3">{calculateCartTotal()}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>

            { calculateCartTotal() != 0 &&
                <button className='btn btn-primary btn-md m-3' onClick={clearCart}>Clear Cart</button>
            }
            { calculateCartTotal() == 0 &&
                <div>
                    <div className="divider my-10">Your cart is empty</div>
                    <p className="text-center mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48">Head over to the <Link className="font-medium text-blue-600 underline hover:no-underline" href="/store" >store</Link> to browse our products!</p>
                </div>
            }
        </div>
    )
}

export default Cart