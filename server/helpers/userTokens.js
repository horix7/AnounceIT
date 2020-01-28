
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

// let man = tokens.encode('amana')
// console.log(man)

let newMan = tokens.encode('man')

console.log(newMan)

let verifyToken = (req, res, next) => {
    const availableToken = localStorage.setItem('token', token)

    if (localStorage.token !== token) {
        res.sendStatus(403)
    } else {
        req.token = localStorage.token
        next();
    }
}

module.exports = tokens