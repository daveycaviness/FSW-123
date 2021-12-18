import {useState} from 'react';

export default function TodoForm(props){

    const [userInput, storeInput] = useState("")
    const changeInput = () => {storeInput(document.querySelector("#inputValue").value)} 

    return(
        <div>
            <input type = "text" placeholder = "Please Enter Your Todo" id = "inputValue" onChange = {() => changeInput()}></input>
            <button onClick = {() => props.addTodo(userInput)}>Submit</button>
        </div>
    )
}