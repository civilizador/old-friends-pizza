const mongoose =  require("mongoose");

   const OrderSchema = new mongoose.Schema({
       totalPrice: Number,
       completedAt: String,
       orderItems: Array,
       status: {type: String, default: 'created'  },
       orderOwner: {type: String },
       created: {type: String, default: Date.now  }
  });

module.exports = mongoose.model("Order", OrderSchema);
