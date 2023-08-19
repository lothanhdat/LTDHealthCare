// writing function in ES6
// var used in global, let used in this file only (recommend)
// using arrow function

import express from "express";
// in es5: var express = require('express')


let configViewEngine = (app) => {
    // VIE nếu dùng nodejs (hoặc server và client đều dùng nodejs) thì phải public đường link như dưới
    app.use(express.static("./src/public"));
    app.set("view engine", "ejs"); // VIE tương tự jsp trong java và blade của php -> giúp dùng hàm logic if for trong html
    app.set("views", "./src/views")
}

// export for other js file can use this function
module.exports = configViewEngine;