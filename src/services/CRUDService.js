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

let getAllUser = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = db.User.findAll({
                raw: true,
            });
            resolve(users);
        }
        catch (e) {
            reject(e);
        }
    })
}

let getUserInfoById = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: userId },
                raw: true
            })
            if (user) {
                resolve(user);
            }
            else {
                resolve({});
            }
        }
        catch (e) {
            reject(e);
        }
    })
}

let updateUserData = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: data.id }
            })
            if (user) {
                user.email = data.email;
                user.firstName = data.firstName;
                user.lastName = data.lastName;
                user.Address = data.Address;
                user.phoneNumber = data.phoneNumber;
                await user.save();
                let allUsers = await db.User.findAll();
                resolve(allUsers);

            } else {
                resolve();
            }
        }
        catch (e) {
            reject(e);
        }
    })
}

let deleteUserById = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: userId }
            })
            if (user) {
                await user.destroy();
                let allUsers = await db.User.findAll();
                resolve(allUsers);
            } else {
                resolve();
            }
        }
        catch (e) {
            reject(e);
        }
    })
}

module.exports = {
    createNewUser: createNewUser,
    getAllUser: getAllUser,
    getUserInfoById: getUserInfoById,
    updateUserData: updateUserData,
    deleteUserById: deleteUserById,
}