const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('Welcome to out home page')
    }
    if(req.url === '/about'){
        res.end('Here is out short history')
    }
    res.end(`<h1>Oops!</h1>
            <p>We can't seem to find the apge you are looking for </p>
            <a href="/">back`)
})

server.listen(5000)