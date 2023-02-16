const {sequelize} = require("./sequelize")

const applyExtraSetUp=()=>{
    const {initiator,project,city,status,picture,user,request,request_with_initiator,opinion} = sequelize.models
    // project.belongsTo(initiator, { foreignKey: "initiatorProject", as: "initiator"});
    project.belongsTo(city,{ foreignKey: "city", as: "City"}); 
    project.belongsTo(status,{foreignKey:"status",as:"Status"});
    project.belongsTo(initiator,{foreignKey:"initiatorId",as:"projectInitiator"});
    picture.belongsTo(project,{foreignKey: "projectId", as:"Project"});

    opinion.belongsTo(user,{foreignKey:"opinionUser",as:"user"})
    opinion.belongsTo(initiator,{foreignKey:"opinionInitiator",as:"opinion_initiator"})
    //

    //--
    initiator.hasMany(opinion,{foreignKey:"opinionInitiator",as:"opinion_initiator"})
    initiator.hasMany(project,{foreignKey:"initiatorId",as:"initiatorProject"})


    initiator.belongsTo(user,{foreignKey:"id", as:"Initiator"})
    request.belongsTo(user,{foreignKey:"requestId", as:"Request"})
    request_with_initiator.belongsTo(request,{foreignKey:"requestId",as:"Request"})
     //city.hasMany(project,{ foreignKey: {field:"city"}, as: "city"});//,{ foreignKey: "cityProject", as: "city"}
    
}

// Team.hasMany(Player, {
//     foreignKey: 'clubId'
//   });
//   Player.belongsTo(Team);
module.exports = {applyExtraSetUp}