import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

const Card = ({ product }) => {
  return (

    <Link 
      to={`/product/${product.id}`} 
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div className="card h-100 shadow-sm product-card">

        <div className="img-wrapper">
          <img
            src={product.image}
            className="card-img-top product-img"
            alt={product.title}
          />
        </div>

        <div className="card-body d-flex flex-column">
          <h6 className="fw-bold">{product.title}</h6>

          <h5 className="mt-auto">${product.price}</h5>

          {/* prevent navigation when clicking this */}
          <button 
            className="btn text-light mt-2"
            style={{ backgroundColor: "rgb(231, 18, 174)" }}
            onClick={(e) => e.preventDefault()}
          >
            Add to Cart
          </button>

          {/* no need for Link here anymore */}
          <span 
            className="btn mt-2"
            style={{ backgroundColor: "rgb(231, 18, 174)", color: "white" }}
          >
            View More
          </span>

        </div>

      </div>

    </Link>
  )
}

export default Card