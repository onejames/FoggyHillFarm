"use client"

import { useState, useEffect, useCallback } from 'react';

import { CartModel } from '../Models/CartModel';

import Link from 'next/link'

const CartWidget = () => {

    const cart = new CartModel();

    const [quantity, setQuantity] = useState(cart.calculateCartQuantity());
    const [total, setTotal] = useState(cart.calculateCartTotal());

    // @ts-ignore: Parameter 'e' implicitly has an 'any' type.ts(7006)
    const cartUpdate = useCallback(e => {
        // e.detail.value
        setQuantity(cart.calculateCartQuantity());
        setTotal(cart.calculateCartTotal());

        console.log('cart widget event');
        console.log(cart.getVariants());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        window.addEventListener('localStorage.cart', cartUpdate);
console.log("widget loaded");
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