const    mongoose =         require("mongoose");
 
    const CartSchema = new mongoose.Schema({
        items: Array,
        promo: String,
        user: {
            id: {  
                type: mongoose.Schema.Types.ObjectId, //   id from the User model
                ref: "User" // ref refers to the model that we are going to use here. Which is User.
            },
        }
    });

module.exports = mongoose.model("Cart", CartSchema);
    