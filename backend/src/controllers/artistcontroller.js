const express = require('express');
const Artist=require("../models/artistmodel")

// create artists
exports.cteateArtist=async(req,res,next) => {
    try{
        
        let artist=await Artist.findOne({Name:req.body.Name})
        if(artist){
            return res.status(400).json({message:"artist is already exixted"})
        }
        artist=await Artist.create(req.body)
        res.status(200).json({artist})
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
}

// get all artist models
exports.getAllArtist=async(req,res,next) => {
    try{
        const artist=await Artist.find().sort({avgr:-1})
        
        res.status(200).json({artist})
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
}