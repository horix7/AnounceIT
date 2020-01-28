import { hashSync } from 'bcryptjs';

import userData, { allUsers } from './userData';

const tokenMaker = require('../helpers/userTokens');

class User {
    constructor() {
        this.message;
        this.findId = (id) => {
            let foundId = allUsers.find(userId => userId.id === id);
            return foundId;
        };
        this.createUser = (newUser) => {
            // if (typeof(newUser) == "object")
            const usedEmail = userData.allUsers.find(userEmail => userEmail.email === newUser.email);
            if (usedEmail !== 'undefined') {
                let inputData = {
                    id: allUsers.length + 1,
                    email: newUser.email,
                    firstName: newUser.firstName,
                    lastName: newUser.lastName,
                    address: newUser.address,
                    phoneNumber: newUser.phoneNumber,
                    password: newUser.password,
                    is_admin: newUser.is_admin
                };
                userData.allUsers.push(inputData);
                const token = tokenMaker.encode(newUser.email)
                localStorage.setItem('token', token)
                return {
                    data: inputData,
                    token: token
                }
            }
            else {
                // this.message = `this email ${newUser.email} is already registered`
                let res = 'invalid';
                return res;
            }
        };

        this.login = (userInput) => {
            let checker1;
            let infos;
            allUsers.forEach( info => {
                if (info.email == userInput.email) {
                    checker1 = true
                    infos = info
                }
            })

            if (checker1) {
                // let checker2;
                if (infos.password == userInput.password) {
                    return infos
                } else {
                    console.log(allUsers)
                    console.log(infos)
                   return 'password does not match'
                }
            } else {
                return 'user email already exist'
            }
        };

        this.findAllUsers = () => {
            return allUsers;
        };
    }
}

console.log(userData)
console.log(allUsers)

module.exports = new User()