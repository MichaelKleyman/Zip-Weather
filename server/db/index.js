//this is the access point for all things database related!

const db = require("./db");

const User = require("./models/User");
const Zipcode = require("./models/Zipcode");

User.hasMany(Zipcode)
Zipcode.belongsToMany(User, {as: 'user', through: 'User/Zipcode'})

module.exports = {
  db,
  models: {
    User,
    Zipcode,
  },
};
