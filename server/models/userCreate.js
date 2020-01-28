import { hashSync } from 'bcryptjs';

import userData, { allUsers } from './userData';

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
                    email: newUser.email || '',
                    firstName: newUser.firstName || '',
                    lastName: newUser.lastName || '',
                    address: newUser.address || '',
                    phoneNumber: newUser.phoneNumber || '',
                    password: newUser.password || '',
                    is_admin: newUser.is_admin || ''
                };
                allUsers.push(inputData);
                return inputData;
            }
            else {
                // this.message = `this email ${newUser.email} is already registered`
                let res = 'invalid';
                return res;
            }
        };
        this.login = (userInput) => {
            const checkEmail = allUsers.find(info => info.email === userInput.email)

            if (checkEmail) {
                if ( info.password == userInput.password) {
                    return  true 
                } else {
                    return "your password does not match"
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

module.exports = new User()