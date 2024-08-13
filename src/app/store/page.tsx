"use client"

import { useState, useEffect } from "react"

import { promises as fs } from 'fs';

import ProductCard from '../components/ProductCard/ProductCard'

import { ProductModel } from '../interfaces/ProductModel';
import { ProductSource } from '../models/API';

const Products = () => {
  const [products, setProducts] = useState([]);

  const [filteredProducts, setFilteredProducts] = useState<ProductModel[]>([]);
  // const [productFilter, setProductFilter] = useState(['Jam', 'Honey']);
  const [productFilter, setProductFilter] = useState<string[]>([]);

  useEffect(() => {
    console.log('produts');
    fetch('/api/products')
    .then((res) => res.json())
    .then((data) => {
      setProducts(JSON.parse(data));
      setFilteredProducts(JSON.parse(data));
    })
  }, []);

  function addFilter (tag: string) {
    if (!productFilter.includes(tag)) {
      productFilter.push(tag);
      setProductFilter( productFilter );
    }
    filterProducts();
    return productFilter;
  }  
  
  function removeFilter(tag: string) {
    if (productFilter.includes(tag)) {
      productFilter.splice(productFilter.indexOf(tag), 1)
      setProductFilter( productFilter );
    }
    filterProducts();
  }

  function filterProducts () {
    if (productFilter.length == 0) {
      setFilteredProducts(products);
      return;
    }

    let processedProducts:ProductModel[] = [];

    products.forEach((product: ProductModel) => {
      productFilter.forEach((tag) => {
        if (product.tags.includes(tag)) {
          processedProducts.push(product);
        }
      });
    });

    setFilteredProducts(processedProducts);
  }

  return (
    <div>
      <h2 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl'>Products</h2>
      { productFilter.length > 0 &&
          <div className="align-middle">
            Applied Filters:
            { productFilter.map((tag ) => 
              <span 
                key={tag}
                className="badge badge-primary m-2 p-4 cursor-pointer" 
                onClick={() => { removeFilter(tag) }}
              >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block h-4 w-4 stroke-current">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                &nbsp;{tag}
              </span>
            )}
          </div>
        }
      <div className="grid lg:grid-cols-3 ">
        {filteredProducts.map((product: ProductModel) => <ProductCard key={product.id} product={product} addFilter={addFilter} />)}
      </div>
    </div>
  )
}

export default Products