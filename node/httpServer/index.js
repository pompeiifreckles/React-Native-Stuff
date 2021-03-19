// Load HTTP module

const http = require('http')

const hostname = '127.0.0.1'
const port = 8000

// Create http server
const server = http.createServer((request, response) => {
	
	// Set the response HTTP header with HTTP status and Content-Type
	response.writeHead(200, {'Content-Type': 'text/plain'})

	// Send the reponse body "Hello World"
	response.end('Hello World\n')
})

// Prints a log once the server starts listening
server.listen(port, hostname, () => console.log(`Server running at http://${hostname}:${port}/`))
