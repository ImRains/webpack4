const Express = require('express')
const webpack = require('webpack')
const app = new Express()
const webpackDevMiddleware = require('webpack-dev-middleware')
const config = require('./webpack.config')
const complier = webpack(config)

app.use(webpackDevMiddleware(complier,{
    publicPath: config.output.publicPath
}))

app.listen(5590,()=>{
    console.log('server id running : http://localhost:5590')
})