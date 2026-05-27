const requestHandler = (req,res)=>{
const {sumRequestHandler} = require('./sum');
console.log(req.url, req.method, req.headers);
 
if(req.url === '/'){
    res.write(`<html>
        <head>
        <title>Welcome </title>
</head>
        <body>
        <h1>Welcome to the Home Page.</h1>
        <a href="/calculator">Go to Calculator</a>
        </body>
        
        
        
        </html>`);
}else if(req.url === "/calculator"){
    res.write(`<!DOCTYPE html>
<html>
<head>
    <title>Simple Calculator</title>
</head>
<form action="calculator-result" method="POST">
<body style="display:flex; justify-content:center; align-items:center; height:100vh; background:#f0f0f0;">

    <div style="background:white; padding:20px; border-radius:10px; box-shadow:0 0 10px rgba(0,0,0,0.2); text-align:center;">
        
        <h2 style="margin-bottom:15px;">Calculator</h2>

        <input type="number" id="num1" placeholder="Enter first number"
            style="padding:8px; margin:5px; width:150px;" name="first"><br>

        <input type="number" id="num2" placeholder="Enter second number"
            style="padding:8px; margin:5px; width:150px;" name="second"><br>

       <button
            style="padding:10px 20px; margin-top:10px; background:blue; color:white; border:none; border-radius:5px; cursor:pointer;">
            Add
        </button>

        <p id="result" style="margin-top:15px; font-weight:bold;"></p>
    </div>

   </form>

</body>
</html>`);
 res.end();
}else if(req.url=== "/calculator-result" && req.method=== "POST"){
   return sumRequestHandler(req,res);
      
}

else{
    res.write('<h1>Page not Found 404</h1>')
     res.end();
}
}
exports.requestHandler = requestHandler;