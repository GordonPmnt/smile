const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/joke',
    createProxyMiddleware({
      target: 'https://blague.xyz/api',
      changeOrigin: true,
      logLevel: 'debug',
    })
  );
  app.use(
    '/sex',
    createProxyMiddleware({
      target: 'http://13.59.241.170:8080/api',
      changeOrigin: true,
    })
  );
  app.use(
    '/dark',
    createProxyMiddleware({
      target: 'http://13.59.241.170:8080/api',
      changeOrigin: true,
    })
  );
  app.use(
    '/chuck',
    createProxyMiddleware({
      target: 'http://13.59.241.170:8080/api',
      changeOrigin: true,
    })
  );
};

