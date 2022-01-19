import {useContext} from 'react'
import {Context} from '../App.js'

export default function Times(){
    const carData = useContext(Context)
    return (
        carData.map(e =>{
            return(
                <div className= "gridContainer">
                    <h4 className='newDriver'>{e.driver}</h4>
                    <h4 className='drvVehicle'>{e.vehicle}</h4>
                    <h4 className='drvTime'>{e.time}</h4>
                </div>
            )
        })
    )
}