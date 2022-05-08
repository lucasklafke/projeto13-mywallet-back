import express from "express"

import {loginUser, getUser} from "../controllers/userController.js"
import { validateLogin } from "../middlewares/validateLogin.js"
import validateToken from "../middlewares/validateToken.js"

const userRouter = express.Router()

userRouter.post("/sign-in", validateLogin, loginUser)

userRouter.get("/user",validateToken, getUser)

export default userRouter