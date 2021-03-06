import db from "../db.js"
async function validateToken(req,res,next){
    const { authorization } = req.headers
    if(!authorization){
        return res.status(404).send("token not found") 
    }
    const token = authorization.replace("Bearer", "").trim()
    console.log("token",token)
    if (!token) {
        return res.status(404).send("token not found")
    }

    try{
        const sessions = db.collection("sessions")
        const session = await sessions.findOne({token})
        if(session){
            res.locals.email = session.email
            res.locals.token = token
        }
    }catch(e){
        res.send(e)
    }
    next()
}

export default validateToken