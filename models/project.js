const { DiffieHellman } = require("crypto");
const { sequelize, DataTypes } = require("./sequelize");

    const Project = sequelize.define(
        "project",
        {
            idProject: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            address: {
                type: DataTypes.STRING,
                allowNull: true
            },
            city:{
                type: DataTypes.INTEGER,
                allowNull: true
            },
            status:{
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue:1
            },
            initiatorId:{
                type: DataTypes.INTEGER,
                allowNull: false
            },
            apartmentBefore:{
                type: DataTypes.INTEGER,
                allowNull: true
            },
            apartmentAfter:{
                type: DataTypes.INTEGER,
                allowNull: true
            },
            requestYear:{
                type: DataTypes.INTEGER,
                allowNull: true
            },
            permitYear:{
                type: DataTypes.INTEGER,
                allowNull: true
            },
            startConstructionYear:{
                type: DataTypes.INTEGER,
                allowNull: true
            },
            populatingYear:{
                type: DataTypes.INTEGER,
                allowNull: true 
            },
            description:{
                type: DataTypes.STRING,
                allowNull: true
            },
            // tama38: {
            //     type: DataTypes.BOOLEAN,
            //     allowNull: false,
            // },
            // pinuyBinuy: {
            //     type: DataTypes.BOOLEAN,
            //     allowNull: false,

            // },
           
        },
        {           
            freezeTableName:true,
            timestamps: false,
        }
    );
module.exports =Project;
