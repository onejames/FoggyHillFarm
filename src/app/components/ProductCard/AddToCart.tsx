'use client';

import React, { useState } from 'react'

import useLocalStorage from '../../hooks/UseLocalStorage';

const AddToCart = ({id}: {id: number}) => {
  const [value, setValue, getValue] = useLocalStorage("cartCount", 0);

  const [cartCount, setCartCount] = useState(value);

  function addToCart (id: number) {
    let updateValue = getValue()+1;
    setCartCount(updateValue);
    setValue(updateValue);
  }

  return (
    <button className='btn btn-primary btn-md m-3' onClick={() => addToCart(id)}>Add to cart</button>
  )
}

export default AddToCart