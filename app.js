const express = require('express')
const webpackDevMiddleware = require("webpack-dev-middleware")
const webpackHotMiddleware = require("webpack-hot-middleware")
const app = express()
const webpack = require("webpack")
const webpackConfig = require("./webpack.config")

const compiler = webpack(webpackConfig)

app.use(express.static('dist'))
app.use(webpackDevMiddleware(compiler))
app.use(webpackHotMiddleware(compiler))

app.listen(3300, function () {
  console.log('server started in port 3300')
})
