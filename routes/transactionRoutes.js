import express from "express"

import {deposit,withdraw,getTransactions} from "../controllers/TransactionsController.js"
import validateToken from "../middlewares/validateToken.js"
const transactionRouter = express.Router()

transactionRouter.get("/transactions", getTransactions)

transactionRouter.post("/transactions/deposit", deposit)

transactionRouter.post("/transactions/withdraw", withdraw)

export default transactionRouter