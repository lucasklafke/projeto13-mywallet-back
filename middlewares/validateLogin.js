import loginSchema from "./../Schemas/loginSchema.js" 
import joi from "joi"

export default async function validateLogin(req,res,next){
    const validation = loginSchema.validate(req.body)
    
    if (validation.error) {
       return  res.status(500).send("Invalid  login, try again!")
    }
    next()
}