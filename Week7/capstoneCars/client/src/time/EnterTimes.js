import {useState} from 'react'

export default function EnterTimes(props) {
    const [btnDisable, setBtnDisable] = useState(true)

    const checkInputs = () => {
        if (document.querySelector('#newTime').value === "" || document.querySelector('#newCar').value === "" || document.querySelector('#newName').value === "") {
            setBtnDisable(true)
        }
        else {
            setBtnDisable(false)
        }
    }

    const postTime = async() =>{
        await fetch("/cars", {
            method: 'POST', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                time: document.querySelector("#newTime").value,
                vehicle: document.querySelector("#newCar").value,
                driver: document.querySelector("#newName").value
            })
        })        
    }

    const clear = () =>{
        document.querySelector("#newTime").value = ""
        document.querySelector("#newCar").value = ""
        document.querySelector("#newName").value = ""
        setBtnDisable(true)
    }

    const rerender = () =>{
        fetch('/cars')
            .then(res => res.json())
            .then(res => props.setCarData(res))
            .catch(err => console.log(err))
    }
    
    return(
        <div id= "flexTime">
            <input type="text" placeholder="Enter Driver Name" id= "newName" onChange={() => checkInputs()}></input>
            <input type="text" placeholder="Enter Car" id= "newCar" onChange={() => checkInputs()}></input>
            <input type="text" placeholder="Enter Time" id= "newTime" onChange={() => checkInputs()}></input>
            <button onClick={() => {
                postTime()
                clear()
                rerender()    
            }} disabled={btnDisable}>Submit</button>
        </div>
    )
}