import axios from "axios"
export async function getProducts() {
  return await axios.get('https://dummyjson.com/products') 
} 


export async function getProductById(id) {
  return await axios.get(`https://dummyjson.com/product/${id}`) 
} 