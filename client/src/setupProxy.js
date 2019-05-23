const proxy = require('http-proxy-middleware')

module.exports = function(app) {
    app.use(proxy(['/api','/api/logout','/api/login','/api/current_user','/api/facebook/login','/api/addItem','/api/getAll'], { target: 'http://localhost:5000' }));
}
