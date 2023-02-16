const express = require("express");
const cityRouter=express.Router();
const cityController = require("../controllers/city-controller")


cityRouter.route('/')
    .get(cityController.getAllCities)




module.exports = cityRouter;


