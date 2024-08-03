"use client"

import { useState, useEffect } from 'react';

import { CartModel } from '../Models/CartModel';
import ProductRow from '../components/Product/ProductRow';
import { VariantModel } from '../interfaces/ProductModel';


const Cart = () => {
  
  const cart = new CartModel();

  const clearCart = () => {
    cart.clearCart();
  }

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
              { cart.getVariants() != null &&
                cart.getVariants().map((variant: VariantModel) => <ProductRow key={variant.id} variant={variant} products={products} />)
              }
            </tbody>
            <tfoot>
                <tr className="font-semibold text-gray-900">
                  <th></th><th></th><th></th>
                  <td className="px-6 py-3">{cart.calculateCartQuantity()} Items in cart</td>
                  <th scope="row" className="px-6 py-3 text-base">Total: </th>
                  <td className="px-6 py-3">{cart.calculateCartTotal()}</td>
                </tr>
            </tfoot>
          </table>
        </div>

      <div className=''>
        <button className='btn btn-primary btn-md m-3' onClick={clearCart}>Clear Cart</button>
      </div>
    </div>
  )
}

export default Cart