var express = require('express')
var wiki = require('./wiki')
var app = express()

app.get('/', function(request, response){
	response.send('Hello, World!')
})

app.listen(3000, function() {
 console.log('Example app listening om port 3000!')
})

app.use('/wiki', wiki)
