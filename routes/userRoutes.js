import express from "express"

import {loginUser} from "../controllers/userController.js"
import { validateLogin } from "../middlewares/validateLogin.js"

const userRouter = express.Router()

userRouter.post("/sign-in", validateLogin, loginUser)

export default userRouter