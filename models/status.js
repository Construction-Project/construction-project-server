const { sequelize, DataTypes } = require("./sequelize");

    const Status = sequelize.define(
        "status",
        {
            statusId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true

            
            },
            status: {
                type: DataTypes.STRING,
                allowNull: false
            }
           
        },
        {
            freezeTableName:true,
            timestamps: false,
        }
    );
    module.exports =Status;
