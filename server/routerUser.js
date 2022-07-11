const express = require("express");
const router = express.Router();

router.post("/login", async (req, res) => {
    // TODO: connect to db to get passwd
    console.log(req.body)
    var data;
    if(req.body.userName == "Admin" && req.body.password == "Admin"){
        data = {sussess: true, msg: "welcome", token: "need to add jwt token"}
    }
    else if(req.body.userName != "Admin"){
        data = {sussess: false, msg: "wrong user name", token: ""}
    }
    else{
        data = {sussess: false, msg: "wrong password", token: ""}
    }
    res.json(data)
})

module.exports = router;