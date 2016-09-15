/**
 * Created by Mohammad on 9/9/2016.
 */
var fs = require('fs');
var express = require('express');
var bodyParser=require('body-parser');
var user = {
    mohammad: "183221015"
}

var server = express();
server.use(express.static(__dirname + "/static"));
server.use(bodyParser);
server.get("/login", function (req, res, next) {
    console.log("home");
    res.sendfile(__dirname + "/static/login.html");

});

server.post("/login", function (req, res, next) {
    if (req.body["username"] == user) {
        if (req.body["password"] == user.mohammad) {
            res.json({status: "true", msg: "login shodi !"});
        }
        else{
            res.json({status:"false",msg:"wrong password"});
        }
    }else {
        res.json({status:"false",msg:"user Not Found"});
    }

})
server.listen(8000);