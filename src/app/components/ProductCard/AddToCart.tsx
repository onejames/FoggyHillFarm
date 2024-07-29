'use client';

import React, { useState } from 'react'

import useLocalStorage from '../../hooks/UseLocalStorage';

import { ProductModel } from '../../interfaces/ProductModel';

const AddToCart = ({product}: {product: ProductModel}) => {
  const [value, setValue, getValue] = useLocalStorage("cartCount", 0);

  const [cartCount, setCartCount] = useState(value);

  function addToCart (product: ProductModel) {
    console.log(product);
    let updateValue = getValue()+1;
    setCartCount(updateValue);
    setValue(updateValue);
  }

  return (
    <button className='btn btn-primary btn-md m-3' onClick={() => addToCart(product)}>Add to cart</button>
  )
}

export default AddToCart