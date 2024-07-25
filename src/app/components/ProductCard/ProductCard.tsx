import React from 'react'

import Link from 'next/link'
import Image from 'next/image'

import { ProductModel } from '../../interfaces/ProductModel';
import AddToCart from './AddToCart';

const ProductCard = ({product}: {product: ProductModel}) => {
  const date: Date = new Date();
  date.setDate(date.getDate() - 28);
  product.published_at = new Date(product.published_at);

  return (
    <div key={product.id} className='flex justify-center m-4'>
        <div className="card bg-base-100 w-96 shadow-xl">

          <figure>
            <Link href={product.url}>
              <Image src={product.featured_image} alt="Product" width="600" height="600" />
            </Link>
          </figure>

          <div className="card-body">
            <h2 className="card-title">
              {product.title}

              {  product.published_at > date &&
                <div className="badge badge-secondary">NEW</div> }
              
            </h2>

            <p className='max-h-24 text-wrap truncate' dangerouslySetInnerHTML={{__html: product.description}}></p>

            <div className="card-actions justify-end">
              {product.tags.map( (tag) => 
                <div  key={tag}  className="badge badge-outline" >{tag}</div>
               )}
            </div>
          </div>

          <AddToCart id={product.id} />

        </div>
    </div>
  )
}

export default ProductCard