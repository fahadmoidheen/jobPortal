const mongoose = require("mongoose");
const Schema =mongoose.Schema

const BookSchema =new Schema({
    jobrole:String,
    experiance:String,
    skills:String,
    education:String,
    jobdesc:String,
    lastdate:String,
    jobtype:String
});
var Bookdata =mongoose.model('jobPost',BookSchema);
module.exports=Bookdata;