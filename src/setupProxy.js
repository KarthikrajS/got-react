const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports= function(app){
    app.use("/",
        createProxyMiddleware({
            target: "http://career-ninja-got.herokuapp.com",
            changeOrigin: true
        })
    )
}