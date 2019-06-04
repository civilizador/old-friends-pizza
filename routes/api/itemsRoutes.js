const mongoose  = require("mongoose");
const Item      = require("../../models/Item");
const User      = require("../../models/User");

module.exports = (app) => {

   app.get('/api/getAll', (req, res)=>{
        Item.find({}, (err, items)=>{
            if(err) {throw err}
            else{ res.send(items)
            }
        })
   });
 
      // Update user Cart
    app.post('/api/addToCart', async(req,res)=>{
        console.log('Some One is trying to add to Cart ', req.body)
       User.findByIdAndUpdate(req.user._id,
        { "$set": { "cart": [...req.user.cart,req.body] } },
        function(err) {
            if (err) throw err;
            console.log( "updated n docs: %s" );
        });
    })
    
    // app.get('/api/getCartItems', async(req,res)=>{
    //     if(req.user)
    //     User.findById(req.user, (err, items)=>{
    //         if(err) {throw err}
    //         else{ 
    //             console.log('current USER', items.cart)
    //             res.send(items.cart)
    //         }
    //     })
    // })
    
   app.post("/api/addItem", async (req,res)=>{
     const newItem = await new Item({
       name:        req.body.name,
       price:       req.body.price,
       description: req.body.description,
       timeToCook:  req.body.timeToCook,
       featured:    req.body.featured,
       image:       req.body.image,
       category:    req.body.category,
       added:       req.body.added,
       cart:        []
     });
         Item.create(newItem, (err,item)=>{
           if(err){throw err , console.log("Something is wrong") }
     //redirect back
            else {
              console.log('Item Created: ', item)
              res.send("created");}
         });
   });

}
