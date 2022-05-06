import express, {json} from "express"
import dotenv from "dotenv"
import cors from "cors"

import userRouter from "./routes/userRoutes.js"

const app = express()


app.listen(5000)
app.use(json())
app.use(cors())
app.use(userRouter)

