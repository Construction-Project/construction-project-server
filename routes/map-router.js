const express = require("express");
const mapRouter=express.Router();
const {placeAutocomplete,geocodeAddress} = require("../controllers/map-controller");

mapRouter.route("/autoComplete")
    .post(placeAutocomplete)

mapRouter.route("/address")
    .post(geocodeAddress)


    
module.exports = mapRouter;


