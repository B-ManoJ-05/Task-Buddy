import React, { useEffect, useState } from 'react'
import Progresstracter from './Components/Progresstracter'
import TaskList from './Components/TaskList'
import Taskform from './Components/Taskform'
import './Style.css'

function App() {
  let[tasks, setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  });

  let addTask = (task) => {
      setTasks([...tasks,task]);
  }

  let updateTask = (updatedTask, index) => {
       let newtask = [...tasks];
       newtask[index] = updatedTask;
       setTasks(newtask);
  }

  let deleteTask = (index) => {
   setTasks(tasks.filter((_, i) => i != index));

  }

  const clearTasks = () => {
      setTasks([]);
   }

  return (
    <div className='App'>
      <header> 
       <h1 className='title'>Task Focus</h1>
      <p className='tagline'>Our friendly TaskManager</p>
      </header>
      <Taskform addTask = {addTask}/>

      <TaskList tasks = {tasks}
      updateTask = {updateTask}
     deleteTask = {deleteTask}/>

      <Progresstracter tasks = {tasks}/>

     {tasks.length > 0 && (<button className='clear-btn' onClick={clearTasks}> Clear task</button>)}
     

    </div>
  )
}

export default App