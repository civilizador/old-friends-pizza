const proxy = require('http-proxy-middleware')

module.exports = function(app) {
    app.use(proxy(['/api','/api/logout','/api/login',
                  '/api/addToCart','/api/addToCart/:id','/api/create',
                  '/api/current_user','/api/profile','/api/facebook/login',
                  '/api/addItem','/api/getAll','/api/edit/:id'],
        { target: 'http://localhost:5000' }
    ));
}
