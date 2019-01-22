const Sequelize = require('sequelize');
const sequelize = require(__root + 'config/db');
const Pin = sequelize.define('pin', {
    'id': {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    'pin': {
        type: Sequelize.STRING,
        allowNull: false},
    'email': {
        type: Sequelize.STRING,
        allowNull: false,
        unique: 'compositeIndex',
        validate: {
             isEmail: true
            }            
    },
    'isVerified': {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    'count': {
        type: Sequelize.INTEGER,
        defaultValue: 0
    },
    'createdAt': {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    },    
    'updatedAt': {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    },
    'expiredAt': {
        type: Sequelize.DATE
    },     
    
}, {
    //prevent sequelize transform table name into plural
    freezeTableName: true,
});


module.exports = Pin;