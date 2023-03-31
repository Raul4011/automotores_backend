const jwt = require("jsonwebtoken")

const TokenKey = "Raulin"

const verifyToken =(req,res,next) => {

    const authHeader = req.headers["authorization"]
    const token = authHeader && authHeader.split(' ')[1]
    //console.log("esto es el token con el SPLIT "+token)
    //console.log("esto es authHeader "+authHeader);
    if (token==null) {
        res.status(401).send("Token Requerido")
    }
    jwt.verify(token , TokenKey , (err,user)=>{
        //console.log("esto es USER "+user);
        if (err) return res.status(403).send("token invalido")
        req.user = user
        next()
    })
}

module.exports = {verifyToken}