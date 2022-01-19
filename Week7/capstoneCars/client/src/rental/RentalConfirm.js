import Ferrari from './Ferrari.js'
import Nissan from './Nissan.js'
import Chevrolet from './Chevrolet.js'
import Audi from './Audi'
import Porsche from './Porsche.js'
import Lamborghini from './Lamborghini.js'

export default function RentalConfirm(props){
    const ferrari= "https://www.topgear.com/sites/default/files/cars-car/image/2020/08/_p2a2965.jpg"
    const audi= "https://www.carmag.co.za/wp-content/uploads/2018/11/audi-r8-800x480.jpg"
    const chevrolet= "https://assets.whichcar.com.au/image/upload/s--fWOIw2ai--/ar_1.9047619047619047,c_fill,f_auto,q_auto:good/c_scale,w_1200/v1/archive/whichcar/2018/04/05/33878/Chevrolet-Corvette-ZR1-cover-MAIN.jpg"
    const nissan= "https://carsguide-res.cloudinary.com/image/upload/f_auto%2Cfl_lossy%2Cq_auto%2Ct_default/v1/editorial/2021-Nissan-GT-R50-by-Italdesign-coupe-teal-1001x565-1.jpg"
    const porsche= "https://media.autoexpress.co.uk/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1618844286/autoexpress/2021/04/Porsche%20911%20GT3%20.jpg"
    const lamborghini= "https://www.cnet.com/a/img/euBW1M819S7ZohG3KO9LAQ9D7JY=/940x0/2021/03/04/e8e7e991-6a10-4d49-ae09-c88f43d2e548/lamborghini-sian-019.jpg"

    if(props.cars === "Ferrari"){
        return(
            <Ferrari
                car = {ferrari}
                name = {props.name}
                date = {props.date}
                orderNum = {props.orderNum}
            />
        )
    }
    
    else if(props.cars === "Nissan"){
        return(
            <Nissan
                car = {nissan}
                name = {props.name}
                date = {props.date}
                orderNum = {props.orderNum}
            />
        )
    }

    else if(props.cars === "Chevrolet"){
        return(
            <Chevrolet
                car = {chevrolet}
                name = {props.name}
                date = {props.date}
                orderNum = {props.orderNum}
            />
        )
    }

    else if(props.cars === "Audi"){
        return(
            <Audi
                car = {audi}
                name = {props.name}
                date = {props.date}
                orderNum = {props.orderNum}
            />
        )
    }

    else if(props.cars === "Porsche"){
        return(
            <Porsche
                car = {porsche}
                name = {props.name}
                date = {props.date}
                orderNum = {props.orderNum}
            />
        )
    }

    else if(props.cars === "Lamborghini"){
        return(
            <Lamborghini
                car = {lamborghini}
                name = {props.name}
                date = {props.date}
                orderNum = {props.orderNum}
            />
        )
    }
}