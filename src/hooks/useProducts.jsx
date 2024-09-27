import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

export const useProducts = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const productsCollection = collection(db, 'products');
        getDocs(productsCollection)
        .then((snapshot)=>{
            setProducts(snapshot.docs.map((doc)=>({id: doc.id,...doc.data()})))
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));

    }, []);
    return { products, loading };
};
