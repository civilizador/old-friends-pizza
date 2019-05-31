const mongoose  = require("mongoose");
const Item      = require("../../models/Item");

module.exports = (app) => {

   app.get('/api/getAll', (req, res)=>{
        Item.find({}, (err, items)=>{
            if(err) {throw err}
            else{ res.send(items)
                console.log('Itemes Route console.log: ', items)
            } 
        }) 
   });

   app.post("/api/addItem", async (req,res)=>{
     const newItem = await new Item({
       name:        req.body.name, 
       price:       req.body.price,
       description: req.body.description,
       timeToCook:  req.body.timeToCook,
       featured:    req.body.featured,
       image:       req.body.image,
       category:    req.body.category,
       added:       req.body.added
     });
         Item.create(newItem, (err,item)=>{
           if(err){throw err , console.log("Something is wrong") }
     //redirect back
            else {
              console.log('Item Created: ', item)
              res.redirect("/");}
         });
   });

}
