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

    addProjectPictures = async (picturesArrWithProjectId) => {
        console.log('addProjectPictures');

        const picture = await Picture.bulkCreate(picturesArrWithProjectId);
        return picture
    };
}

const pictureDataAccessor = new PictureDataAccessor();
module.exports = pictureDataAccessor;

