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
 
      // Add Items to Cart
    app.post('/api/addToCart', async(req,res)=>{
        console.log('Some One is trying to add to Cart ', req.body)
       User.findByIdAndUpdate(req.user._id,
        { "$set": { "cart": [...req.user.cart,req.body] } },
        function(err) {
            if (err) throw err;
            console.log( "updated n docs: %s" );
        });
    })
       // Remove Items from Cart
    app.post('/api/removeFromCart', async(req,res)=>{
        console.log('Some One is trying to remove from Cart ', req.body.index)
        const cart = req.user.cart.filter(function(elem, _index){return req.body.index != _index})
           User.findByIdAndUpdate(req.user._id,
            { "$set": { "cart": cart } },
            function(err) {
                if (err) throw err;
                console.log( "updated n docs: %s" );
            });
        })
    
  
    
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
