export default function ToDoList(props){
    return(
       props.text.map((e) => {
            return(
                <li>
                    <input type= "checkbox"></input>
                    <label>{e.text}</label>
                </li>
            )
       })
    );
}