const db = require('../models/index');
const { Op } = require("sequelize");
const { json } = require('sequelize');
const {sequelize} = require('../models/sequelize');

const Initiator = db.initiator
const User = db.user
const Opinion=db.opinion
const Project=db.project

class InitiatorDataAccessor {
    getAllInitiators = async ()=>{
      const initiators=await Initiator.findAll({      
        group: ['Initiator.id'] ,

       //

        include:[//{model:Opinion,as:"opinion_initiator",attributes:['stars']},
        {model:Project,as:"initiatorProject",required: false,attributes:[]
      },
],
      attributes:['id',[sequelize.fn('COUNT','initiatorProject.idProject'),'numOfProject']]
      
      })
      return initiators;
    };
//sequelize.col('Initiator.initiatorProject')


    // await PostModel.findAll({
    //   group: ['posts.id'],
    //   order: [['createdAt', 'DESC']],
    //   include: [
    //     {
    //       model: CategoryModel,
    //       attributes: ['title'],
    //       where: { title: categoryTitle }
    //     },
    //     { model: CommentModel },
    //     { model: UserModel, attributes: ['fullname', 'id'] }
    //   ],
    //   attributes: [
    //     'title', 'content', 'description', 'thumbnail', 'baner', 'createdAt', 'updatedAt',
    //     [Sequelize.fn('COUNT', 'comment.id'), 'commentsCounter']
    //   ]
    // });
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
    search = async(pinuiBinuy,tama38)=>{
      const initiators=await Initiator.findAll({
        where:{
          [Op.or]:{pinuiBinuy:pinuiBinuy, tama38:tama38}
        }

      })
      return initiators;
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

  
