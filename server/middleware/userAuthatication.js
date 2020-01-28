import token from '../helpers/userTokens';

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


