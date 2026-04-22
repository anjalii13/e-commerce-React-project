import React, { useEffect } from 'react'
import { useState } from 'react'
import '../index.css'
import ProductDetails from './ProductDetails'



const ProductList = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)


    async function fetchProducts() {
        await fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => {
                console.log(err); 
                setError(true)})
                setLoading(false)
    }


  useEffect(()=>{
        fetchProducts()

    }, [])


    if(loading) return <p>Loading....</p>
if(error) return <p>404 Page</p>
  return (
    
     <>  {
      products.map((product,i) =>(
        
              <div className="col-lg-3 col-md-4 col-sm-6 mb-4 " key={i}>
          
          <div className="card h-100 shadow-sm product-card " >

            <img
              src={product.image}
              className="card-img-top p-3"
              style={{ height: "200px", objectFit: "contain" }}
              alt={product.title}
            />

            <div className="card-body d-flex flex-column">
              <h6 className="fw-bold">
                {product.title}
              </h6>

              {/* <p className="text-muted small">
                {product.description}View More
              </p> */}

              <h5 className="mt-auto">${product.price}</h5>

              <button className="btn  text-light mt-2" style={{ backgroundColor: "rgb(231, 18, 174)" }}>
                Add to Cart
              </button>
               <button className="btn  text-light mt-2" style={{ backgroundColor: "rgb(231, 18, 174)" }} onClick={() => {console.log(product.description)
                return (<div><ProductDetails /></div>)
               }}>
                View More
              </button>
            </div>

          </div>

        </div>
        
))
}
</>
  )
}

export default ProductList
