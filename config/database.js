const {Sequelize} = require  ("sequelize");

const sequelize = new Sequelize('musik_db', 'root', '1234',{
    host: "34.101.111.133",
    dialect: "mysql"
});

module.exports = sequelize;
