const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//create schema and model

const locationSchema = new Schema({
  locationId: String,
  locationName: String,
  locationType: String,
  closeIndicator: Boolean,
  closeDate: String,
  locationAddress: String
});

const location = mongoose.model("contactsCollection", contactsSchema);

module.exports.contacts;
