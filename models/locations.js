const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//create schema and model

const locationsSchema = new Schema({
  locationId: String,
  locationName: String,
  locationType: String,
  closeIndicator: Boolean,
  closeDate: String,
  locationAddress: String
});

const locations = mongoose.model("locationsCollection", locationsSchema);

module.exports = {
  model: locations,
  schema: locationsSchema
};
