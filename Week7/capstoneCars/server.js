const express =  require("express")
const app = express()
const carRouter = require("./routes/carsRoute.js")

const PORT = 9000

app.use(express.json())
app.use("/cars", carRouter)
app.listen(PORT, () => {
    console.log("app running on PORT 9000")
})



