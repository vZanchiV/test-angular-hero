var express = require('express')
var path = require('path')
var serveStatic = require('serve-static')

var app = express()
app.use(serveStatic(path.join('angular', 'dist')))
var port = 5000

app.listen(port)
