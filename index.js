import express, {json} from "express"
import dotenv from "dotenv"
import cors from "cors"
import db from "./db.js"

import { postUser , getUser} from "./controllers/userController.js"

const app = express()

app.listen(5000)
app.use(json())
app.use(cors())


app.post("/user", postUser )

app.get("/user", getUser)