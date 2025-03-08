// export default function TaskList({ tasks, completeTask, removeTask, toggleStar }) {
//   return (
//     <ul className="space-y-2">
//       {tasks.map((task) => (
//         <li key={task.id} className="flex justify-between items-center p-2 border rounded">
//           <span className={task.completed ? "line-through text-gray-500" : ""}>{task.text}</span>
//           <div className="flex gap-2">
//             <button onClick={() => toggleStar(task.id)} className={task.starred ? "text-yellow-500" : "text-gray-400"}>⭐</button>
//             <button onClick={() => completeTask(task.id)} className="text-green-500">✔</button>
//             <button onClick={() => removeTask(task.id)} className="text-red-500">✖</button>
//           </div>
//         </li>
//       ))}
//     </ul>
//   )
// }