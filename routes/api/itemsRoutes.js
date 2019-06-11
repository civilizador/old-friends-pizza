const mongoose  = require("mongoose");
const Item      = require("../../models/Item");
const User      = require("../../models/User");

module.exports = (app) => {

// GET ALL ITEMS ROUTE

   app.get('/api/getAll', (req, res)=>{
        Item.find({}, (err, items)=>{
            if(err) {throw err}
            else{ res.send(items)
            }
        })
   });

// CART

// Get All Items in the User's Cart
    app.get('/api/getCartItems',async(req,res)=>{
        if(req.user){
            console.log('Cart Items was requested', req.user.cart)
                res.send(req.user.cart)
        }else{
            res.send('NotLoggedIn')
        }
    })

// Add Items to Cart
    app.post('/api/addToCart', async(req,res)=>{
        if(req.user){
            console.log('Some One is trying to add to Cart ', req.body)
               User.findByIdAndUpdate(req.user._id,
                { "$set": { "cart": [...req.user.cart,req.body] } },
                function(err) {
                    if (err) throw err;
                    console.log( "updated n docs: %s" );
                });
        }else{
            res.send('noUserLoggedIn')
        }
        
    })

// Remove Items from Cart
    app.post('/api/removeFromCart', async(req,res)=>{
        if(req.user){
            console.log('Some One is trying to remove from Cart ', req.body.index)
            const cart = req.user.cart.filter(function(elem, _index){return req.body.index != _index})
               User.findByIdAndUpdate(req.user._id,
                { "$set": { "cart": cart } },
                function(err) {
                    if (err) throw err;
                    console.log( "updated n docs: %s" );
                });
        }else{
            res.send('noUserLoggedIn')
        }
    })
// GET ITEM EDIT  
  app.get('/api/edit/:id',async(req,res)=>{
    if(req.user && req.user.admin){
        const items = await Item.findById(req.params.id, (err, items)=>{
                if(err) {throw err}
                else{ res.send(items)
                }
            })
        console.log('item WITH ID of',req.params.id,'  is going to be edited')
    }else{
            res.send('noUserLoggedIn')
        }
  })

// POST ITEM EDIT  
  app.post('/api/edit/:id',async(req,res)=>{
    if(req.user && req.user.admin){  
     await Item.findByIdAndUpdate(req.params.id, req.body.item, (err, items)=>{
            if(err) {throw err}
            else{ res.send('Updated') }
        })
      console.log('item WITH ID of',req.params.id,'  is going to be updated')
    }else{
            res.send('noUserLoggedIn')
        }
  })

// POST ADD NEW ITEM 
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
   
   // POST DELETE AN ITEM 
   app.delete("/api/delete/:id", async (req,res)=>{
         Item.findByIdAndRemove(req.body.itemId, (err,item)=>{
           if(err){throw err , console.log("Something is wrong") }
     //redirect back
            else {
              console.log('Item was deleted: ', item)
              res.send("Item was deleted");}
         });
   });


}