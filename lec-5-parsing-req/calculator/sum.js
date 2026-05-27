const sumRequestHandler = (req,res)=>{
console.log("hello");
const body = [];
req.on('data',chunk=>{
    body.push(chunk);
});
req.on('end',()=>{
 const bodyStr =  Buffer.concat(body).toString();
 const params = new URLSearchParams(bodyStr);
 const bodyObj = Object.fromEntries(params);
 const result = Number(bodyObj.first)+ Number(bodyObj.second);
 console.log(result);
   res.setHeader('Content-Type','Text/html');
 res.write(`<h1>Your answer is here ${result} </h1>`)
     res.end();
})

}

exports.sumRequestHandler = sumRequestHandler;