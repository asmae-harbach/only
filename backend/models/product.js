const mongoose = require('mongoose');




const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  rating: {
    type: Number,
    min: 0,
    max: 5,
    required: true
  },
  category: String,
  image: String,
  desc: String,
});

module.exports = mongoose.model('Product', productSchema);