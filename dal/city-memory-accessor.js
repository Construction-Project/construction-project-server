const { where } = require('sequelize');
const db = require('../models/index');
const City = db.city

class CityDataAccessor {

    getAllCities=async()=>{
        const cities=await City.findAll({
            attributes:['city'],
            order: [["city"]],

        }); 

        return cities;
    }

    getCodeByName = async (name)=>{

            const city = await City.findOne({
          attributes:['idCity'],
            where:{
                city:name
            }
        })
        return city;
       };

       getNameByCode = async (code)=>{
        const codeCity = await City.findOne({
        attributes:['city'],
        where:{
            idCity:code
        }
    })
    return codeCity; 
   } 
}
const cityDataAccessor=new CityDataAccessor(); 
module.exports=cityDataAccessor;


