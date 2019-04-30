const passport  = require("passport");
const mongoose  = require("mongoose");
const User      = require("../../models/User");
const flash     = require("connect-flash");

// Passing express to our routes function

module.exports = (app) => {
    
    app.post('/api/register', function(req, res){
	    const password = req.body.password;
	    const password2 = req.body.password2;
        if (password == password2){
            var newUser = new User({
          		name: req.body.name,
          		email: req.body.email,
          		username: req.body.username,
          		password: req.body.password,
          		address: req.body.addr,
          		phone: req.body.phone
          	});
      	    User.createUser(newUser, function(err, user){
          		if(err) throw err;
          		res.send(user)
          		console.log(user);
          	})
        } else{
          	console.log("Passwords don't match");
            res.send("Passwords don't match")
        }
    });
// FACEBOOK AUTH ROUTES
    app.get("/api/facebook/login", passport.authenticate('facebook', { 
        scope : ['email'] }));
 
    app.get('/api/auth/facebook/callback',passport.authenticate('facebook', { 
        successRedirect: '/',
        failureRedirect: '/login' 
    }));

// Endpoint to login
	app.post('/api/login',
	  passport.authenticate('local'),
	  function(req, res) {
	      console.log(req.user)
	     res.redirect("/") 
	  }
	);
    app.get("/api/logout", function(req, res) {
		req.logout();
		res.redirect("/login");
	});
// Endpoint to get current user
	app.get('/api/current_user', (req,res) => {
        if(req.user) {res.send(req.user)}
        else{res.send('failed')}
    })
    
}
