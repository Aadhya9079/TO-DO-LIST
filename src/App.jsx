import React, { useState } from "react"
import Sidebar from "./component/Sidebar"
import TaskManager from "./component/TaskManager"
import "./App.css"

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="app-container">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />
      <TaskManager toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />
    </div>
  )
}

export default App