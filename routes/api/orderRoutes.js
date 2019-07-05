const mongoose  = require("mongoose");
const Item      = require("../../models/Item");
const User      = require("../../models/User");
const Order      = require("../../models/Order");
module.exports = (app) => {

// GET ALL ORDERS ROUTE

   app.get('/api/getAllOrders', (req, res)=>{
        Order.find({orderOwner:req.user._id}, (err, orders)=>{
            if(err) {throw err}
            else{ res.send(orders) }
        })
   });

// POST ADD NEW ITEM
   app.post("/api/newOrder", async (req,res)=>{
     const newOrder =  req.body.order
         Order.create(newOrder, (err,order)=>{
           if(err){throw err , console.log("Something is wrong") }
     //redirect back
            else {
              console.log('new Order Created: ', order)
              res.send("created");}
         });
   });

   

}
