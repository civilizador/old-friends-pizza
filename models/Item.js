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
      required: true
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
  featured: {
      type: Boolean,
      default: false
  }
})

let Item = module.exports = mongoose.model('Item', ItemSchema);
