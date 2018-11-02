const express = require('express');
var app = express();
    app.listen(8000,(req,res)=>{
        console.log('server is running...');
    })
    app.use(express.static('public'));