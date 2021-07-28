const mongoose = require("mongoose");
const Schema =mongoose.Schema

const jobPostSchema =new Schema({
    jobrole:String,
    experiance:String,
    skills:String,
    education:String,
    jobdesc:String,
    lastdate:String,
    jobtype:String
});
var jobPost =mongoose.model('jobPost',jobPostSchema);
module.exports=jobPost;