const Sequelize = require("sequelize");
const db = require("../db");

const Zipcode = db.define("Zipcodes", {
  zipcode: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});


module.exports = Zipcode