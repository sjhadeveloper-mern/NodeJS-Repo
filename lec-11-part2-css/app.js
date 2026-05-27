//external module
const {hostRouter} = require('./routes/hostRouter');
const userRouter = require('./routes/userRouter');

const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');
const path = require('path');
const rootDir = require('./utils/pathUtil');




app.use(express.urlencoded());

app.use(userRouter);
app.use(hostRouter);

app.use(express.static(path.join(rootDir,'public')));
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html' ))
});
const PORT = 3006;
app.listen(PORT,()=>{
    console.log("Server running on port "+" "+'http://localhost:'+PORT)
});