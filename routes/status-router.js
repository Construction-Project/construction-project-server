const express = require("express");
const statusRouter=express.Router();
const statusController = require("../controllers/status-controller")


statusRouter.route('/')
    .get(statusController.getAllStatuses)




module.exports = statusRouter;


