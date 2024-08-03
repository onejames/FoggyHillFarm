import React from 'react'

import { promises as fs } from 'fs';
import Image from 'next/image'

import AddToCart from '../../components/ProductCard/AddToCart';

import { ProductModel, VariantModel } from '../../interfaces/ProductModel';
import { CartModel } from '../../Models/CartModel';

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
            <AddToCart product={product} />

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