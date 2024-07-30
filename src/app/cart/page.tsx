"use client"

import { useState, useEffect } from 'react';

import useLocalStorage from '../hooks/UseLocalStorage';

import { CartModel } from '../interfaces/CartModel';
import ProductRow from '../components/Product/ProductRow';
import { VariantModel } from '../interfaces/ProductModel';


const Cart = () => {
  
  const cartModel = new CartModel();

  const [variants, setVariants, getVariants] = useLocalStorage("cart", []);

  const clearCart = () => {
    setVariants([]);
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
 
  if (isLoading) return <p>Loading...</p>
  if (!products) return <p>No profile data</p>

  return (
    <div>
      <h1>Cart</h1>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
              {variants.map((variant: VariantModel) => <ProductRow key={variant.id} variant={variant} products={products} />)}
            </tbody>
            <tfoot>
                <tr className="font-semibold text-gray-900 dark:text-white">
                  <th></th><th></th><th></th>
                  <td className="px-6 py-3">{cartModel.calculateCartQuantity(variants)} Items in cart</td>
                  <th scope="row" className="px-6 py-3 text-base">Total: </th>
                  <td className="px-6 py-3">{cartModel.calculateCartTotal(variants)}</td>
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