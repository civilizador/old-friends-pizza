const Item      = require("../models/Item");

const middleware = {}

middleware.checkOwnership={}

middleware.isLoggedIn = (req, res, next)=>{
    if(req.isAuthenticated()){
        return next();
    }
  };

module.exports = middleware
