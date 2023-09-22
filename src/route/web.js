// VIE nơi này sẽ chạy đầu tiên khi vào website
import express from "express";
import homeController from "../controllers/homeController";
let router = express.Router();

//app là một ứng dụng (server)
let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/about', homeController.getAboutPage);
    router.get('/crud', homeController.getCRUD);
    router.post('/post-crud', homeController.postCRUD);
    router.get('/get-crud', homeController.displayGetCRUD);
    router.get('/edit-crud', homeController.editCRUD);
    router.post('/put-crud', homeController.putCRUD);
    router.get('/delete-crud', homeController.deleteCRUD);
    // router.get('/post-crud', (req, res) => {
    //     return res.send('post crud successful')
    // });
    router.get('/hoiLTD', (req, res) => {
        return res.send('Hello world with LTD')
    });
    //rest api get post delete put(update)

    return app.use("/", router);
}

module.exports = initWebRoutes;