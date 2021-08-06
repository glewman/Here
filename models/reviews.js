const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//create schema and model

const reviewsSchema = new Schema({
  name: String,
  id: String,
  location: {
    lat: String,
    long: String
  },
  review: Boolean,
  contact: {
    name: String,
    id: String,
    phoneNumber: String
  }
});

const reviews = mongoose.model("reviewsCollection", reviewsSchema);

module.exports.reviews;
