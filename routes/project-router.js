const express = require("express");
const projectRouter=express.Router();
const projectController = require("../controllers/project-controller")


projectRouter.route('/')
    .post(projectController.addProject)
    

projectRouter.route('/:initiatorId')
    .get(projectController.getProjectsByInitiatorId)

projectRouter.route('/:projectId')
    .put(projectController.updateProject)

module.exports = projectRouter;
