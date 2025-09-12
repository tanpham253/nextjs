import React from 'react'
import ButtonAddToCart from '@/component/ui/ButtonAddToCart'

const fetchProduct = async () => {
    const response = await fetch("https://learn-backend-nodejs.onrender.com/api/v1/products")
    return response.json();
}

const productPage = async () => {

    const products = await fetchProduct();
    
    console.log("products",products);

  return (
    <div>
        <h1>ProductPage</h1>
        <ButtonAddToCart />
    </div>
  )
}

export default productPage