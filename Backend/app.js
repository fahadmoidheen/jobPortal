const express = require('express');

const cors = require('cors');
const { getMaxListeners } = require('process');

require("./db/connect")
const app = new express();



app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cors());

// importing models

var jobPost=require('./model/jobPost')
var employerdata= require('./model/employerdata')
var appliedjob =require('./model/applyjobdata')

//admin credentials

admin = "admin@gmail.com";
password = "Aa@123456"



app.post("/admin/login", async(req,res)=>{
        if(admin ===req.body.email && password ===req.body.password ){
       
            res.status(201).json("user added");
           
        }else{
        res.status(409).json(message= "You are not admin");     
    }
})


//  Job posting into database   

app.post("/postJob",function(req,res){
    console.log(req.body);
    var item={
        jobrole:req.body.jobrole,
        experiance:req.body.experiance,
        skills:req.body.skills,
        education:req.body.education,
        jobdesc:req.body.jobdesc,
        lastdate:req.body.lastdate,
        jobtype:req.body.jobtype
    }
    var job=new jobPost(item);
    job.save();;
    
})

// Getting job details from database

app.get('/jobs',function(req,res){
    
    jobPost.find()
                .then(function(jobs){
                    res.send(jobs);
                });
});

//Posting Employer details into database
app.post("/postEmployer",function(req,res){
    console.log(req.body);
    var item={
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        company:req.body.company,
        password:req.body.password,
        compdesc:req.body.compdesc
    }
    var employer= new employerdata(item);
    employer.save();;
    
})

//log in of employer

app.post("/loginemployer",async(req,res)=>{
    const email=req.body.email;
    const password=req.body.password 
    console.log(email);
    console.log(password);
    let udata= await employerdata.findOne({email:email})
    
    

    if(udata==null){
        console.log("null")
        return res.status(404).send("userdata does not present") 
    }else if(udata.email===email && udata.password===password){
        console.log("succ")
          res.status(200).send({email})
    }else{
        console.log("fail")
        return res.status(401).send("Something went wrong..Try again")
    }
})



// details of applied alumnees 

app.post("/applyjob",function(req,res){
    console.log(req.body);
    var item={
        fullname:req.body.fullname,
        email:req.body.email,
        phoneno:req.body.phoneno,
        hq:req.body.hq,
        skill:req.body.skill,
        experience:req.body.experience,
        college:req.body.college
    }
    var apply=new appliedjob(item);
    apply.save();;
    
})

app.listen(3000, function(){
    console.log('listening to port 3000');
});