const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//create schema and model

const contactsSchema = new Schema({
  name: String,
  id: String,
  phoneNumber: String,
  isContact: Boolean
});

const contacts = mongoose.model("contactsCollection", contactsSchema);

module.exports.contacts;
