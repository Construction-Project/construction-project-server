

const cityDal = require("../dal/city-memory-accessor");

class CityController{
    //http://localhost:3600/city   
     getAllCities=async(req,res)=>{
    
        const cities=await cityDal.getAllCities() ;
        // //"https://data.gov.il/api/3/action/datastore_search"
        // const cities_from_api=await fetch("https://data.gov.il/api/3/action/datastore_search?resource_id=d4901968-dad3-4845-a9b0-a57d027f11ab&limit=5")
        // const ci=await cities_from_api.json()
        // console.log(ci.result.records)
        // cities=ci.result.records.map(city=>city['שם_ישוב'])
        // console.log({cities});
        if(!cities?.length){
            return res.status(400).json({ message: 'No cities found' })
          }
        res.send(cities);
   
    }
}
const cityController = new CityController();
module.exports = cityController;



