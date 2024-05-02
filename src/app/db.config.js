const Sequelize = require("sequelize");
const crearConfigBaseDades = () => {
  return new Sequelize("universitat", "root", "1234", {
    host: "localhost",
    dialect: "mysql",
    define: {
      timestamps: false,
      freezeTableName: true
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  });
}
module.exports = {crearConfigBaseDades}

