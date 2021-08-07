const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//create schema and model

const reviewsSchema = new Schema({
  reviewId: String,
  contactId: String,
  locationId: String,
  isReviewed: Boolean,
  rating: Number,
  reviewDate: String,
  reviewComments: String
});

const reviews = mongoose.model("reviewsCollection", reviewsSchema);

module.exports.reviews;
