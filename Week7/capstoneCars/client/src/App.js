import './App.css';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'
import {createContext, useEffect, useState} from 'react'
import ListData from './ListData.js'
import Times from './time/Times.js'
import EnterTimes from './time/EnterTimes.js'
import Rentals from './rental/Rentals.js'

export const Context = createContext()

function App() {
  const [carData, setCarData] = useState([])
  useEffect(() =>{
    fetch("/cars")
      .then(res => res.json())
      .then(res => setCarData(res))
      .catch(error=>console.log(error))
  }, [])
  return (
    <BrowserRouter>
      <nav>
        <Link to = "/">Home</Link>
        <Link to = "/time">Times of Drivers</Link>
        <Link to = "/rentals">Rentals</Link>
      </nav>
      <h1 id= "header">Nurburgring Time Attack Trials</h1>
      <Context.Provider value = {carData}>
        <Routes>
          <Route exact path = '/' element = {<ListData/>}></Route>
          <Route exact path = '/time' element = {
            <>
              <EnterTimes setCarData = {setCarData}/>
              <Times/>
            </>
          }></Route>
          <Route exact path = '/rentals' element = {<Rentals/>}></Route>
        </Routes>
      </Context.Provider>
    </BrowserRouter>       
  );
}

export default App;
