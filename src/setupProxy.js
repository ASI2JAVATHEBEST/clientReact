const { createProxyMiddleware } = require('http-proxy-middleware');



module.exports = function(app){
    app.use(createProxyMiddleware("/user",{target:"http://localhost:8080",changeOrigin:true }))
    app.use(createProxyMiddleware("/store",{target:"http://localhost:8081",changeOrigin:true }))
    app.use(createProxyMiddleware("/card",{target:"http://localhost:8082" ,changeOrigin:true}))
}