import db from "../db.js"
import bcrypt from "bcrypt"
export  async function createUser(req,res){
    const {name, email, password} = req.body

    try{
        const users = db.collection("users")
        const user = await users.findOne({email})
        const nameAlreadyExist = await users.findOne({name})

        if(user){
            res.status(409).send("email already registered!")
            return
        }
        if (nameAlreadyExist){
            res.status(409).send("name already registered!")
            return
        }
        const encryptedPassword = bcrypt.hashSync(password,10)
        const insert = await users.insertOne({
            name,
            email,
            encryptedPassword
        })
        console.log(insert)
        res.send("user created")
    }catch(e){
        res.send(e)
    }
}