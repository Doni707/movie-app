import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"
import movie from "./routes/movie.js"
dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())
app.use("/movie" ,movie)


function startApp() {
    const uri = process.env.MONGO_URI
    const port = process.env.PORT

    mongoose.connect(uri).then(() => console.log("MongoDB connected"))
    app.listen(port, () => {
        console.log(`Server running on port: ${port}`)
    })
}

startApp()