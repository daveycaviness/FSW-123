import Todo from './Todo.js'

export default function ToDoList(props){
    let count = 0
    return(
       props.text.map((e) => {
        count++    
        return(
                <Todo
                    key = {e.id}
                    text = {e}
                    todoComplete = {props.todoComplete}
                    deletedTodos = {props.deletedTodos}
                    count = {count} 
                />
            )
       })
    );
}