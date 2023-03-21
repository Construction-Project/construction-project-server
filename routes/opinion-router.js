const express = require("express");
const opinionRouter=express.Router();
const opinionController = require("../controllers/opinion-controller");
const verifyJWT=require("../middleware/verifyJWT");

opinionRouter.route("/")
    .get(opinionController.getAllOpinions)
    .post(verifyJWT,opinionController.addOpinion)

opinionRouter.route("/:initiatorId")
    .get(opinionController.getOpinionByInitiatorId)

//opinionRouter.route("/star")
//    .get(opinionController.getAverageOpinionsStarsOfAllInitiators)


module.exports = opinionRouter;


