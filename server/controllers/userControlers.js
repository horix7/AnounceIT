
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
                    "is_admin": account.createUser(req.body).is_admin,
                    "password": account.createUser(req.body).password
                }
               });
        }
    },

    userSignIn(req, res) {
        let success;
        if (account.login(req.body) == 'password does not match' || account.login(req,res) == 'user email already exist') {
            console.log(infos)
            return res.status(403).json({
                "status": "error",
                "error": "incorect inputs"
            })
        } else  {
            console.log(account.login(req.body))
            return res.status(200).json({
                "status":"success",
                "data":{
                    "token": account.login(req.body).token,
                    "id": account.login(req.body).id,
                    "first_name":account.login(req.body).firstName,
                    "last_name": account.login(req.body).lastName,
                    "email":account.login(req.body).email,
                    "address":account.login(req.body).address,
                    "phoneNumber":account.login(req.body).phoneNumber,
                    "is_admin":account.login(req.body).is_admin
                }
            })
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