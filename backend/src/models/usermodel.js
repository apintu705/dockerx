const mongoose = require('mongoose');

const userSchema=new mongoose.Schema({
    Name:{type:String, required:true,minLength:3},
    email:{type:String, required:true},
    password:{type:String, required:true,minLength:6}
},{
    versionKey:false,
    timestamps:true,
})

module.exports =mongoose.model("users",userSchema)