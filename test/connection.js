const mongoose = require("mongoose");

//connect to  mongodb
mongoose.connect("mongodb://localhost/Here-database");

mongoose.connection
  .once("open", function() {
    console.log("Connection successful");
  })
  .on("error", function() {
    // eslint-disable-next-line no-undef
    console.log("connection error:", error);
  });
