const dbConfig = require("../config/db.config");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: 0,
 
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.userInfo = require("./userInfoModel.js")(sequelize, Sequelize);

db.sequelize.sync({force:false})
.then(()=>{
    console.log("re-synce is done");
})
module.exports = db;