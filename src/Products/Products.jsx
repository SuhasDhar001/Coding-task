import React from 'react'

const Products = ({product}) => {
    return (
        <div className='card-container'>
          <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
          <div className="card-content">
            <h2>{product.title}</h2>
            <p>${product.price.toFixed(2)}</p>
            <p >{product.description.slice(0, 100)}...</p>
            <div>
              <span>{product.rating.rate.toFixed(1)}</span>
              <span className="text-gray-500 ml-2">({product.rating.count} reviews)</span>
            </div>
          </div>
        </div>
      )
}

export default Products
