// Imports
const http = require('http');
const fs = require('fs')
const url = require('url')

//Constants
const hostname = '127.0.0.1';
const port = 3000;

console.log("Server is being initiated")

//Create new server
const server = http.createServer(function (req, res) {
    
    var pathname = req.url
    console.log('request for '+ pathname + ' received.');
    console.log('searching for '+ pathname);

    fs.readFile(pathname.substr(1), function(err, data){
        if(err){
            console.log(err);
            res.writeHead(404, {'Content-type': 'text/html'});
        } else{
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data.toString());
        }
        res.end();
    });
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });