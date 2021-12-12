import Todo from './Todo.js'

export default function ToDoList(props){
    return(
       props.text.map((e) => {
            return(
                <Todo
                    key = {e.id}
                    text = {e}
                    todoComplete = {props.todoComplete}
                    deletedTodos = {props.deletedTodos} 
                />
            )
       })
    );
}