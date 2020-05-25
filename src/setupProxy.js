const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports= function(app){
    app.use("/",
        createProxyMiddleware({
            target: "career-ninja-got.herokuapp.com",
            changeOrigin: true
        })
    )
}