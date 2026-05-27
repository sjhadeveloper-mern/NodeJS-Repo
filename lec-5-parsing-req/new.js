
const fs = require('fs');

 const userRequestHandler =  (req,res)=>{
console.log(req.url,req.method)
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

    const body = [];
    req.on('data',chunk=>{
        console.log(chunk);
        body.push(chunk);
    });
    req.on('end',()=>{
        parsedbody = Buffer.concat(body).toString();
        console.log(parsedbody);

        const params = new URLSearchParams(parsedbody);
        // const bodyobject= {};
        // for(const [key,val] of params.entries()){
        //     bodyobject[key] = val;
        // }
        // console.log(bodyobject);


        bodyobject = Object.fromEntries(params);
                console.log(bodyobject);
                fs.writeFileSync('user.txt',JSON.stringify(bodyobject));
    });



res.statusCode = 302;
res.setHeader('Location',"/");
 return res.end();


    
}
res.write("<h1>hello</h1>")
return res.end();


};

module.exports = userRequestHandler;