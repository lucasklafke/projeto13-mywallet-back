import db from "../db.js"
import transactionsSchema from "../Schemas/transactionSchema.js"
export async function getTransactions(req,res){
    const {email} = req.body
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
    const {email, amount} = req.body
    const validation = transactionsSchema.validate(req.body)
    if (validation.error) {
        return res.status(422).send("request not valid!")
    }
    try {
        const transactionsCollection = db.collection("transactions")
        const deposit = await transactionsCollection.insertOne({ email, amount, type:"deposit"})
        if (deposit) {
            res.send("deposit made successfully!")
        }
    } catch (error) {
        console.log(error.message)
        res.status(500).send("something went wrong, try again!")
    }
}

export async function withdraw(req, res) {
    const { email, amount } = req.body
    const validation = transactionsSchema.validate(req.body)

    if(validation.error){
        return res.status(422).send("request not valid!")
    }
    try {
        const transactionsCollection = db.collection("transactions")
        const withdraw = await transactionsCollection.insertOne({ email, amount, type:"withdraw" })
        if (withdraw) {
            res.send("withdraw made successfully!")
        }
    } catch (error) {
        res.status(500).send("something went wrong, try again!")
    }
}