

const cityDal = require("../dal/city-memory-accessor");

class CityController{
    //http://localhost:3600/city   
     getAllCities=async(req,res)=>{
    
        const cities=await cityDal.getAllCities() ;
        //const cities=await fetch("https://data.gov.il/api/3/action/datastore_search")
        if(!cities?.length){
            return res.status(400).json({ message: 'No cities found' })
          }
        res.send(cities);
   
    }
}
const cityController = new CityController();
module.exports = cityController;



