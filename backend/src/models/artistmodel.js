const mongoose = require('mongoose');

const artistSchema=new mongoose.Schema({
    Name:{type:String, required:true,minLength:3},
    DOB:{type:Date, required:true},
    Bio:{type:String}
},{
    versionKey:false,
    timestamps:true,
})

module.exports =mongoose.model("artists",artistSchema)