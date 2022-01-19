export default function Lamborghini(props) {
    return(
        <div className="confirmForm">
            <h2>{props.name}</h2>
            <h3>{props.date}</h3>
            <h3>2021 Lamborghini Sian</h3>
            <img src= {props.car} alt= "Lamborghini" className= "rentalCar"></img>
            <h3>{props.orderNum}</h3>
            <button onClick={() => {window.location.reload(true)}}>Confirm</button>
        </div>
    )
}