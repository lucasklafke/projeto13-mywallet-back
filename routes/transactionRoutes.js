import express from "express"

import {deposit,withdraw,getTransactions} from "../controllers/TransactionsController.js"
import validateToken from "../middlewares/validateToken.js"
const transactionRouter = express.Router()

transactionRouter.get("/transactions",validateToken, getTransactions)

transactionRouter.post("/transaction/deposit",validateToken, deposit)

transactionRouter.post("/transaction/withdraw", validateToken, withdraw)

export default transactionRouter