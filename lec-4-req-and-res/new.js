const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
console.log(req.url,req.method,req.headers)
if(req.url==="/"){
    res.write(`<!DOCTYPE html>
<html>
<head>
    <title>Simple Form</title>
</head>
<body>

    <h2>User Form</h2>

    <form action="/submit-details" method="POST">
        <!-- Name -->
        <label for="name">Name:</label><br>
        <input type="text" id="name" name="name" placeholder="Enter your name"><br><br>

        <!-- Gender -->
        <label>Gender:</label><br>
        <input type="radio" id="male" name="gender" value="male">
        <label for="male">Male</label><br>

        <input type="radio" id="female" name="gender" value="female">
        <label for="female">Female</label><br><br>

        <!-- Submit -->
        <button type="submit">Submit</button>
    </form>

</body>
</html>`);
return res.end();

}else if(req.url.toLowerCase()=== "/submit-details" && req.method =="POST"){
fs.writeFileSync('user.txt',"Suraj Jha");
res.statusCode = 302;
res.setHeader('Location',"/");
 return res.end();


    
}
res.write("<h1>hello</h1>")
return res.end();


});


const port = 3002;
server.listen(port,()=>{
    console.log('server is running on'+ port);
});