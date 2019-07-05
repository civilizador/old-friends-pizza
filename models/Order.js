var mongoose =  require("mongoose");

   var OrderSchema = new mongoose.Schema({
   totalPrice: Number,
   status: String,
   completedAt: String,
   orderOwner: String, 
   orderItems: Array,
   created: {type: String, default: Date.now  }
      });

module.exports = mongoose.model("Order", OrderSchema);
   
   