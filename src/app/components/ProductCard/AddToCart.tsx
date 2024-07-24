'use client';

import React from 'react'

const AddToCart = (id: number) => {
  return (
    <button className='btn btn-primary btn-md m-3' onClick={ () => console.log(id) }>Add to cart</button>
  )
}

export default AddToCart