export default function Die(props){
    return (
        <div id = "flexbox">
           <div id = "diceImg">
                <div className="die">
                    <h2>{props.die1}</h2>
                </div>
             
                <div  className = "die">
                    <h2>{props.die2}</h2>
                </div>
            </div>
                <div id = "btn">
                    <button onClick = {props.rollDice}>Roll!</button>
                </div>
        </div>
    )
};    