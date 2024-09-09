import React, { useEffect, useState } from 'react';
import { getProductBySearch } from '../services/products';

export const useProductBySearch = (id) => {
  const [productData, setProductData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) { 
      setLoading(true); 
      getProductBySearch(id)
        .then((res) => {
          if (res.status === 200) {
       
            setProductData(res.data.products);
          }
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => setLoading(false));
    }
  }, [id]);

  return { productData, loading };
};
