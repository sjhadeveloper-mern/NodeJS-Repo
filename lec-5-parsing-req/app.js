const http = require('http');
const requestHandler = require('./new');

const server = http.createServer(requestHandler);



const port = 3002;
server.listen(port,()=>{
    console.log('server is running on'+ port);
});