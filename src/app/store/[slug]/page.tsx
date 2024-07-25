import React from 'react'

import { promises as fs } from 'fs';
import Image from 'next/image'

import AddToCart from '../../components/ProductCard/AddToCart';

import { ProductModel } from '../../interfaces/ProductModel';
import { variantsModel } from '../../interfaces/ProductModel';

const product = async ({ params }: { params: { slug: string } }) => {

    const productSlug = params.slug;

    const file = await fs.readFile(process.cwd() + '/public/data/'+productSlug+'.json', 'utf8');
  
    const product: ProductModel = JSON.parse(file);

    return (
        <div>
            <h1 className='card-title product-title'>{product.title}</h1>

            <Image className='m-4' src={product.featured_image} alt="Product" width="600" height="800" />

            <div>Price: {product.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</div>

            <div className='my-6 product-description' dangerouslySetInnerHTML={{__html: product.description}}></div>

            <br />
            <select className="select select-bordered w-full max-w-xs my-4">
                <option disabled selected>Size:</option>
                {product.variants.map((variants: variantsModel, i: number) => 
                    <option key={variants.id} disabled={variants.available === true ? false : true  } value={variants.id}>{variants.title}</option>    
                )}
            </select>

            <br />
            <AddToCart id={product.id} />

            <br />
            <div className="carousel carousel-center rounded-box my-4">
                {product.images.map(
                    (img: string, i: number) => 
                        <div key={i} className="carousel-item">
                            <Image key={i} src={img} alt="Product" width="400" height="600"/> 
                        </div>
                    )
                }
            </div>

            {/* <p>{JSON.stringify(product.variants)}</p> */}
        </div>
    )
}

export default product