import './App.css';
import Card from './Card.js';

const boxKey = 4
const boxArray = ["red", "orange", "yellow", "green"]

function App() {
  return (
      [...Array(boxKey)].map((e, i) => <Card
      Title= {"Title " + (i + 1)}
      subTitle= {"Sub Title " + (i + 1)}
      desc= {"Hello World " + (i +1)}
      boxStyle= {{backgroundColor: boxArray[i], width: "200px"}}
      />)
  );
}

export default App;

//<Card
//
// />
