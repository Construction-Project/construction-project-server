const { sequelize, DataTypes } = require("./sequelize");

    const User = sequelize.define(
        "user",
        {
            Id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true

            
            },
            userName: {
                type: DataTypes.STRING,
                allowNull: false
            },

            password: {
                type: DataTypes.STRING,
                allowNull: false
            }, 
            name: {
                type: DataTypes.STRING,
                allowNull: true
                //unique:true
            },
            email: {
                type: DataTypes.STRING,
                allowNull: true,
                isEmail: true,            // checks for email format (foo@bar.com)

            },
            role:{
                allowNull:false,
                type:DataTypes.ENUM('user', 'initiator'),
                defaultValue:'user'
                },
            
            active:{
                allowNull:true,
                type:DataTypes.BOOLEAN,
                defaultValue:true
            }
           
        },
        {
            freezeTableName:true,
            timestamps: false,
        }
    );


module.exports =User;
