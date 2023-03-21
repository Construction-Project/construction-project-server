const db = require('../models/index');
const picture = require('../models/picture');
const Picture = db.picture



class PictureDataAccessor {

    getPicturesByProjectId = async (id) => {

        const pictures = Picture.findAll({
            where: { projectId: id }
        });

        return pictures;
    }

    addProjectPictures = async (projectId, picturePath) => {
        console.log('addProjectPictures');
        const picture = await Picture.create({projectId, picturePath}  );
        return picture
    };
}

const pictureDataAccessor = new PictureDataAccessor();
module.exports = pictureDataAccessor;

