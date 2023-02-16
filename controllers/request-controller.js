
const requestDal = require("../dal/request-memory-accessor");
const Request = require("../models/request");
const sendEmail=require('../email')
const initiatorDal=require("../dal/initiator-memory-accessor");


class RequestController{
    //static requestNum=1
    addrequest = async(req,res)=>{
        //console.log(requestController.requestNum)

        //console.log('here addrequest')
        var {userId,name,email,phone,addressProject,comments,initiatorsArr}=req.body

        const date=new Date()
        const request= await requestDal.addRequestDetails({userId,name,email,phone,addressProject,comments,date});
        // console.log(initiatorsArr);
        initiatorsArr=JSON.parse(initiatorsArr);
        //console.log(initiatorsArr);

        // console.log(request.requestId)
        const requestId=request.toJSON().requestId
        //console.log(requestId);
        const initiatorObjectsArr=initiatorsArr.map(initiator=> {return {'initiatorId':initiator, 'requestId':requestId}});
         //console.log(initiatorObjectsArr);
         const requestInitiators=await requestDal.addInitiatorsOfrequest(initiatorObjectsArr)
        sendEmailToInitiators(requestId,initiatorsArr,name,email,phone,addressProject,comments);
        //var {requestDetails}=name,email,phone,addressProject,comments
        res.send(requestInitiators); 

        //what do we have to return? , do we need promise.all 


    }


}

var sendEmailToInitiators=async(requestId,initiatorsArr,name,email,phone,addressProject,comments)=>{
    
     //var initiatorsEmails=initiatorsArr.map(async(initiator)=> {return await initiatorDal.getInitiatorEmailById(initiator)})
     var initiatorsEmails = await initiatorDal.getInitiatorsEmailById(initiatorsArr);
   // console.log('fffffgdfgd',initiatorsEmails);
     initiatorsEmails=initiatorsEmails.conditions.map(initiator=>initiator.toJSON().email)
     //console.log(initiatorsEmails);

     //const i=initiatorsEmails.toJSON();
     //console.log('her');
     //console.log('fffff',i)
    console.log(name);
   // console.log("!!!",initiatorsEmails);///////////////////////////////////////////
     sendEmail(requestId,initiatorsEmails,name,email,phone,addressProject,comments);

}
const requestController = new RequestController();
module.exports = requestController;











// }