'use client';

import React, { useState, useRef } from 'react'

import { ProductModel, VariantModel } from '../../interfaces/ProductModel';
import { CartModel } from '../../Models/CartModel';

const AddToCart = ({product}: {product: ProductModel}) => {
  const [optionValue, setOptionValue] = useState(0);

  const diag = useRef<HTMLDialogElement>(null);

  const cart = new CartModel();

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

    cart.addVariant(variant);
  }

  return (
    <div className='m-3'>
      <br />
      <select 
        className="select select-bordered w-full max-w-xs my-4"
        value={optionValue}
        onChange={(e) => { setOptionValue(Number(e.target.value)); }}
        >
        <option disabled value="0" >Size:</option>
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