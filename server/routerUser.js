const express = require("express");
const router = express.Router();

const mongoose = require('mongoose')
const userInfo = require('./model/login')

const mongoUrl = 'mongodb://127.0.0.1'
mongoose.connect(mongoUrl)

const db = mongoose.connection

db.on('error', error => {
    console.log(error)
})

router.post("/login", async (req, res) => {
    // TODO: connect to db to get passwd
    console.log(req.body)
    var data;

    let username = req.body.userName
    let password = req.body.password

    let user = userInfo.findOne({"username": username})
    .exec((err, doc) => {
        if(err) throw err
        if(doc === null) {
            data = {success: false, msg: "wrong user name", token: ""}
        }
        else if(password !== doc.password){
            data = {success: false, msg: "wrong password", token: ""}
        }
        else {
            data = {success: true, msg: "welcome", token: "need to add jwt token"}
        }
        console.log(data)
    })

    // if(req.body.userName == "Admin" && req.body.password == "Admin"){
    //     data = {sussess: true, msg: "welcome", token: "need to add jwt token"}
    // }
    // else if(req.body.userName != "Admin"){
    //     data = {sussess: false, msg: "wrong user name", token: ""}
    // }
    // else{
    //     data = {sussess: false, msg: "wrong password", token: ""}
    // }
    res.json(data)
})

module.exports = router;