const http = require('http');
const fs = require('fs');
const { requestHandler } = require('./handler');

const server = http.createServer(requestHandler);

const PORT = 3006;
server.listen(PORT,()=>{
    console.log('server is running on port'+ 'http://localhost:'+PORT);
});