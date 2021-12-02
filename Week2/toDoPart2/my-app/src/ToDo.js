export default function ToDoList(props){
    return(
        <li>
            <input type= "checkbox"></input>
            <label>{props.text}</label>
        </li>
    );
}