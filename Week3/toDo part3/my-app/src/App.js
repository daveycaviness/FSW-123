import {useState} from 'react';
import ToDoList from './ToDoList.js'
import './App.css';
import todos from './STORE.js'

function App() {
  const [todosSet, todoChange] = useState(todos)

  const todoComplete = (selTask, taskID) =>{
      const newList = [...todosSet]
      const altTask = newList.findIndex(e => e.id === taskID)
      
      if (selTask.isCompleted === false){
        selTask.isCompleted = true
      }  
      else if(selTask.isCompleted === true){
        selTask.isCompleted = false
      }

      newList.splice(altTask, 1, selTask)
      todoChange(newList)
  }

  const deletedTodos = (taskID) => {
      const newList = [...todosSet]
      const altTask = newList.findIndex(e => e.id === taskID)
      newList.splice(altTask, 1)
      todoChange(newList)
  } 

  return (
   <div> 
      <h1>ToDo List!</h1>
      <ul>
        <ToDoList 
          text = {todosSet}
          todoComplete = {todoComplete}
          deletedTodos = {deletedTodos}  
        />
      </ul>
    </div>
  );
}

export default App;
