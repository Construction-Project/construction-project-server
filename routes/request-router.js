const express = require("express");
const requestRouter=express.Router();
const requestController = require("../controllers/request-controller")
const verifyJWT=require("../middleware/verifyJWT");

requestRouter.route('/')
    .post(verifyJWT,requestController.addrequest)




module.exports = requestRouter;


