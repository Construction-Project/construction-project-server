const express = require("express");
const mapRouter=express.Router();
const {placeAutocomplete} = require("../controllers/map-controller");

mapRouter.route("/")
    .post(placeAutocomplete)

module.exports = mapRouter;


