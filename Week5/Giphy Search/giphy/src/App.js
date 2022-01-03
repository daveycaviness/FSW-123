import './App.css';
import {useState} from 'react'
import {useEffect} from 'react'

function App() {
 const[imgSrc, setImgSrc] = useState("")
 const [alt, setAlt] = useState("")

 useEffect( ()=> {
    const getFetch = () =>{
      fetch("https://api.giphy.com/v1/gifs/search?q=dog&api_key=xpnUbp66YuWb08ORX1hdCYXaE9cMAjEf")
        .then(res => res.json())
        .then(res => {
         var count = 0
         res.data.forEach(()=>{count++})
         const random = Math.floor(Math.random() * count + 1)
          setImgSrc(res.data[random].images.original.url)
          setAlt(res.data[random].title)
        })
        .catch(err => console.log(err))
    }
    getFetch()
}, [])

const newFetch = ()=>{
 const fetchNew = document.querySelector("#userInput").value
  let loadingWait = document.createElement("h3")
  loadingWait.textContent = "Loading Please Wait..."
  loadingWait.id = "loading"
  document.querySelector("#myImg").src = ""
  document.querySelector("#myImg").alt = ""
  document.querySelector("#imgBag").appendChild(loadingWait)
  if(document.querySelector("#noLoad")){
    document.querySelector("#noLoad").remove();
  }

  fetch(`https://api.giphy.com/v1/gifs/search?q=${fetchNew}&api_key=xpnUbp66YuWb08ORX1hdCYXaE9cMAjEf`)
        .then(res => res.json())
        .then(res => {
          var count = 0
          res.data.forEach(()=>{count++})
          if (count !== 0){
             const random = Math.floor(Math.random() * count + 1)
           setImgSrc(res.data[random].images.original.url)
           setAlt(res.data[random].title)
          }
          else if (count === 0){
            const zeroImg = document.createElement("h3")
            zeroImg.textContent = "No Image is Found"
            zeroImg.id = "noLoad"
            document.querySelector("#imgBag").appendChild(zeroImg)
          }
         
        })
        .then(() => {
          document.querySelector("#loading").remove();
        })
        .catch(err => console.log(err))
}



  return (
    <body id= "flexBox">
      <div>
        <input id = "userInput" type = "text"></input>
        <button onClick = {() =>{newFetch()}}>The Search</button>
      </div>
      <div id = "imgBag">
        <img id = "myImg" src={imgSrc} alt= {alt}></img>
      </div>
    </body>
      )
}

export default App;

//res.data[0].images.original.url