const express = require("express");
const initiatorRouter=express.Router();
const initiatorController = require("../controllers/initiator-controller")
const veriryInitiator=require('../middleware/verifyInitiator')
const verifyJWT=require('../middleware/verifyJWT')

initiatorRouter.route("/")
    .get(initiatorController.getAllInitiators)
    .post(initiatorController.addInitiator)

initiatorRouter.route("/:id")
    .get(initiatorController.getInitiatorById)
    .delete([verifyJWT,veriryInitiator],initiatorController.deleteInitiator)
    .put([verifyJWT,veriryInitiator],initiatorController.updateInitiator)

module.exports = initiatorRouter;

