const db = require('../models/index');
const { Op } = require("sequelize");
const { json } = require('sequelize');
const Initiator = db.initiator
const User = db.user
const Opinion=db.opinion

class InitiatorDataAccessor {
    getAllInitiators = async ()=>{
      const initiators=await Initiator.findAll({
        include:[{model:Opinion,as:"opinion_initiator",attributes:['stars']
       }]
      })
      return initiators;
    };

    //,group:'opinionInitiator'
//,attributes:[[db.sequelize.fn("AVG",db.sequelize.col("stars")),'avg']],raw: true

  //   attributes:['opinionInitiator',[db.sequelize.fn("AVG",db.sequelize.col("stars")),'avg']],
  //   

  // })

    

    getInitiatorById = async (id)=>{
      // console.log(id)
      const res=await Initiator.findOne({
        where:{
          id:id        
        }
      })
      return res;
    }

    getInitiatorsEmailById = async (idArr)=>{
      const res= await User.findAll({
        attributes:['email'],
        where:{
          id: {
            [Op.or]: idArr
          }          
        }
      })
      //console.log(`res`)

      //console.log("in dal",res)
      return json(res);
    }



    addInitiator=async(initiatorData)=>{
      const initiator=Initiator.create(initiatorData);
      return initiator;
    }

    deleteInitiator=async(initiatorId)=>{
      await Initiator.destroy({
        where:{
          id:initiatorId
        }
      })
    }


    ///מה להחזיר?
    updateInitiator=async(initiatorId,initiatorData)=>{
      const initiator=await Initiator.update(initiatorData,{
        where:{id:initiatorId}})
        return initiator;
    };

    }

  const initiatorDataAccessor=new InitiatorDataAccessor(); 
  module.exports=initiatorDataAccessor;

  
