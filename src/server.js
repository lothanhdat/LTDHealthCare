import express from "express";
import bodyParser from "body-parser"; // querry param
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web"

// other way : require('dotenv').config();
import dotenv from "dotenv";
dotenv.config();

let app = express();

//config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
viewEngine(app);
initWebRoutes(app);

// if port === undefined => port = 6868
let port = process.env.PORT || 6868;

app.listen(port, () => {
    // callback function
    console.log("Backend NodeJs is running on the port:" + port)
});