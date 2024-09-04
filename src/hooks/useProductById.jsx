import React, { useEffect, useState } from 'react';
import { getProductById } from '../services/products';


export const useProductById = (id) => {

    const [productData, setProductData] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
       
        getProductById(id)
                .then((res) => {
                    console.log(res.data)
                })

        }, []);
        return { productData };
};
