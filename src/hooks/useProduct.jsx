import { useQuery } from "@tanstack/react-query"
import { getProductsDataApi } from "../api/productApi"
import { useEffect, useState } from "react"

export const useProductApi = () => {

    const [filteredProducts, setFilteredProducts] = useState(null)
    
    let {data,isPending,error} = useQuery({
        queryKey: ['products'],
        queryFn: getProductsDataApi,
        staleTime:50000
    })

    let filterProducts = (searchParams) => {
        let filteredData = data.filter((val) => val.title.toLowerCase().includes(searchParams.toLowerCase()))
        if(filteredData){
            setFilteredProducts(filteredData)
        }
    }

    useEffect(() => {
        setFilteredProducts(data)
    },[data])

    return {
        data,
        isPending,
        error,
        filterProducts,
        filteredProducts
    }
}