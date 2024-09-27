import React, { useEffect, useState } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

export const useProductBySearch = (searchTerm) => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!searchTerm) {
      setProductData([]);  
      setLoading(false);  
      return;
    }

    const fetchProducts = async () => {
      setLoading(true);

      try {

        const productsRef = collection(db, 'products');
        
        const q = query(
          productsRef,
          where('title', '>=', searchTerm),
          where('title', '<=', searchTerm + '\uf8ff') 
        );

        const querySnapshot = await getDocs(q);

        const products = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProductData(products); 
      } catch (err) {
        console.log("Error fetching products:", err);
      } finally {
        setLoading(false); 
      }
    };

    fetchProducts();
  }, [searchTerm]);

  return { productData, loading };
};
