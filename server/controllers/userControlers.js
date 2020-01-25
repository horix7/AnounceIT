
const account = require('../models/userCreate')

const userInfo = {
    userSignUp(req, res) {
        if ( account == 'undefined') {
            return res.status(403).json({
                "status":"error",
                "error":"undefined mfck"
            });
        }
        else if (account.createUser(req.body) == 'invalid') {
            console.log(req.body)
            return res.status(403).json({
                "status":"error",
                "error":"you provided invalid information"
            });
        }
        else if (req.body == {}) {
            return res.status(403).json({
                "status":"error",
                "error":"you provided invalid information"
            }); 
          
        } else {
            return res.status(201).json({
                "status":"success",
                "data":{
                    "token": account.createUser(req.body).token,
                    "id": account.createUser(req.body).id,
                    "first_name": account.createUser(req.body).firstName,
                    "last_name": account.createUser(req.body).lastName,
                    "email": account.createUser(req.body).email,
                    "address": account.createUser(req.body).address,
                    "phoneNumber": account.createUser(req.body).phoneNumber,
                    "is_admin": account.createUser(req.body).is_admin
                }
               });
        }
    }
}
console.log(typeof(account.createUser))
// console.log(account.createUser({}))

export default userInfo

// {
//     token: 'man',
//     id: 12,
//     firstName: 'paul',
//     lastName: 'peter',
//     email: 'email',
//     address: 'address',
//     phoneNumber: 'phone number',
//     is_admin: 'is admin'
// }