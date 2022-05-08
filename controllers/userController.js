import bcrypt from "bcrypt"
import {v4 as uuid} from "uuid"

import db from "./../db.js"

export async function loginUser(req,res){
    const {email, password} = req.body
    console.log(email)
    console.log(password)
    try{
       const users = db.collection("users")
       const user = await users.findOne({email})
       if(user && bcrypt.compareSync(password, user.encryptedPassword)){
           console.log("entrei")
            const token = uuid()
            
            const sessions = db.collection("sessions") 
            await sessions.insertOne({email, token, date: Date()})
            


            res.send(token)
       } else{
           res.send("Invalid user")
       }
    }catch(error){
        res.send(error)
        console.log("nao deu bom",error.message)
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