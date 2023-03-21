const db = require('../models/index')

const User = db.user


class AuthDataAccessor {

    login = async (userName) => {
        const user=User.findOne({where:{userName:userName}})
            return user; 

    }

     register = async (userObject) => {
        const user = await User.create(userObject);
        return user;
    
    }

    //
    getUserByUserName=async(userName)=>{
        const user=await User.findOne({
            where:
            {userName:userName}
            });
        return user;    

    }


};
  



  const authDataAccessor=new AuthDataAccessor(); 
  module.exports=authDataAccessor;


