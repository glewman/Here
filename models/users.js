const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//create schema and model

const usersSchema = new Schema({
  name: String,
  id: String,
  phoneNumber: String,
  contacts: {
    name: String,
    id: String,
    phoneNumber: String
  }
});

const users = mongoose.model("usersCollection", usersSchema);

module.exports.users;
