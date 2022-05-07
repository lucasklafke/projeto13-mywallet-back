import express from "express"

import {createUser} from "../controllers/signUpController.js"
import { validateSignUp } from "../middlewares/validateSignUp.js"


const signUpRouter = express.Router()

signUpRouter.post("/sign-up",validateSignUp,createUser)

export default signUpRouter

