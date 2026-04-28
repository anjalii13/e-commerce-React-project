import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProductList from '../components/ProductList'
const Dashboard = () => {
  return (
    <div>


<div>

  <div className="container-fluid ">
    <div className="row">

      {/* Sidebar */}
      <div className="col-md-2  text-light p-3 "style={{ backgroundColor: "rgb(251, 219, 245)", color: "white", position: "sticky", top: 0, height: "100vh" }}>
        <h5 style={{ color: "rgb(231, 18, 174)", marginBottom:'30px' }}>Filters</h5>
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
