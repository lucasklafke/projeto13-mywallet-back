import signUpSchema from "../Schemas/signUpSchema.js"

export async function validateSignUp(req,res,next){
    const validation = signUpSchema.validate(req.body)

    if(validation.error){
        return res.status(406).send("something went wrong, try again!")
    }
    next()
}
