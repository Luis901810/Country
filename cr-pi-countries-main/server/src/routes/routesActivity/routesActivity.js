const routerActivity = require('express').Router();

const getActivityCreate = require("../../controllers/controllersActivity/controllerCreateActivity");
const getAtivityAll = require("../../controllers/controllersActivity/controllerAllActivity")

routerActivity.post("/create", getActivityCreate)
routerActivity.get("/", getAtivityAll)

module.exports = routerActivity;