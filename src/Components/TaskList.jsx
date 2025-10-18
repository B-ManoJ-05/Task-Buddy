import React from 'react'

function TaskList({tasks , updateTask, deleteTask}) {

  let toggleComplete = (index) => {
    let updatedTask = {...tasks[index], completed: !tasks[index].completed };
     updateTask(updatedTask,index);
  }
  return (
  
        <ul className='task-list'>
        {tasks.map((task, index) => (
        <li key ={index} className={task.completed ? "completed" : ""}>
         <div>
          <span>{task.text}
            <small>({task.priority}, {task.category})</small>
          </span>
         </div>
              
            {/* //completed and Delete the task */}
         <div>
         <button onClick={() => toggleComplete(index)}>
          {task.completed ? "Undo" : "Complete"}</button>
         <button onClick={() => deleteTask(index)}>Delete</button>
         </div>
         {/* end */}

        </li>
        ))}
      </ul>
  )
}

export default TaskList