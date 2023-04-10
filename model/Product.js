const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  price: {
    type: String,
  },
  image: {
    type: String,
  },
  details: {
    type: String,
  },
});

module.exports = mongoose.model("Product", productSchema);
