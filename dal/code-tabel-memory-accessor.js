const { where } = require('sequelize');
const db = require('../models/index');
const City = db.city

class CodeTableDataAccessor {

    getAllTableValues=async(tableName)=>{
        const values=await tableName.findAll({
            attributes:[`${tableName}`]
        }); 

        return values;
    }

    getCodeByName = async (tableName,name)=>{
        console.log(tableName);
        console.log(name);
           // var idCol=`${tableName}Id`
            const res = await tableName.findOne({
          //  attributes:[idCol],
            where:{
                tableName:name
            }
        })
       };

       getNameByCode = async (tableName,id)=>{
        const res = await tableName.findOne({
        attributes:[tableName],
        where:{
            id:id
        }
    })
   }
}
const codeTableDataAccessor=new CodeTableDataAccessor(); 
module.exports=codeTableDataAccessor;





