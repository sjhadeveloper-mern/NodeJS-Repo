// Simple nodeJS Server

const http = require("http");


const server = http.createServer((req,res)=>{
  console.log(req.url, req.method, req.headers);
  if(req.url=== '/'){
  res.setHeader('Content-Type','Text/html');
  res.write('<html>');
  res.write('<head><title>Myntra</title></head>');
  res.write('<body><header style="background-color:black; padding:10px; display:flex; justify-content:center;"><a style="text-decoration:none; color:black; background-color:whitesmoke; padding:10px;" href="/">Home</a><a style="text-decoration:none; color:black; background-color:whitesmoke; padding:10px;" href="men">Men</a><a style="text-decoration:none; color:black; background-color:whitesmoke; padding:10px;" href="women">Women</a><a style="text-decoration:none; color:black; background-color:whitesmoke; padding:10px;" href="kids">Kids</a><a style="text-decoration:none; color:black; background-color:whitesmoke; padding:10px;" href="cart">Cart</a></header></body>');
  res.write('</html>');
  return res.end();

  }else if(req.url==='/men'){
      res.setHeader('Content-Type','Text/html');
  res.write('<html>');
  res.write('<head><title>Men products</title></head>');
  res.write('<body>Men products</body>');
  res.write('</html>');
   return res.end();
  }else if(req.url==='/women'){
      res.setHeader('Content-Type','Text/html');
  res.write('<html>');
  res.write('<head><title>Women products</title></head>');
  res.write('<body>Women products</body>');
  res.write('</html>');
   return res.end();
  }else if(req.url==='/kids'){
      res.setHeader('Content-Type','Text/html');
  res.write('<html>');
  res.write('<head><title>Kids products</title></head>');
  res.write('<body>Kids products</body>');
  res.write('</html>');
   return res.end();
  }else if(req.url==='/cart'){
      res.setHeader('Content-Type','Text/html');
  res.write('<html>');
  res.write('<head><title>Cart</title></head>');
  res.write('<body>Cart </body>');
  res.write('</html>');
   return res.end();
  }
  res.setHeader('Content-Type','Text/html');
  res.write('<html>');
  res.write('<head><title>Node JS Programming</title></head>');
  res.write('<body>page not found 404</body>');
  res.write('</html>');
// process.exit();  / exit event loop
});

server.listen(3001,()=>{
    console.log("Server running on port 3001")
});