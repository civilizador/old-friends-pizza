const mongoose  = require("mongoose");
const Item      = require("../../models/Item");

module.exports = (app) => {

   app.get('/api/getAll', async (req, res)=>{
      res.send('Add Item Route')
   });

   app.post("/api/addItem", async (req,res)=>{
     const newItem = await new Item({
       name: req.body.name, price: req.body.price,
       description: req.body.description,timeToCook: req.body.timeToCook,
       featured: req.body.featured
     });
         Item.create(newItem, (err,item)=>{
           if(err){throw err , console.log("Something is wrong") }
     //redirect back
            else {
              console.log('Item Created: ', item)
              res.redirect("/tickets");}
         });
   });

}
