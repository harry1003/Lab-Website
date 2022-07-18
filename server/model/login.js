const mongoose = require('mongoose')
const Schema = mongoose.Schema

const loginSchema = new Schema({
    username: {type: String, required: [true, "Require User Name"]},
    password: {type: String, required: [true, "Require Password"]}
})

const userInfo = mongoose.model('UserInfo', loginSchema)

module.exports = userInfo