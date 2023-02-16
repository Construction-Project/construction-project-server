const { sequelize, DataTypes } = require("./sequelize");

    const Picture = sequelize.define(
        "picture",
        {
            pictureId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true


            },
            projectId: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            picturePath: {
                type: DataTypes.STRING,
                allowNull: false 
                //?,unique:true
            }
            ,
        },
        {
            freezeTableName:true,
            timestamps: false,
        }


    );
    module.exports = Picture;
