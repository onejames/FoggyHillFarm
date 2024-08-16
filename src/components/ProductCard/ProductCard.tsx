"use client"

import Link from 'next/link'
import Image from 'next/image'

import { ProductModel } from '@/interfaces/ProductModel';
import AddToCart from '@/components/ProductCard/AddToCart';

const ProductCard = ({product, addFilter}: {product: ProductModel, addFilter: Function}) => {
  const onAddFilter = (tag: string) => addFilter(tag);

  const date: Date = new Date();
  date.setDate(date.getDate() - 28);
  product.published_at = new Date(product.published_at);

  return (
    <div key={product.id} className='flex justify-center m-4'>
        <div className="card bg-base-100 w-96 shadow-xl">

          <figure>
            <Link href={product.url}>
              <Image src={product.featured_image} alt="Product" width="550" height="550" />
            </Link>
          </figure>

          <div className="card-body">
            <h2 className="card-title">
              {product.title}

              {  product.published_at > date &&
                <div className="badge badge-secondary">NEW</div> }
              
            </h2>

            <div className='max-h-24 text-wrap truncate' dangerouslySetInnerHTML={{__html: product.description}}></div>

            <div className="card-actions justify-end">
              {product.tags.map( (tag) => 
                <div key={tag}  className="badge badge-outline cursor-pointer p-3 hover:bg-fuchsia-900 hover:text-gray-50" onClick={ () => {onAddFilter(tag)}} >{tag}</div>
              )}
            </div>
          </div>

          <AddToCart product={product} />

        </div>
    </div>
  )
}

export default ProductCard