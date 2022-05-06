import express from "express"

import {postUser} from "../controllers/userController.js"
import { validateLogin } from "../middlewares/validateLogin.js"

const userRouter = express.Router()

userRouter.post("/user", validateLogin, postUser)

export default userRouter