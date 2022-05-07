function validateToken(req,res,next){
    const { authorization } = req.header
    if(!authorization){
        return res.status(404).send("token not found") 
    }
    const token = authorization.replace("bearer", "").trim()
    console.log(token)
    if (!token) {
        return res.status(404).send("token not found")
    }
    next()
}

export default validateToken