const mongoose  = require("mongoose");

const ItemSchema = new mongoose.Schema({
  total: {
      type: Number,
      required: true
  },
  items: {
      type: Array,
      default: [],
      required: true
  },
  status: {
      type: Boolean,
      default: false
  },
 Address: {
      type: String,
      required: false
  },
  placed: {
      type: Date,
      default: Date.now
  },
  discounts: {
      type: String
  } ,
  toppings: {
      type: Array,
      default: []
  }
})

let Item = module.exports = mongoose.model('Item', ItemSchema);
