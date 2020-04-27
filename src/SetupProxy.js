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
      target: 'http://172.26.10.10:8080/api',
      changeOrigin: true,
    })
  );
  app.use(
    '/dark',
    createProxyMiddleware({
      target: 'http://172.26.10.10:8080/api',
      changeOrigin: true,
    })
  );
  app.use(
    '/chuck',
    createProxyMiddleware({
      target: 'http://172.26.10.10:8080/api',
      changeOrigin: true,
    })
  );
};

