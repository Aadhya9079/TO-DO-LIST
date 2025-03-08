import React, { useState, useEffect } from "react"
import { FaBars, FaSearch, FaTh, FaMoon, FaSun } from "react-icons/fa"
import logomark from "/src/assets/logomark.png"
import "/src/NavBar.css"

const NavBar = ({ toggleSidebar }) => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark"
  })

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode)
    localStorage.setItem("theme", darkMode ? "dark" : "light")
  }, [darkMode])

  return (
    <nav className="navbar">
      <div className="left">
        <FaBars className="icon" onClick={toggleSidebar} />
        <img src={logomark} alt="DoIt Logo" className="logo" />
        <span className="brand-name">DoIt</span>
      </div>
      <div className="right">
        <FaSearch className="icon" />
        <FaTh className="icon" />
        {darkMode ? (
          <FaSun className="icon" onClick={() => setDarkMode(false)} />
        ) : (
          <FaMoon className="icon" onClick={() => setDarkMode(true)} />
        )}
      </div>
    </nav>
  )
}

export default NavBar