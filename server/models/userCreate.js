import { hashSync } from 'bcryptjs';

import userData, { allUsers } from './userData';

import { encode, decode } from '../helpers/userTokens';

class User {
    constructor() {
        this.message;
        this.findId = (id) => {
            let foundId = allUsers.find(userId => userId.id === id);
            return foundId;
        };
        this.createUser = (newUser) => {
            const usedEmail = userData.allUsers.find(userEmail => userEmail.email === newUser.email);
            if (usedEmail) {
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
                const token = encode(newUser.email)
                localStorage.setItem('token', token)
                return {
                    data: inputData,
                    token: token
                }
            }
            else {
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
                if (infos.password == userInput.password) {
                    return infos
                } else {
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

export default new User()

