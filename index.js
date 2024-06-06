const http = require('http')
const path = require('path')
const fs = require('fs')

const server = http.createServer((req, res) => {
    //if(req.url === '/') {
        //res.writeHead(200, {'content-Type':'text/html'})
        //res.end('<h1>Node Home</h1>')
/*         fs.readFile(
            path.join(__dirname, 'public', 'index.html'),
            (err, content) => {
                if(err) throw err;
                res.writeHead(200, {'content-Type':'text/html'})
                res.end(content);
            }
        )
    }

    if(req.url === '/api/users') {
        const users = [
            {name: 'Ahmed', age:27},
            {name: 'Jack', age:33}
        ]
        res.writeHead(200,{'content-Type':'application/json'})
        res.end(JSON.stringify(users))
    } */
    //Build file Path
    let filePath = path.join(__dirname, 'public', 
    req.url === '/' ? 'index.html' : req.url)

    //Extension of file
    let extname = path.extname(filePath)

    //initial content type
    let contentType = 'text/html'

    // check ext and set content type
    switch(extname) {
        case '.js':
            contentType = 'textjavascript';
            break
        case '.css':
            contentType = 'text/css'
            break
        case '.json':
            contentType = 'application/json'
            break
        case '.jpg':
            contentType = 'image/jpg'
            break
    }

    // read file

    fs.readFile(filePath, (err, content) =>{
        if(err) {
            if(err.code == 'ENOENT'){
                //page not found
                fs.readFile(path.join(__dirname, 'public', '404.html'),
                (err, content) => {
                    res.writeHead(200, {'content-type': 'text/html'})
                    res.end(content, 'utf8')
                })
            } else {
                // some server error
                res.writeHead(500)
                res.end(`Server Error ${err.code}`)
            }
        } else {
            // success
            res.writeHead(200, {'content-Type': contentType})
            res.end(content)
        }
    })
})

const Port = process.env.PORT || 5000 //access environment variable in production

server.listen(Port, () => console.log(`Server is runing on port ${Port}`))

