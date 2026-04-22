import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProductList from '../components/ProductList'
const Dashboard = () => {
  return (
    <div>
      <Navbar />

<div>

  <div className="container-fluid ">
    <div className="row">

      {/* Sidebar */}
      <div className="col-md-2  text-light p-3 "style={{ backgroundColor: "rgb(251, 219, 245)", color: "white" }}>
        <h5 style={{ color: "rgb(231, 18, 174)" }}>Filters</h5>

        <input 
          type="search" 
          className="form-control my-3" 
          placeholder="Search products"
        />

        <button className="btn btn-primary w-100 mb-3" style={{ backgroundColor: "rgb(231, 18, 174)", border: "none" }}>
          Search
        </button>

        <div>
          <h6 style={{ color: "rgb(231, 18, 174)" }}> Category</h6>
          <div style={{ color: "rgb(231, 18, 174)" }}><input type="checkbox" /> Men</div>
          <div style={{ color: "rgb(231, 18, 174)" }}><input type="checkbox" /> Women</div>
          <div style={{ color: "rgb(231, 18, 174)" }}><input type="checkbox" /> Kids</div>
        </div>
      </div>

      {/* Products Section */}
      <div className="col-md-10 p-4">
        <h4 className="mb-4" style={{ color: "rgb(231, 18, 174)" }}>Products</h4>

        <div className="row">
          <ProductList />
        </div>
      </div>

    </div>
  </div>
</div>

<Footer />
    </div>
  )
}

export default Dashboard
