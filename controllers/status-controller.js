
const { nextTick } = require("process");
const statusDal = require("../dal/status-memory-accessor");

class StatusController{
 // http://localhost:3600/status 
  getAllStatuses=async(req,res)=>{
        var status = await statusDal.getAllStatuses();
        if(!status?.length){
            return res.status(400).json({ message: 'No status found' })
          }

        res.send(status)
    };
}



const statusController = new StatusController();
module.exports = statusController;