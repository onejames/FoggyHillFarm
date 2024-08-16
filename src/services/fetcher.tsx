import useSWR, { Fetcher, SWRConfig } from 'swr'

import { ProductModel } from "@/interfaces/ProductModel";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useProducts () {
    const {data, error, isLoading}: {data: string|undefined, error: string|undefined, isLoading: Boolean} = useSWR('api/products', fetcher);

    let returnData: ProductModel[] = [];
    if (typeof data !== "undefined")  {
        returnData = JSON.parse(data!) as ProductModel[]   
    }

    return {
        products: returnData,
        isLoading,
        isError: error
    }
}