import joi from "joi"

const transactionsSchema = joi.object({
    email: joi.string().required(),
    token: joi.required(),
    amount: joi.number().required()
})

export default transactionsSchema