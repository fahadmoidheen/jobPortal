const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/jobPortalDb').then(()=>{
        console.log("Connection is successful");
    }).catch((e)=>{
        console.log("No connection");
    })
