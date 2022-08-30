const mongoose = require('mongoose');

const artistSchema=new mongoose.Schema({
    Name:{type:String, required:true,minLength:3},
    DOB:{type:Date, required:true},
    Bio:{type:String},
    avgr:{type:Number,default:0}
},{
    versionKey:false,
    timestamps:true,
})

module.exports =mongoose.model("artists",artistSchema)