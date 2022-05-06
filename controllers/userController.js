import joi from "joi"
import bcrypt from "bcrypt"
import {v4 as uuid} from "uuid"

import db from "./../db.js"
import loginSchema from "./../Schemas/loginSchema.js" 

export async function postUser(req,res){
    const {email, password} = req.body

    const validation = loginSchema.validate({email,password})

    if(!validation){
        res.status(500).send("Invalid  login, try again!")
    }
    try{
       const users = db.collection("users")
       const user = await users.findOne({email})

       if(user && bcrypt.compareSync(password, user.password)){
            const token = uuid()
            
            const sessions = db.collection("sessions") 
            await sessions.insertOne({email,token})
            
            res.send(token)
       } else{
           res.send("Invalid user")
       }
    }catch(error){
        res.send(error)
        console.log("nao deu bom")
    }
}





export async function getUser(req, res) {
    console.log(req.body.name)
    try {
        const users = db.collection("users")
        const array = await users.find({}).toArray()
        console.log(array)
        res.send(array)
    } catch (error) {
        res.send(error)
        console.log("nao deu bom")
    }
}