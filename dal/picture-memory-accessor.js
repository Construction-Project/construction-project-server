const db = require('../models/index');
const picture = require('../models/picture');
const Picture = db.picture



class PictureDataAccessor {

    getPicturesByProjectId=async(id)=>{

        const pictures= Picture.findAll({
            where:{projectId:id}
        }); 

        return pictures;
    }



}



const pictureDataAccessor=new PictureDataAccessor(); 
module.exports=pictureDataAccessor;

