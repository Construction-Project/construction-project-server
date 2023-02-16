const express = require("express");
const initiatorRouter=express.Router();
const initiatorController = require("../controllers/initiator-controller")

initiatorRouter.route("/")
    .get(initiatorController.getAllInitiators)
    .post(initiatorController.addInitiator)

initiatorRouter.route("/:id")
    .get(initiatorController.getInitiatorById)
    .delete(initiatorController.deleteInitiator)
    .put(initiatorController.updateInitiator)



//initiatorRouter.route("/rating")
//    .post(initiatorController.initiatorRating)



module.exports = initiatorRouter;

