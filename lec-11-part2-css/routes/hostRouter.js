const express = require('express');
const hostRouter = express.Router();
const path = require('path');
const rootDir = require('../utils/pathUtil');



hostRouter.get("/host/add-home",(req,res,next)=>{
    res.sendFile(path.join(rootDir, 'views', 'addHome.html' ))
});



const registeredHomes = [];
hostRouter.post("/host/add-home",(req,res,next)=>{
    console.log(req.body);
     registeredHomes.push({homeName: req.body.homeName});
    res.sendFile(path.join(__dirname, '../', 'views', 'homeAdded.html' ))
   
});


exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;