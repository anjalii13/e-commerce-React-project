import React from 'react'
import { MdShoppingCart } from "react-icons/md";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg text-light" data-bs-theme="dark" style={{ backgroundColor: "rgb(251, 219, 245)", color: "white" }}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#" style={{ color: "rgb(231, 18, 174)" }}><i>Myntra</i></a>
    <button 
      className="navbar-toggler" 
      type="button" 
      data-bs-toggle="collapse" 
      data-bs-target="#navbarNavDropdown"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active ms-2" href="#" style={{ color: "rgb(231, 18, 174)" }}>Home</a>
        </li>
      </ul>
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <span className="fs-4 me-5" style={{ color: "rgb(231, 18, 174)" }}>
            <MdShoppingCart />
          </span>
        </li>
      </ul>

    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
