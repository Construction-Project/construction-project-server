const db = require('../models/index');
const opinion = require('../models/opinion');
const Opinion = db.opinion

class OpinionDataAccessor {
//?
    getAllOpinions=async()=>{
        const res=await Opinion.findAll();
        console.log(res);
        return res;
    }
    
    getOpinionByInitiatorId=async(initiatorId)=>{
        const res=await Opinion.findAll({
            where:{
                opinionInitiator:initiatorId        
              }
        })
        return res; 
    }
    getAverageOpinionsStarsOfAllInitiators=async()=>{
        const res= await Opinion.findAll({
            attributes:['opinionInitiator',[db.sequelize.fn("AVG",db.sequelize.col("stars")),'avg']],
            raw: true,
            group:'opinionInitiator'

        })
        return res; 
    }

    getOpinionByInitiatorIdAndUserId=async(opinionInitiator,opinionUser)=>{
        const opinion =await Opinion.findOne({
            where:{
                opinionInitiator,opinionUser
            }
        })

        return opinion; 
    }
    

    addOpinion=async(opinionData)=>{
        const opinion = await Opinion.create(opinionData); 
        return opinion; 
    }
}


const opinionDataAccessor=new OpinionDataAccessor(); 
module.exports=opinionDataAccessor;

