const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/randomapi',
    createProxyMiddleware({
      target: 'https://blague.xyz/api/',
      changeOrigin: true,
    })
  );
  app.use(
    '/chuck',
    createProxyMiddleware({
      target: 'https://www.chucknorrisfacts.fr/api/',
      changeOrigin: true,
    })
  );
};
