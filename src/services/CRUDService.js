//var bcrypt = require('bcrypt'); or
import bcrypt from 'bcrypt';
import db from '../models/index';

const salt = bcrypt.genSaltSync(10);


let createNewUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPasswordFromBcrypt = await hashUserPassord(data.password);
            await db.User.create({
                firstName: data.firstName,
                lastName: data.firstName,
                email: data.email,
                address: data.address,
                password: hashPasswordFromBcrypt,
                phoneNumber: data.phoneNumber,
                gender: data.gender === '1' ? true : false,
                roleId: data.roleId
            });
            resolve('resolved created new user');
        }
        catch (e) {
            reject(e);
        }
    })
}

let hashUserPassord = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPassword = await bcrypt.hashSync(password, salt);
            resolve(hashPassword);
        }
        catch (e) {
            reject(e);
        }
    })
}
module.exports = {
    createNewUser: createNewUser
}