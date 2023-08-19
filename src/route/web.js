// VIE nơi này sẽ chạy đầu tiên khi vào website
import express from "express";
import homeController from "../controllers/homeController";
let router = express.Router();

//app là một ứng dụng (server)
let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/about', homeController.getAboutPage);
    router.get('/hoiLTD', (req, res) => {
        return res.send('Hello world with LTD')
    });
    //rest api get post delete put(update)


    return app.use("/", router);
}

module.exports = initWebRoutes;