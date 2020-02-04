const passport  = require("passport");
const mongoose  = require("mongoose");
const User      = require("../../models/User");
const flash     = require("connect-flash");
const middleware = require("./middleware.js");
const bcrypt = require('bcryptjs');
// Passing express to our routes function
let dublicate;
module.exports = (app) => {

// When submitting a form on register page we create a new entry in DB.
    app.post('/api/register', async (req, res)=>{
	  await User.find({username:req.body.username},(err,dublicateUser)=>{
 	       if (dublicateUser){
	           dublicate = true;
	       }
	  })
        if (!dublicate){
            const fullAddress = req.body.address  + " " + req.body.address2 + ", " + req.body.city +", PA, " + req.body.zipCode
            const newUser = await new User({
          		name: req.body.name, email: req.body.email,
          		username: req.body.username,password: req.body.password,
          		address: fullAddress ,phone: req.body.phone
          	});
      	    await User.createUser(newUser, function(err, user){
          		if(err) throw err;
          		 res.send(200)
          	})
        } else{
          	console.log("User name already exists for user ", req.body.username);
            res.send("dublicateUser")
        }
    });

// When submitting a form on Login page , we pass values from inputs to passport local strategy.
  	app.post('/api/login',
  	  passport.authenticate('local',{successRedirect: '/', successRedirect: '/'})
  	);

    app.get('/api/logout',
        function(req, res){
            req.logout(),
            console.log('log Out')
  		     res.redirect("/")
  	    }
    );

// Endpoint to get current user
  	app.get('/api/current_user', (req,res) => {

      console.log('api/current_user called')
          if(req.user) {res.send(req.user)}
          else{res.send(false)}
    })



    app.put('/api/update_user', async (req,res) => {
      let password = req.body.password
            if(req.user) {
                bcrypt.hash(password, (hash) => {
                  req.body.password = hash
                   User.findByIdAndUpdate(req.user._id,req.body.updatedUser,(err, user)=>{
                         if(err) {throw err}
                         else{ res.send(req.user) }
                     })
                  })
            }
            else{res.send(false)}
    })





}
