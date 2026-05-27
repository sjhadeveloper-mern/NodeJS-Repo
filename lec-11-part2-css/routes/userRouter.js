// core modules
const path = require('path');
const rootDir = require('../utils/pathUtil');
const {registeredHomes} = require('./hostRouter');
// external module 
const express = require('express');
const userRouter = express.Router();
 
 
userRouter.get("/",(req,res,next)=>{
    console.log(registeredHomes);
   res.render('home', { homes: registeredHomes }); 
});

module.exports = userRouter;