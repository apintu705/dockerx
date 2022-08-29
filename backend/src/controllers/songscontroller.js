const express = require('express');
const Songs=require("../models/songsmodel");

// create song

exports.createsong=async(req, res, next) => {

    try{
        let song=await Songs.findOne({Name:req.body.Name})
        if(song){
            return res.status(400).json({message:"song is already exixted"})
        }
        song=await Songs.create(req.body)
        res.status(200).json({song})

    }
    catch(err){
        res.status(500).json({message:err.message})
    }
}

// get allsongs

exports.getallsongs=async(req, res, next)=>{
    try{
        let song=await Songs.find();
        res.status(200).json({song});
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
}


