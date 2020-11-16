const { createProxyMiddleware } = require('http-proxy-middleware');



module.exports = function(app){
    app.use(createProxyMiddleware("api/user",{target:"http://localhost:8080" }))
    app.use(createProxyMiddleware("api/store",{target:"http://localhost:8081" }))
    app.use(createProxyMiddleware("api/card",{target:"http://localhost:8082" }))
}