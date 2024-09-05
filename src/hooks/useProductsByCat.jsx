import React, { useEffect, useState } from 'react';
import { getProductByCategory } from '../services/products';


export const useProductsByCat = (id) => {

    const [productData, setProductData] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
       
        getProductByCategory(id)
            .then((res) => {
                if (res.status === 200) {
              
                    setProductData(res.data.products);
                }
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => setLoading(false))
    }, [id]);
    return { productData, loading };
};
