import React, { useState } from "react"
import { FaPlus, FaStar, FaTrash, FaBell, FaSyncAlt, FaCalendarAlt } from "react-icons/fa"
import NavBar from "./NavBar"
import Sidebar from "./Sidebar"
import "/src/TaskManager.css"

const TaskManager = () => {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState("")
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, completed: false, important: false }])
      setNewTask("")
    }
  }

  const toggleComplete = (index) => {
    const updatedTasks = [...tasks]
    updatedTasks[index].completed = !updatedTasks[index].completed
    setTasks(updatedTasks)
  }

  const toggleImportant = (index) => {
    const updatedTasks = [...tasks]
    updatedTasks[index].important = !updatedTasks[index].important
    setTasks(updatedTasks)
  }

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index))
  }

  const handleKeyPress = (e, index = null) => {
    if (e.key === "Enter") {
      if (index === null) {
        addTask()
      } else {
        toggleComplete(index)
      }
    }
  }

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)
  const toggleDarkMode = () => setDarkMode(!darkMode)

  return (
    <div className={`task-page ${darkMode ? "dark-mode" : ""}`}>
      <Sidebar isOpen={isSidebarOpen} />
      <div className={`task-manager ${isSidebarOpen ? "shifted" : ""}`}>
        <NavBar toggleSidebar={toggleSidebar} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        <div className="task-input-container">
          <div className="task-input-box">
            <input 
              type="text" 
              placeholder="Add A Task" 
              value={newTask} 
              onChange={(e) => setNewTask(e.target.value)} 
              onKeyPress={(e) => handleKeyPress(e)} 
            />
            <div className="task-icons">
              <FaBell />
              <FaSyncAlt />
              <FaCalendarAlt />
            </div>
            <button className="add-task-btn" onClick={addTask}>ADD TASK</button>
          </div>
        </div>

        <div className="task-list">
          {tasks.filter(task => !task.completed).map((task, index) => (
            <div key={index} className="task">
              <input type="checkbox" checked={task.completed} onChange={() => toggleComplete(index)} />
              <span onKeyPress={(e) => handleKeyPress(e, index)} tabIndex={0}>{task.text}</span>
              <FaStar className={`star ${task.important ? "active" : ""}`} onClick={() => toggleImportant(index)} />
              <FaTrash className="delete" onClick={() => deleteTask(index)} />
            </div>
          ))}
        </div>

        {tasks.some(task => task.completed) && (
          <>
            <h6>Completed</h6>
            <div className="task-list completed-tasks">
              {tasks.filter(task => task.completed).map((task, index) => (
                <div key={index} className="task completed">
                  <input type="checkbox" checked={task.completed} onChange={() => toggleComplete(index)} />
                  <span>{task.text}</span>
                  <FaTrash className="delete" onClick={() => deleteTask(index)} />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default TaskManager
