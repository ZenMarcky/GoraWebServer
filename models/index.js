const Sequelize = require('sequelize');
const dbConfig = require('../config/db.config')

const sequelize = new Sequelize(dbConfig.DATABASE,dbConfig.USER,dbConfig.PASSWORD,{
    host: dbConfig.HOST,
    dialect: dbConfig.DIALECT
});


const db = {};
db.sequelize = sequelize;
db.models = {};
db.models.Booked = require('./Booked')(sequelize,Sequelize.DataTypes);
db.models.User = require('./User')(sequelize,Sequelize.DataTypes);
db.models.Contacts = require('./Contacts')(sequelize,Sequelize.DataTypes);

db.models.User.hasOne(db.models.Booked, {
    onDelete: "cascade"
});

module.exports = db
