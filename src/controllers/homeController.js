import { json } from 'body-parser';
import db from '../models/index'
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
let postCRUD = (req, res) => {
    console.log(req.body);
    return res.send('post crud from server');
}
module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
}
