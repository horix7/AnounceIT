import { hashSync } from 'bcryptjs';

import userData, { allUsers } from './userData';

import tokens from '../helpers/userTokens';

class User {
    constructor() {
        this.message;
        this.findId = (id) => {
            let foundId = userData.allUsers.find(userId => userId.id === id);
           let findIdB = foundId !== 'undefined'

           if(findIdB) {
               return foundId
           } else {
               return 'no'
           }
        };
        this.createUser = (newUser) => {
            const usedEmail = userData.allUsers.find(userEmail => userEmail.email === newUser.email);
            const checked = usedEmail !== 'undefined'
            if (checked) {
                const inputData = {
                    "id": userData.allUsers.length + 1,
                    "token": tokens.encode(newUser.email),
                    "email": newUser.email,
                    "first_name": newUser.firstName,
                    "last_name": newUser.lastName,
                    "address": newUser.address,
                    "phoneNumber": newUser.phoneNumber,
                    "password": newUser.password,
                    "is_admin": newUser.is_admin
                };
                userData.allUsers.push(inputData); 

                return inputData
               
            }
            else {
                let res = 'invalid';
                return res;
            }
        };

        this.login = (userInput) => {
            let resUser = userData.allUsers.find( user => user.email == userInput.email)

            if(resUser) {
                return resUser
            } else {
                return 'password does not match'
            }
        }
           

        this.findAllUsers = () => {
            return userData.allUsers;
        };
    }
}

export default new User()
