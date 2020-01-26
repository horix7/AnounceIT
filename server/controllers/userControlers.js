
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
                    "id": account.createUser(req.body).data.id,
                    "first_name": account.createUser(req.body).data.firstName,
                    "last_name": account.createUser(req.body).data.lastName,
                    "email": account.createUser(req.body).data.email,
                    "address": account.createUser(req.body).data.address,
                    "phoneNumber": account.createUser(req.body).data.phoneNumber,
                    "is_admin": account.createUser(req.body).data.is_admin,
                    "password": account.createUser(req.body).data.password
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
        
    },
    getAllUsers(req, res) {
        return res.status(200).json({
            "status": "success",
            "data": account.findAllUsers()
        })
    },
    getOneUser(req, res) {
        return res.status(200).json({
            "status": "success",
            "data": account.findId(req.body.id)
        })
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

