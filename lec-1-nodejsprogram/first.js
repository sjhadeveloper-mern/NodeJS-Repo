console.log("suraj");
const fs = require("fs");
fs.writeFile("output.txt","writing File", (err)=>{
    if(err) console.log("Error occured");
    else console.log("File written Successfully");
})