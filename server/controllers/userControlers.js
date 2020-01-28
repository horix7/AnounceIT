
import account from '../models/userCreate'

const userInfo = {
    userSignUp(req, res) {
        if ( account == 'undefined') {
            return res.status(403).json({
                "status":"error",
                "error":"undefined account"
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
            const { id, firstName, lastName, email, address, phoneNumber, password } = account.createUser(req.body).data
            const { token } = account.createUser(req.body)
            return res.status(201).json({
                "status":"success",
                "data":{
                    "token": token,
                    "id":id,
                    "first_name": firstName,
                    "last_name": lastName,
                    "email": email,
                    "address": address,
                    "phoneNumber": phoneNumber,
                    "is_admin": is_admin,
                    "password": password
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
            const { token, id, firstName, lastName, email, phoneNumber, address, is_admin } = account.login(req.body)
            return res.status(200).json({
                "status":"success",
                "data":{
                    "token": token,
                    "id": id,
                    "first_name":firstName,
                    "last_name": lastName,
                    "email": email,
                    "address": address,
                    "phoneNumber": phoneNumber,
                    "is_admin": is_admin
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

export default userInfo


