// Simple nodeJS Server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require ('path');



app.get("/",(req,res)=>{
    console.log('came from first middleware');
    res.sendFile(path.join(__dirname, 'views', 'home.html' ));
    
});
app.get("/contact-us",(req,res)=>{
    console.log('came from get request middleware');
    res.sendFile(path.join(__dirname, 'views', 'contact.html' ));
  

});





app.use(bodyParser.urlencoded());


app.post("/contact-us",(req,res)=>{
    console.log('came from post request middleware', req.body);
    res.sendFile(path.join(__dirname, 'views', 'submitted.html' ));

});



const PORT = 3005;
app.listen(PORT,()=>{
    console.log("Server running on port "+" "+'http://localhost:'+PORT)
});