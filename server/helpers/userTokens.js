
const jwt = require('jsonwebtoken');

const tokens = {
    encode(payload) {
        const token = jwt.sign(payload, 'secretKey')
        return token 
    },
    decode(token) {
        const response = jwt.verify(token, 'secretKey')
        return response
    }
}


const checkToken =(req,res,next)=>{
    const bearerHeader =req.get("token");

    if (typeof bearerHeader == 'undefined') {
        return res.status(403).json({
            "status":"error",
            "error":"you are not signed in "
        });
    } else {
    let decoded=tokenHelper.decode(bearerHeader);
    req.tokenId=decoded.id
    req.tokenEmail=decoded.email
    req.tokenType=decoded.is_admin
    next();
    }
}

// let man = tokens.encode('amana')
// console.log(man)

// let newMan = tokens.decode(man)

// console.log(newMan)

// let verifyToken = (req, res, next) => {
//     const bearerHeader = req.headers['authorization'];

//     if (typeof bearerHeader == 'undefined') {
//         res.sendStatus(403)
//     } else {
//         const tok =  bearerHeader.split(' ')
//         const bearerToken = tok[1]
//         req.token = bearerToken
//         next();
//     }
// }

module.exports = {tokens,  checkToken}