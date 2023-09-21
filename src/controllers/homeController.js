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
module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displayGetCRUD: displayGetCRUD
}
