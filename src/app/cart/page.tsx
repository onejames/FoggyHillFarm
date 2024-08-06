"use client"

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link'

import { CartModel } from '../models/CartModel';
import { VariantModel } from '../interfaces/ProductModel';

import ProductRow from '../components/Product/ProductRow';

const Cart = () => {
    const cart = new CartModel();
    const [cartQuantity, setCartQuantity] = useState(cart.calculateCartQuantity());
    const [cartTotal, setCartTotal] = useState(cart.calculateCartTotal());

    const [products, setProducts] = useState([])
    const [isLoading, setLoading] = useState(true)

    const clearConfirm = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        fetch('/api/products')
            .then((res) => res.json())
            .then((data) => {
                setProducts(JSON.parse(data))
                setLoading(false)
            })
    }, [])

    const cartUpdate = useCallback((e: CustomEvent) => {
        setCartQuantity(cart.calculateCartQuantity());
        setCartTotal(cart.calculateCartTotal());
    }, []);

    useEffect(() => {
        window.addEventListener('localStorage.cart', cartUpdate);

        return () => {
            window.removeEventListener("localStorage.cart", cartUpdate);
        };
    }, [cartUpdate]);

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
                            cart.getValue().map((variant: VariantModel) => <ProductRow key={variant.id} variant={variant} products={products} />)
                        }
                    </tbody>
                    <tfoot>
                        <tr className="font-semibold text-gray-900">
                            <td colSpan={4} className="px-6 py-3">{cartQuantity} Items in cart</td>
                            <th scope="row" className="px-6 py-3 text-base">Total: </th>
                            <td className="px-6 py-3">{cart.formatCurrency(cartTotal)}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>

            <dialog ref={clearConfirm} className="opacity-100 relative p-4 text-center bg-white rounded-lg shadow">
                <svg className="text-gray-400 w-11 h-11 mb-3.5 mx-auto" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>
                <p className="mb-4 text-gray-500">Are you sure you want to remove all items from your cart?</p>
                <div className="flex justify-center items-center space-x-4">
                    <button onClick={() => { clearConfirm.current!.close() }} type="button" className="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10">
                        No, cancel
                    </button>
                    <button onClick={() => { cart.clear(); clearConfirm.current!.close() }} className="py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300">
                        Yes, I'm sure
                    </button>
                </div>
            </dialog>

            { cartTotal != 0 &&
                <button className='btn btn-primary btn-md m-3' onClick={ () => { clearConfirm.current!.showModal() }}>Clear Cart</button>
            }
            { cartTotal == 0 &&
                <div>
                    <div className="divider my-10">Your cart is empty</div>
                    <p className="text-center mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48">Head over to the <Link className="font-medium text-blue-600 underline hover:no-underline" href="/store" >store</Link> to browse our products!</p>
                </div>
            }
        </div>
    )
}

export default Cart