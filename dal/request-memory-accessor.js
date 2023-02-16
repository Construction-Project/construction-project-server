const db = require('../models/index');
//const initiator = require('../models/initiator');
const Request = db.request
const Request_with_initiator=db.request_with_initiator

class RequestDataAccessor {

    //addRequestDetails = async(userId,name,email,phone,addressProject,comments,date,)=>{
    addRequestDetails = async(requestData)=>{
        //console.log('ddddd',requestData)
        var request=await Request.create(requestData);
        // console.log(typeof(JSON.parse(initiatorsArr)))

       

        return request;
    }


    addInitiatorsOfrequest=async(initiatorsArr)=>{
        //console.log(initiatorsArr);
        var requestInitiators=await Request_with_initiator.bulkCreate(initiatorsArr);
        ///console.log(requestInitiators);
        return requestInitiators
    }
//promise.all?


}




const requestDataAccessor=new RequestDataAccessor(); 
module.exports=requestDataAccessor;


