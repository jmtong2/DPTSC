var express = require("express");

var router = express.Router();

router.get("/", function(req,res){
    console.log("start page");
    res.sendFile("C:/Users/User/Documents/SCHOOL/DPTSC/views/login.html");
});

module.exports = router;
