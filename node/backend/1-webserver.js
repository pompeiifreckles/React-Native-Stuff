const fs = require('fs')
const http = require('http')
const url  = require('url')

// Server
// Routing

const server = http.createServer((req, res) => {

    const pathName = req.url
    if(pathName === '/' || pathName === '/overview') {
        res.end('Hello, this is overview!!')
    
    } else if(pathName === '/product') {
        res.end('Welcome too the products page!')
    
    } else if (pathName === '/api') {
        
        fs.readFile(`${__dirname}/dev-data/data.json`, 'utf-8', (err, data) => {
            const productData = JSON.parse(data)
            res.writeHead(200, {
                'Content-Type': 'application/json',
            })
            res.end(data)
        })

        // res.end('API')
    
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/html',
            'my-own-header': 'hello-world',
        })
        res.end('<h1>Error 404: Page not Found</h1>')
    }

})

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to requests on port 8000')
})