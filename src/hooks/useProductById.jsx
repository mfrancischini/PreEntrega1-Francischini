import React, { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
export const useProductById = (id) => {
  const [productData, setProductData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const product = doc(db, "products", id);
    getDoc(product)
    .then((snapshot)=>{ 
      setProductData({ id: snapshot.id ,...snapshot.data()});
      
    })
    .catch(error => console.log(error))
    .finally(() => setLoading(false));
  }, []);

  return { productData, loading };
};
