import ToDoList from './ToDo.js'
import './App.css';
import todos from './Store.js'

function App() {
  return (
   <div> 
      <h1>ToDo List!</h1>
      <ul>
        {todos.map((e, i) => <ToDoList
          text = {todos[i].text}
        />)}
      </ul>
    </div>
  );
}

export default App;
