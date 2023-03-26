const { sequelize, DataTypes } = require("./sequelize");


    const Initiator = sequelize.define(
        "initiator",
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                unique:true
            },
            hp: {
                type: DataTypes.STRING,
                allowNull: false
                //?,unique:true
            },
            phone: {   
                type: DataTypes.STRING,
                allowNull: true
            },
            address: {
                type: DataTypes.STRING,
                allowNull: true
            },
            tama38: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: 1,
            },
            pinuyBinuy: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: 1,
            },
            description: {
                type: DataTypes.STRING,
                allowNull: true
            },
            logo: {
                type: DataTypes.STRING,
                allowNull: true
                //?,unique:true
            },
            // name:{//אפשר לעשןת שרק אחד מה2 הבאים יהיה null
            //     type: DataTypes.STRING,
            //     allowNull: false
            // },
            company_name:{
                type: DataTypes.STRING,
                allowNull: true
            },
        },
        {
            freezeTableName:true,
            timestamps: false,
        }
    );
    module.exports = Initiator;

