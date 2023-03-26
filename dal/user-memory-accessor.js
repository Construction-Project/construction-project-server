
const db = require('../models/index');
const { use } = require('../routes/initiator-router');

const User = db.user

class UserDataAccessor {
    getUserByUserName=async(userName)=>{
        const user=await User.findOne({
            where:
            {userName:userName}
            });
        return user;    

    }
    deleteUserById=async(id)=>{
        await User.destroy({
            where:{
              id:id
            }
          })
    }
}

const userDataAccessor=new UserDataAccessor(); 
module.exports=userDataAccessor;
