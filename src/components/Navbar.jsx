import React, { useState } from 'react'
import { MdShoppingCart } from "react-icons/md";
import { useNavigate } from 'react-router-dom'
import { FaToggleOn,FaToggleOff } from "react-icons/fa";

const Navbar = () => {

  const [search, setSearch] = useState("")
  const[theme, setTheme] = useState("light")
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    if (search.trim() !== "") {
      navigate(`/search?q=${search}`)
    }
  }

  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "rgb(251, 219, 245)", position: "sticky", top: 0, zIndex: 100 }}>
      <div className="container-fluid">

        {/* LEFT: LOGO */}
        <span className="navbar-brand" style={{ color: "rgb(231, 18, 174)" }}>
          <i>Myntra</i>
        </span>

        {/* RIGHT SIDE  */}
        <div className="d-flex align-items-center ms-auto">
          <span className="fs-4 me-3" style={{ color: "rgb(231, 18, 174)", cursor: "pointer" }}>
            <MdShoppingCart />
          </span>
          {/* SEARCH BAR */}
          <form className="d-flex me-3" onSubmit={handleSearch}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ width: "250px" }}
            />
            <button className="btn " style={{ backgroundColor: "rgb(231, 18, 174)", color: 'white' }} type="submit">
              Search
            </button>
            <span className="ms-3 ">{theme == 'light' ? <FaToggleOff style={{color:'rgb(231, 18, 174)', fontSize: '1.5rem' , marginTop: '0.5rem'}}/> : <FaToggleOn style={{color:'black', fontSize: '1.5rem' , marginTop: '0.5rem'}}/>}</span>

          </form>




        </div>

      </div>
    </nav>
  )
}

export default Navbar