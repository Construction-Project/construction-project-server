const db = require('../models/index');
const Status = db.status




class StatusDataAccessor {

  getAllStatuses=async()=>{
    const values=await Status.findAll({
      attributes:['status']
  }); 

  return values;
  }

    getStatusIdByStatus = async (status)=>{
        console.log(status)
        const res= await Status.findOne({
          where:{
            status:status        
          }
        })
        return res;
      }
      getCodeByName = async (name)=>{
        console.log(name);

        // var idCol=`${tableName}Id`
        var res = await Status.findOne({
       attributes:['statusId'],
         where:{
             status:name
         }
     })

     console.log("res",res);
     return res;
    };


}


const statusDataAccessor=new StatusDataAccessor(); 
module.exports=statusDataAccessor;


