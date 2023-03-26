const express = require("express");
const projectRouter=express.Router();
const projectController = require("../controllers/project-controller")
const veriryInitiator=require('../middleware/verifyInitiator')
const verifyJWT=require('../middleware/verifyJWT')

projectRouter.route('/')
    .post([verifyJWT,veriryInitiator],projectController.addProject)
    

projectRouter.route('/:initiatorId')
    .get(projectController.getProjectsByInitiatorId)

projectRouter.route('/:projectId')
    .put([verifyJWT,veriryInitiator],projectController.updateProject)

module.exports = projectRouter;
