import {useState} from 'react';
import ToDoList from './ToDoList.js'
import './App.css';
import todos from './STORE.js'
import TodoForm from './TodoForm.js'
import {v4 as uuid} from "uuid"



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
  const addTodo = text => {
    const copyList = [...todos];
    const newEntry = {text: `${text}`, id: uuid(), isCompleted: false};
    copyList.push(newEntry);
    todoChange(copyList);
  }
   

  return (
   <div> 
      <h1>ToDo List!!!</h1>
      <TodoForm addTodo = {addTodo}/>
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
