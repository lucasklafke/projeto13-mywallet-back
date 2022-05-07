import joi from "joi"

const signUpSchema = joi.object({
    name: joi.string().required().min(3),
    email: joi.string().required().email(),
    password: joi.string().required().min(8),
    repeat_password: joi.ref('password')
}).with("password", "repeat_password")

export default signUpSchema