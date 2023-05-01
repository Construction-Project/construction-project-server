const { sequelize, DataTypes } = require("./sequelize");

    const Request = sequelize.define(
        "request",
        {
            requestId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true

            },
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            name: {
                type: DataTypes.STRING,
                allowNull: true
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false
            },
            phone: {
                type: DataTypes.STRING,
                allowNull: true
            },
            addressProject: {
                type: DataTypes.STRING,
                allowNull: true
            },
            comments: {
                type: DataTypes.STRING,
                allowNull: true
            },
            date: {
                type: DataTypes.DATE,
                allowNull: true
            },

          
        },
        {
            freezeTableName:true,
            timestamps: false,
        }


    );


module.exports =Request;
