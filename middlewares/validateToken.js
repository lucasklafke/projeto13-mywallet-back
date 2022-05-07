function validateToken(req,res,next){
    const { authorization } = req.header
    const token = authorization.replace("bearer", "").trim()
    res.locals.token = token 
    console.log(token)
    if (!token) {
        return res.status(404).send("token not found")
    }
    next()
}