import { json } from 'body-parser';
import db from '../models/index';
import CRUDService from '../services/CRUDService';

let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        //test data by log
        // console.log('----------------------------');
        // console.log(data);
        // console.log('----------------------------');
        return res.render('homepage.ejs', { data: JSON.stringify(data) });
    }
    catch (error) {
        console.log(error)
    }
};
let getAboutPage = (req, res) => {
    return res.render('test/about.ejs');
};
let getCRUD = (req, res) => {
    return res.render('test/crud.ejs');
};
let postCRUD = async (req, res) => {
    let message = await CRUDService.createNewUser(req.body);
    console.log(message);
    return res.send('post crud from server');
}
let displayGetCRUD = async (req, res) => {
    let data = await CRUDService.getAllUser();
    console.log('-----------------------');
    console.log(data);
    console.log('-----------------------');
    return res.render('test/displayCRUD.ejs', {
        dataTable: data,
    });
}

let editCRUD = async (req, res) => {
    let userId = req.query.id;
    if (userId) {
        let userData = await CRUDService.getUserInfoById(userId);
        return res.render('editCRUD.ejs', {
            user: userData
        });
    }
    else {
        return res.send('nothing to edit');
    }
}

let putCRUD = async (req, res) => {
    let data = req.body;
    let allUsers = await CRUDService.updateUserData(data);
    return res.render('test/displayCRUD.ejs', {
        dataTable: allUsers,
    });
}

let deleteCRUD = async (req, res) => {
    let userId = req.query.id;
    let allUsers = await CRUDService.deleteUserById(userId);
    if (userId) {
        return res.render('test/displayCRUD.ejs', {
            dataTable: allUsers,
        });
    }
    else {
        return res.send('nothing to delete');
    }
}
module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displayGetCRUD: displayGetCRUD,
    editCRUD: editCRUD,
    putCRUD: putCRUD,
    deleteCRUD: deleteCRUD
}
