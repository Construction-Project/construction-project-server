
const cityDal = require("../dal/city-memory-accessor");



class CityController{
    //http://localhost:3600/city   
     getAllCities=async(req,res)=>{
        const cities=await cityDal.getAllCities() ;
        if(!cities?.length){
            return res.status(400).json({ message: 'No cities found' })
          }

        res.send(cities)
    }
}
const cityController = new CityController();
module.exports = cityController;



