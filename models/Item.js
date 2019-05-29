const mongoose  = require("mongoose");

const ItemSchema = new mongoose.Schema({
  name: {
      type: String,
      required: true
  },
  price: {
      type: Number,
      required: true
  },
  description: {
      type: String,
      required: false
  },
  category: {
      type: String,
      required: true
  },
  added: {
      type: Date,
      default: Date.now
  },
  timeToCook: Number,
  image: {
    type: String,
    required: true
  },
  featured: {
      type: Boolean,
      default: false
  }
})

let Item = module.exports = mongoose.model('Item', ItemSchema);
