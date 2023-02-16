const { where } = require('sequelize');
const db = require('../models/index');
const City = db.city

class CityDataAccessor {

    getAllCities=async()=>{
        const values=await City.findAll({
            attributes:['city'],
            order: [["city"]],

        }); 

        return values;
    }

    getCodeByName = async (name)=>{

           // var idCol=`${tableName}Id`
            const res = await City.findOne({
          attributes:['idCity'],
            where:{
                city:name
            }
        })
        return res;
       };

       getNameByCode = async (code)=>{
        const res = await City.findOne({
        attributes:['city'],
        where:{
            idCity:code
        }
    })
   }
}
const cityDataAccessor=new CityDataAccessor(); 
module.exports=cityDataAccessor;


