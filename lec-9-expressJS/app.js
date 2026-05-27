// Simple nodeJS Server
const express = require('express');
const app = express();

app.get("/",(req,res)=>{
    console.log('came from first middleware');
    res.send('<p>home page</p>');
    
});
app.get("/contact-us",(req,res)=>{
    console.log('came from get request middleware');
    res.send(` <form action="/contact-us" method="POST">
      <input type="text" placeholder="Enter name" />
      <button type="submit">Submit</button>
    </form>`);

});
app.post("/contact-us",(req,res)=>{
    console.log('came from post request middleware');
    res.send(` <form action="/contact-us" method="POST">
      <input type="text" placeholder="Enter name" />
      <button type="submit">Submit</button>
    </form>`);

});




const PORT = 3005;
app.listen(PORT,()=>{
    console.log("Server running on port "+" "+'http://localhost:'+PORT)
});