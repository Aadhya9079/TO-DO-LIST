import React from "react"
import { FaTasks, FaStar, FaCalendarCheck, FaUser } from "react-icons/fa"
import "/src/Sidebar.css"

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <h1>Do It</h1>
      <ul>
        <li><FaTasks /> All Tasks</li>
        <li><FaCalendarCheck /> Today</li>
        <li><FaStar /> Important</li>
        <li><FaUser /> Assigned to Me</li>
      </ul>
    </div>
  )
}

export default Sidebar