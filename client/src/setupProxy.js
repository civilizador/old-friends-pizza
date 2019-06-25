const proxy = require('http-proxy-middleware')

module.exports = function(app) {
    app.use(proxy(['/api','/api/logout','/api/login', '/api/getCartItems',
                  '/api/addToCart','/api/create', '/api/addTopping',
                  '/api/current_user','/api/profile','/api/facebook/login',
                  '/api/addItem','/api/getAll','/api/edit/:id'],
        { target: 'http://localhost:5000' }
    ));
}
