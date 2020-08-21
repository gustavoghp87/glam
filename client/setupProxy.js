const { createProxyMiddleware } = require('http-proxy-middleware');
const PORT_FRONTEND = require('./env-front.json').PORT_FRONTEND;

module.exports = function (app) {

    app.use(
        '/api',
        createProxyMiddleware({
            target: `http://localhost:${PORT_FRONTEND}`,
            changeOrigin: true,
        })
    );

};