
import React, { useState } from "react";
import './../styles/App.css';
import Todo from "./Todo";

const App = () => {

  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if(task.trim() !== ""){
      setTasks([...tasks, task]);
    }
  }

  const deleteTask = (index) => {
    setTasks(tasks.filter((_,i) => i !== index))
  }

  return (
    <div className="app-container">
       <h1> To-Do List </h1>
       <Todo tasks={tasks} addTask={addTask} deleteTask={deleteTask} />
    </div>
  )
}

export default App
