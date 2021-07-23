const express = require('express');

const cors = require('cors');
const { getMaxListeners } = require('process');

require("./db/connect")
const app = new express();



app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cors());

 var jobPost=require('./model/jobPost')


admin = "admin@gmail.com";
password = "Aa@123456"



app.post("/admin/login", async(req,res)=>{


        if(admin ===req.body.email && password ===req.body.password ){
       
            res.status(201).json("user added");
           
        }else{
        res.status(409).json(message= "You are not admin");     
    }
})

app.post("/postJob",function(req,res){
    console.log(req.body);
    var item={
        jobrole:req.body.jobrole,
        experiance:req.body.jobrole,
        skills:req.body.skills,
        education:req.body.education,
        jobdesc:req.body.jobdesc,
        lastdate:req.body.lastdate,
        jobtype:req.body.jobtype
    }
    var job=new jobPost(item);
    job.save();
})









app.listen(3000, function(){
    console.log('listening to port 3000');
});