const http = require ('http');
const uc = require('uppercase')

http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'});
    res.write(uc("<h5>Hello world</h5>"));

    res.end()
}).listen(5000)
