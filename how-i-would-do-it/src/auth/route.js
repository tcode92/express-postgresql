const express = require("express");
const loginHandler = require("./loginHandler");

const route = express.Router();

route.post("/login", loginHandler);
const authRoute = route;
module.exports = authRoute;
