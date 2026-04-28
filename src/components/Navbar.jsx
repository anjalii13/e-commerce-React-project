import React, { useState,useContext } from 'react'
import { MdShoppingCart } from "react-icons/md";
import { useNavigate } from 'react-router-dom'
import { FaToggleOn,FaToggleOff } from "react-icons/fa";
import { ThemeContext } from '../Theme/ThemeProvider';
import '../index.css'

const Navbar = () => {
const {theme,toggleTheme} = useContext(ThemeContext)
  const [search, setSearch] = useState("")

  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    if (search.trim() !== "") {
      navigate(`/search?q=${search}`)
    }
  }

  return (
<nav
  className={`navbar navbar-expand-lg ${theme === 'light' ? 'light-navbar' : 'bg-secondary'}`}
  style={{ position: "sticky", top: 0, zIndex: 100 }}
>
      <div className="container-fluid">

        {/* LEFT: LOGO */}
        <span className="navbar-brand" style={{ color: "rgb(231, 18, 174)" }}>
          <i>Myntra</i>
        </span>

        {/* RIGHT SIDE  */}
        <div className="d-flex align-items-center ms-auto">
          <span className="fs-4 me-3" style={{ cursor: "pointer" }}>
<MdShoppingCart 
  className={`${theme === 'light' ? 'icon-light' : 'icon-dark'}`}
/>
          </span>
          {/* SEARCH BAR */}
          <form className="d-flex me-3"
          
          onSubmit={handleSearch}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ width: "250px" }}
            />
            <button className= {`btn ${theme === 'light' ? 'light-btn' : 'btn-secondary '}`} type="submit">
              Search
            </button>
            <span onClick={()=>toggleTheme()} className="ms-3 ">{theme == 'light' ? <FaToggleOff style={{color:'rgb(231, 18, 174)', fontSize: '1.5rem' , marginTop: '0.5rem'}}/> : <FaToggleOn style={{color:'black', fontSize: '1.5rem' , marginTop: '0.5rem'}}/>}</span>

          </form>




        </div>

      </div>
    </nav>
  )
}

export default Navbar