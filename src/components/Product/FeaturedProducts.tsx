import React from 'react'

import { promises as fs } from 'fs';

import { ProductModel } from '@/interfaces/ProductModel';
import ProductCard from '@/components/ProductCard/ProductCard';

const FeaturedProducts = async () => {
    const file1 = await fs.readFile(process.cwd() + '/public/data/black-raspberry-jam.json', 'utf8');
    const file2 = await fs.readFile(process.cwd() + '/public/data/apple-butter.json', 'utf8');
    const file3 = await fs.readFile(process.cwd() + '/public/data/honey.json', 'utf8');

    let featuredProducts = [];
    featuredProducts.push(JSON.parse(file1));
    featuredProducts.push(JSON.parse(file2));
    featuredProducts.push(JSON.parse(file3));

    async function addFilter () {
        "use server"
        return null;
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 my-4">
            {featuredProducts.map((product: ProductModel) => <ProductCard key={product.id} product={product} addFilter={addFilter} />)}
        </div>
    )
}

export default FeaturedProducts