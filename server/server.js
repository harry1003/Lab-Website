const API_PORT = 3001;

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const user = require("./routerUser");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/user", user);
app.listen(API_PORT, () => console.log(`SERVER LISTENING ON PORT ${API_PORT}`));