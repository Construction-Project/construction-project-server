const { sequelize, DataTypes } = require("./sequelize");

    const Opinion = sequelize.define(
        "opinion",
        {

            opinionId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true

            },
            stars: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0
             //,validate: {min: 0 ,max:5}          // checks for email format (foo@bar.com)

            },
            opinion: {
                type: DataTypes.STRING,
                allowNull: true,
            },

            
            //2 השדות יחד ייחודיים
            //מי דרג
            opinionInitiator:{
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            // את מי דרג
            opinionUser:{
                type: DataTypes.INTEGER,
                allowNull: false,
            }

            
        },
        {
            freezeTableName:true,
            timestamps: false,
        }


    );
    module.exports = Opinion;
