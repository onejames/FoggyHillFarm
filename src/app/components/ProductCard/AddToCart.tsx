'use client';

import React, { useState, useRef } from 'react'

import useLocalStorage from '../../hooks/UseLocalStorage';

import { ProductModel, VariantModel } from '../../interfaces/ProductModel';
import { CartModel } from '../../interfaces/CartModel';

const AddToCart = ({product}: {product: ProductModel}) => {
  const [variants, setVariants, getVariants] = useLocalStorage("cart", []);

  const [optionValue, setOptionValue] = useState(0);

  const diag = useRef<HTMLDialogElement>(null);  // HTMLDialogElement

  function addToCart (product: ProductModel) {
    if (optionValue == 0) {
      diag.current!.showModal();
      return;
    }

    const variant: VariantModel = product.variants.find((variant) => {
      if (variant.id == Number(optionValue)) {
        return variant;
      }
    })!;

    const cart = new CartModel();

    setVariants(cart.addVariant(variants, variant));
  }

  return (
    <div className='m-3'>
      <br />
      <select 
        className="select select-bordered w-full max-w-xs my-4"
        value={optionValue}
        onChange={(e) => { setOptionValue(Number(e.target.value)); }}
        >
        <option disabled value="0" selected>Size:</option>
        {product.variants.map((variants: VariantModel, i: number) => 
            <option key={variants.id} disabled={variants.available === true ? false : true  } value={variants.id}>{variants.title}</option>    
        )}
      </select>

      <br />
      <button className='btn btn-primary btn-md' onClick={() => addToCart(product)}>Add to cart</button>

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

    </div>
  )
}

export default AddToCart