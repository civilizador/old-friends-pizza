const proxy = require('http-proxy-middleware')
 
module.exports = function(app) {
    app.use(proxy(['/api', '/api/current_user','/api/facebook/login'], { target: 'http://localhost:5000' }));
}