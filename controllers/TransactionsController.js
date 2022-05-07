import db from "../db.js"
function getTransactions(req,res){
    const token = res.locals.token
    try{
        const transactionsCollection = db.collection("transactions")
        const transactions = await transactionsCollection.find({token}).toArray()
        if (transactions){
            res.send(transactions)
        }
    }catch(error){
        res.status(500).send("something went wrong, try again!")
    }
}

