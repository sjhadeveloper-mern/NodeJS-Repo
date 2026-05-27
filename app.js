//external module
const hostRouter = require('./routes/hostRouter');
const userRouter = require('./routes/userRouter');
const express = require('express');
const app = express();
const path = require('path');




app.use(express.urlencoded());

app.use(userRouter);
app.use(hostRouter);
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html' ))
});
const PORT = 3006;
app.listen(PORT,()=>{
    console.log("Server running on port "+" "+'http://localhost:'+PORT)
});