import React, { useEffect, useState } from 'react';
import { getProductById } from '../services/products';

export const useProductById = (id) => {
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) { 
      setLoading(true); 
      getProductById(id)
        .then((res) => {
          if (res.status === 200) {
            
            setProductData(res.data);
          }
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => setLoading(false));
    }
  }, []);

  return { productData, loading };
};
