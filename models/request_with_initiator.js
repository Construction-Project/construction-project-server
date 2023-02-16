const { sequelize, DataTypes } = require("./sequelize");

    const Request_with_initiator = sequelize.define(
        "request_with_initiator",
        {
            requestId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,

            },
            initiatorId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,

            },
            
        },
        {
            freezeTableName:true,
            timestamps: false,
        }


    );


module.exports = Request_with_initiator;
