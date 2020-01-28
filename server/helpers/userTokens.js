
import { sign, verify } from 'jsonwebtoken';

const tokens = {
    encode(payload) {
        const token = sign(payload, 'secretKey')
        return token 
    },
    decode(token) {
        const response = verify(token, 'secretKey')
        return response
    }
}



let verifyToken = (req, res, next) => {
    const availableToken = localStorage.setItem('token', token)


    if (localStorage.token !== token) {
        res.sendStatus(403)
    } else {
        req.token = localStorage.token
        next();
    }
}

export default tokens

