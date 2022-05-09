import db from "../db.js"
import transactionsSchema from "../Schemas/transactionSchema.js"
export async function getTransactions(req,res){
    const email = res.locals.email
    console.log(email)
    try{
        const transactionsCollection = db.collection("transactions")
        const transactions = await transactionsCollection.find({email}).toArray()
        if (transactions){
            res.send(transactions)
        }
    }catch(error){
        res.status(500).send("something went wrong, try again!")
    }
}

export async function deposit(req,res){
    const {description, amount} = req.body
    const email = res.locals.email
    const validation = transactionsSchema.validate(req.body)

    const date = new Date()
    if (validation.error) {
        return res.status(422).send(validation.error.message)
    }
    try {
        const transactionsCollection = db.collection("transactions")
        const deposit = await transactionsCollection.insertOne({ email, amount, description, type:"deposit",date: date.toLocaleDateString()})
        if (deposit) {
            res.send("deposit made successfully!")
        }
    } catch (error) {
        console.log(error.message)
        res.status(500).send("something went wrong, try again!")
    }
}

export async function withdraw(req, res) {
    const { description, amount } = req.body
    const email = res.locals.email
    const validation = transactionsSchema.validate(req.body)

    const date = new Date()
    if(validation.error){
        return res.status(422).send(validation.error.message)
    }
    try {
        const transactionsCollection = db.collection("transactions")
        const withdraw = await transactionsCollection.insertOne({ email, amount, description, type: "withdraw", date: date.toLocaleDateString() })
        if (withdraw) {
            res.send("withdraw made successfully!")
        }
    } catch (error) {
        console.log(error.message)
        res.status(500).send("something went wrong, try again!")
    }
}