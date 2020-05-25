import {createProxyMiddleware} from 'http-proxy-middleware'

module.exports= function(app){
    app.use("/",
        createProxyMiddleware({
            target: "https://career-ninja-got.herokuapp.com",
            changeOrigin: true
        })
    )
}