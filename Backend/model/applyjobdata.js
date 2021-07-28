const mongoose = require("mongoose");
const Schema =mongoose.Schema

const appliedjobSchema =new Schema({
    fullname: String,
    email: String,
    phoneno: String,
    hq: String,
    skill: String,
    experience: String,
    college: String
});
var applyjob =mongoose.model('appliedjob',appliedjobSchema);
module.exports=applyjob;