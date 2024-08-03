"use client"

import { useState } from 'react';

import useLocalStorage from '../hooks/UseLocalStorage';

const Cart = () => {
  
  // const value = 0;
  const [value, setValue] = useLocalStorage("cartCount", 0);
  const [cartCount, setCartCount] = useState(value);

  // setCartCount(value);

  const clearCart = () => {
    setValue(0);
    setCartCount(0);
  }

  return (
    <div>
      <h1>Cart</h1>
      <div>Cart count: {cartCount}</div>
      <button className='btn btn-primary btn-md m-3' onClick={clearCart}>Clear Cart</button>
    </div>
  )
}

export default Cart