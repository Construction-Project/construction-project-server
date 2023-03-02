const express = require("express");
const projectRouter=express.Router();
const projectController = require("../controllers/project-controller")
const veriryAdmin=require('../middleware/verifyAdmin')
const verifyJWT=require('../middleware/verifyJWT')

projectRouter.route('/')
    .post([verifyJWT,veriryAdmin],projectController.addProject)
    

projectRouter.route('/:initiatorId')
    .get(projectController.getProjectsByInitiatorId)

projectRouter.route('/:projectId')
    .put(projectController.updateProject)

module.exports = projectRouter;
