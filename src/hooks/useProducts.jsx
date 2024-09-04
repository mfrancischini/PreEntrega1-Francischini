import React, { useEffect, useState } from 'react';
import { getProducts } from '../services/products.js';


export const useProducts = () => {

    const [productsData, setProductsData] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
       
        getProducts()
            .then((res) => {
                if (res.status === 200) {

                    setProductsData(res.data.products);
                }
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => setLoading(false))
    }, []);
    return { productsData, loading };
};
