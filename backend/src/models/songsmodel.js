const mongoose = require('mongoose');

const songSchema=new mongoose.Schema({
    Name:{type:String, required:true,minLength:3},
    DateOfRelease:{type:Date, required:true},
    CoverIMG:{type:String, required:true},
    Artist:[{type:String, required:true}],
    Ratings:[{user:{type:String},rate:{type:Number, required:true}}],
    avgrateing:{type:Number,default:0}
},{
    versionKey:false,
    timestamps:true,
})

module.exports =mongoose.model("song",songSchema)