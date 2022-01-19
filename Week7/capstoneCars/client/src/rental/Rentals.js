import {useState} from 'react'
import {v4 as uuid} from 'uuid'
import RentalConfirm from './RentalConfirm.js'
export default function Rentals() {
    const [confirm, setConfirm] = useState(false)
    const toggleConfirm = () =>{
        setConfirm((confirmed) => !confirmed)
    }
    
    
    if (confirm === false){
        return (
            <div id= "rentals">
                <input type= "text" id= "name" placeholder= "Enter Name"></input> 
                <input type= "date" id= "date" placeholder= "Enter Date"></input>
                <label for= "cars" >Please Select Car</label>
                <select name= "cars" id= "cars">
                    <option selected disabled>Choose Car</option>
                    <option value= "Audi">2021 Audi R8 Quattro Sport</option>
                    <option value= "Ferrari">2021 Ferrari Roma</option>
                    <option value= "Chevrolet">2021 Chevrolet ZR1</option>
                    <option value= "Nissan">2021 Nissan GT-R50 ItalDesign</option>
                    <option value= "Porsche">2021 Porsche 911 GT-3</option>
                    <option value= "Lamborghini">2021 Lamborghini Sian</option>
                </select>
                <button onClick= {()=>{toggleConfirm()}}>Submit</button>
            </div>
        )
    }
    
    else if(confirm === true){
        const name= document.querySelector("#name").value
        const date= document.querySelector("#date").value
        const cars= document.querySelector("#cars").value
        return (
            <RentalConfirm
                name= {name}
                date= {date}
                cars= {cars}
                orderNum= {uuid()}
            />
        )
    }
}