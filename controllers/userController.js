import joi from "joi"

import db from "./../db.js"
import loginSchema from "./../Schemas/loginSchema" 

export async function postUser(req,res){
    const {email, password} = req.body

    const validation = loginSchema.validate({email,password})

    if(!validation){
        res.status(500).send("Invalid  login, try again!")
    }
    try{
       
    }catch(error){
        res.send(error)
        console.log("nao deu bom")
    }
}





export async function getUser(req, res) {
    console.log(req.body.name)
    try {
        const users = await db.collection("users")
        const array = await users.find({}).toArray()
        console.log(array)
        res.send(array)
    } catch (error) {
        res.send(error)
        console.log("nao deu bom")
    }
}