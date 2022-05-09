import joi from "joi"

const transactionsSchema = joi.object({
    amount: joi.number().required(),
    description: joi.string().max(30)
})

export default transactionsSchema