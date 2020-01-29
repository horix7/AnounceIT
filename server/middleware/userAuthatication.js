// import token from '../helpers/userTokens';

const checkToken = (req,res,next) => {
    const bearerHeader = req.headers['authorization']; 

    let bearerToken = bearerHeader.split(' ');
        if (typeof bearerHeader !== 'undefined') {
            token = bearerToken[1] 
            req.token = token
            next();
        }else {
                return res.status(403).json({
                    "status":"error",
                    "error":"you are not signed in "
                });
            }  
}

export default checkToken;

