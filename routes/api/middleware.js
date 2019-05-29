const Item      = require("../../models/Item");

const middleware = {}

middleware.checkOwnership={}

middleware.isLoggedIn = (req, res, next)=>{
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/api/login");
  };

module.exports = middleware
