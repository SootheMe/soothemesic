const sequelize = require('../config/database');
const { DataTypes } = require('sequelize');

const Music = sequelize.define('Music',{
    title: {
        type: DataTypes.STRING
    },
    content: {
        type: DataTypes.STRING
    },
    cover: {
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true
    });
 module.exports = Music;
