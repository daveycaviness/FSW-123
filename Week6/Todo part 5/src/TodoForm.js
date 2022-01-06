import {useState} from 'react';

export default function TodoForm(props){

    const [userInput, storeInput] = useState("")
    const changeInput = () => {storeInput(document.querySelector("#inputValue").value)} 

    return(
        <div id = "inputOptions">
            <input type = "text" placeholder = "Please Enter Your Todo" id = "inputValue" onChange = {() => changeInput()}></input>
            <button onClick = {() =>{
                if(document.querySelector("#inputValue").value !== ""){
                    props.addTodo(userInput)
                } 

                else if(document.querySelector("#inputValue").value === ""){
                    const removeErr = () =>{
                        document.querySelector("#errorReported").remove()
                    }
                    const errorReported = document.createElement("h1") 
                    errorReported.textContent = "Error"
                    errorReported.style = "color: red"
                    errorReported.setAttribute("id", "errorReported")
                    document.querySelector("#inputOptions").appendChild(errorReported)
                    setTimeout(removeErr, 3000)
                }
                
                }}>Submit</button>
        </div>
    )
}