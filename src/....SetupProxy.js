/*
const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://blague.xyz',
      changeOrigin: true,
      logLevel: 'debug',
    })
  );
  app.use(
    '/chuckapi',
    createProxyMiddleware({
      target: 'https://www.chucknorrisfacts.fr/api/get',
      changeOrigin: true,
      logLevel: 'debug',
    })
  );
};
*/
