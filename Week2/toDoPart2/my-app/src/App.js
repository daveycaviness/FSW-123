import ToDoList from './ToDoList.js'
import './App.css';
import todos from './STORE.js'

function App() {
  return (
   <div> 
      <h1>ToDo List!</h1>
      <ul>
        <ToDoList text = {todos}/>
      </ul>
    </div>
  );
}

export default App;
