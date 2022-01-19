import {useContext} from 'react'
import {Context} from './App.js'

export default function ListData(){
    const carData= useContext(Context)
    return (
        carData.map(e =>{
            if(e.img){
                return(
                    <div className='dataBox'>
                        <h2 className='driver'>{e.driver}</h2>
                        <h3 className='vehicle'>{e.vehicle}</h3>
                        <h4 className='tires'>{e.tires}</h4>
                        <img src ={e.img} alt = "car" className='image'></img>
                    </div>
                )
            }  
        })
    )
}