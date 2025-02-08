import React from 'react'
import { useState, useEffect } from 'react'
import Products from '../Products/Products'

const Home = () => {
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
  
    useEffect(() => {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => {
          setProducts(data)
          setFilteredProducts(data)
        })
    }, [])
  
    
  
    return (
      <div className="container mx-auto px-4 py-8">
        <div >
          {filteredProducts.map((product) => (
            <Products key={product.id} product={product} />
          ))}
        </div>
      </div>
    )
}

export default Home
