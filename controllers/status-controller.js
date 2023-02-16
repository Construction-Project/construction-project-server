
const statusDal = require("../dal/status-memory-accessor");

class StatusController{
 // http://localhost:3600/status 
  getAllStatuses=async(req,res)=>{
        var status = await statusDal.getAllStatuses();
        if(!status?.length){
            return res.status(400).json({ message: 'No status found' })
          }

        res.send(status)
      // return res.status(200).json({data:status});
    };

    // getStatusIdByStatus=async(req,res)=>{
    //     var status = await statusDal.getStatusIdByStatus()
    // }



}



const statusController = new StatusController();
module.exports = statusController;