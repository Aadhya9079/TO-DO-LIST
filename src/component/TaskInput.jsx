// import { useState } from "react"

// export default function TaskInput({ addTask }) {
//   const [task, setTask] = useState("")

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     if (!task.trim()) return
//     addTask(task)
//     setTask("")
//   }

//   return (
//     <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
//       <input
//         type="text"
//         className="border p-2 rounded flex-grow"
//         placeholder="Add a task"
//         value={task}
//         onChange={(e) => setTask(e.target.value)}
//       />
//       <button type="submit" className="bg-green-500 text-white p-2 rounded">
//         Add
//       </button>
//     </form>
//   )
// }