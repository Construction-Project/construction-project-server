const db = require('../models/index');

const Porject = db.project;
const City=db.city;
const Status=db.status; 
const Picture=db.picture

class ProjectDataAccessor {

  getProjectById = async (idProject)=>{
    const project= await Porject.findOne({
      where:{
        idProject        
      },
      include:[{model:City,as:"City", attributes:['city']}
        ,{model:Status,as:"Status", attributes:['status']}

        ,{model:Picture,as:"Project_pictures", attributes:['picturePath']}]
    })
    return project;
  }

    getProjectsByInitiatorId = async (initiatorId)=>{
        const projects= await Porject.findAll({
          where:{
            initiatorId//:initiatorId        
          },
          include:[{model:City,as:"City", attributes:['city']}
        ,{model:Status,as:"Status", attributes:['status']}

        ,{model:Picture,as:"Project_pictures", attributes:['picturePath']} //?
      
      ],
        })
        return projects;
      }
      
      updateProject = async(projectId,projectData)=>{
        console.log(projectData)
        const res=await Porject.update(projectData,{
            where:{
                idProject:projectId
            }
        })
        return res;
      }
  
      addProject = async(projectData)=>{
        console.log(projectData)
        const res=await Porject.create(projectData);
        return res; 
    }
}
  const projectDataAccessor=new ProjectDataAccessor(); 
  module.exports=projectDataAccessor;
