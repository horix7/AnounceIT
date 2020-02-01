
import account from '../models/userCreate'
import userData, { allUsers } from './userData';

const userInfo = {
    userSignUp(req, res) {
        if ( account == 'undefined') {
            return res.status(403).json({
                "status":"error",
                "error":"undefined account"
            });
        }
        else if (account.createUser(req.body) === 'invalid') {
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
            let newUSerInfo = account.createUser(req.body)
            return res.status(201).json({
                "status":"success",
                "data": userData.allUsers[userData.allUsers.length]
               });
        }
    },

    userSignIn(req, res) {
        let success;
        if (account.login(req.body) == 'password does not match' || account.login(req,res) == 'user email already exist') {
            return res.status(403).json({
                "status": "error",
                "error": "incorect inputs"
            })
        } else  {
            const loginInfo = account.login(req.body)
            return res.status(200).json({
                "status":"success",
                "data": loginInfo
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
        if (account.findId(req.body.id) !== 'no'){
            return res.status(200).json({
                "status": "success",
                "data": account.findId(req.body.id)
            })
        } else {
            return res.status(403).json({
                "status": "error",
                "error": "cant find the id"
            })
        }
        
    }
}

export default userInfo




