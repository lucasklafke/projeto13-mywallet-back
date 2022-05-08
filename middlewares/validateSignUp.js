import signUpSchema from "../Schemas/signUpSchema.js"

export async function validateSignUp(req,res,next){
    const validation = signUpSchema.validate(req.body)

    if(validation.error){
        console.log(validation.error)
        return res.status(406).send(validation.error.message)
    }
    next()
}
