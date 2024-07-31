"use client"

import { useState, useEffect, useCallback } from 'react';

import useLocalStorage from '../hooks/UseLocalStorage';

import { CartModel } from '../interfaces/CartModel';

import Link from 'next/link'

const CartWidget = () => {

    const cartModel = new CartModel();

    const [variants, setVariants, getVariants] = useLocalStorage("cart", []);
    const [quantity, setQuantity] = useState(cartModel.calculateCartQuantity(variants));
    const [total, setTotal] = useState(cartModel.calculateCartTotal(variants));

    // @ts-ignore: Parameter 'e' implicitly has an 'any' type.ts(7006)
    const cartUpdate = useCallback(e => {
        setQuantity(cartModel.calculateCartQuantity(e.detail.value));
        setTotal(cartModel.calculateCartTotal(e.detail.value));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        window.addEventListener('localStorage.cart', cartUpdate);

        return () => {
            window.removeEventListener("localStorage.cart", cartUpdate);
        };
    }, [cartUpdate]);

    return (
        <div className="dropdown dropdown-end">
            <div  tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                <div className="indicator">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="badge badge-sm indicator-item">{quantity}</span>
                </div>
            </div>
            <div
                tabIndex={0}
                className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                <div className="card-body">
                    <span className="text-lg font-bold">{quantity} Items</span>
                    <span className="text-info">Subtotal: {total}</span>
                    <div className="card-actions">
                        <Link href="/cart" className="btn btn-primary btn-block">View cart</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartWidget