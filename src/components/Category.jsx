import React, { useEffect, useState } from 'react'

const Category = ({ setSelectedCategory }) => {

  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then(res => res.json())
      .then(data => setCategories(data))
  }, [])

  return (
    <div className="category-container mb-3">

      <button 
        className="category-btn"
        onClick={() => setSelectedCategory("all")}
      >
        All
      </button>

      {categories.map((cat, i) => (
        <button 
          key={i}
          className="category-btn"
          onClick={() => setSelectedCategory(cat)}
        >
          {cat}
        </button>
      ))}

    </div>
  )
}

export default Category