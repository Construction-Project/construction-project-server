const db = require('../models/index');
//const initiator = require('../models/initiator');
const Request = db.request
const Request_with_initiator=db.request_with_initiator

class RequestDataAccessor {

    addRequestDetails = async(requestData)=>{
        const request=await Request.create(requestData);
        return request;
    }


    addInitiatorsOfrequest=async(initiatorsArr)=>{
        var requestInitiators=await Request_with_initiator.bulkCreate(initiatorsArr);
        return requestInitiators
    }
//promise.all?


}




const requestDataAccessor=new RequestDataAccessor(); 
module.exports=requestDataAccessor;


