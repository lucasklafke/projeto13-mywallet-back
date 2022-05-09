import express, {json} from "express"
import dotenv from "dotenv"
import cors from "cors"

import userRouter from "./routes/userRoutes.js"
import signUpRouter from "./routes/signUpRoutes.js"
import transactionRouter from "./routes/transactionRoutes.js"
const app = express()


app.listen(process.env.PORT)
app.use(json())
app.use(cors())

app.use(userRouter)
app.use(signUpRouter)
app.use(transactionRouter)
