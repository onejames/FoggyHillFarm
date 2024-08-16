"use client"

import { useState, useEffect } from "react"

import { useProducts } from '@/services/fetcher';

import Loading from "@/components/Feedback/Loading";
import ProductCard from '@/components/ProductCard/ProductCard'

import { ProductModel } from '@/interfaces/ProductModel';

const Products = () => {
    const { products, isLoading } = useProducts();

    const [filteredProducts, setFilteredProducts] = useState<ProductModel[]>([]);
    const [productFilter, setProductFilter] = useState<string[]>([]);

    function addFilter(tag: string) {
        if (!productFilter.includes(tag)) {
            productFilter.push(tag);
            setProductFilter(productFilter);
        }
        filterProducts();
        return productFilter;
    }

    function removeFilter(tag: string) {
        if (productFilter.includes(tag)) {
            productFilter.splice(productFilter.indexOf(tag), 1)
            setProductFilter(productFilter);
        }
        filterProducts();
    }

    function filterProducts() {
        if (productFilter.length == 0) {
            setFilteredProducts(products);
            return;
        }

        let processedProducts: ProductModel[] = [];

        products.forEach((product: ProductModel) => {
            productFilter.forEach((tag) => {
                if (product.tags.includes(tag)) {
                    processedProducts.push(product);
                }
            });
        });

        setFilteredProducts(processedProducts);
    }

    useEffect(() => {
        if (!isLoading) {
            setFilteredProducts(products);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoading]);

    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            <h2 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl'>Products</h2>

            {productFilter.length > 0 &&
                <div className="align-middle">
                    Applied Filters:
                    {productFilter.map((tag) =>
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