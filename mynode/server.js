const express = require('express')
const app = express();

app.get('/',(req,res)=>{
    console.log("HIYO")
})

app.listen(3001)