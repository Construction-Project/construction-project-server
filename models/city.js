const { sequelize, DataTypes } = require("./sequelize");

    const City = sequelize.define(
        "city",
        {
            idCity: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true

            
            },
            city: {
                type: DataTypes.STRING,
                allowNull: false
                //?,unique:true
            }
           
        },
        {
            freezeTableName:true,
            timestamps: false,
        }
    );
    module.exports = City;

;