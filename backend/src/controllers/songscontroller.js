const express = require('express');
const Songs=require("../models/songsmodel");
const Artistsssp=require("../models/artistmodel")

// create song

exports.createsong=async(req, res, next) => {
    let {Name,DateOfRelease,CoverIMG,Artist}=req.body;
    try{
        let song=await Songs.findOne({Name:req.body.Name})
        if(song){
            return res.status(400).json({message:"song is already exixted"})
        }
        let data= new Songs({
            Name,
            DateOfRelease,
            CoverIMG,
            Artist,
        })
        song=await data.save();
        res.status(200).json({song})

    }
    catch(err){
        res.status(500).json({message:err.message})
    }
}

// search songs

exports.searchsong=async(req,res,next)=>{
    try{
        let data= await Songs.find();
        data=data.filter(item => (item.Name === req.query.q))
        res.status(200).json(data)

    }
    catch(err){
        res.status(500).json({message:err.message})
    }
}

// get allsongs

exports.getallsongs=async(req, res, next)=>{
    try{
        let song=await Songs.find().sort({avgrateing:-1});

        res.status(200).json({song});
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
}

//rateing song

exports.ratingsong=async(req, res, next)=>{
    
        const userid=req.params.id;
        const {_id}=req.body;
        
        if(userid===_id){
            res.status(403).json("Access forbodden!")
        }
        else{
            try{
                let rateing=await Songs.findById(_id);
                let access=true;
                for(let i=0; i<rateing.Ratings.length; i++){
                    if(rateing.Ratings[i].user===userid){
                        access=false;
                    }
                }
                if(access){
                    await rateing.updateOne({$push:{Ratings:{user:userid,rate:req.body.rate}}},);
                    rateing=await Songs.findById(_id);
                    let sum=0;
                    for(let i=0; i<rateing.Ratings.length; i++){
                        sum+=rateing.Ratings[i].rate;
                    }
                    for(let i=0; i<rateing.Artist.length; i++){
                        
                    }
                     await updateartistavgr(rateing)
                    let avg=sum/rateing.Ratings.length; 
                    await rateing.updateOne({avgrateing:avg});
                    
                    res.status(200).json("user revewed")
                }
                else if(!access){
                    await rateing.updateOne({$pull:{Ratings:{user:userid}}});
                    await rateing.updateOne({$push:{Ratings:{user:userid,rate:req.body.rate}}},);
                    rateing=await Songs.findById(_id);
                    let sum=0;
                    for(let i=0; i<rateing.Ratings.length; i++){
                        sum+=rateing.Ratings[i].rate;
                    }
                    let avg=sum/rateing.Ratings.length; 
                     await updateartistavgr(rateing)
                    
                    
                    await rateing.updateOne({avgrateing:avg})
                    res.status(200).json("user revewed")
                }
                
            }
            catch(err){
                res.status(500).json({message:err.message})
            }
        }
    
    
}

const updateartistavgr=async(R) => {
    
    try{
        for(let i=0; i<R.Artist.length; i++){
            let Art=R.Artist[i]
            
            let a=await Songs.find({Artist:{$in:[Art]}})
            
            let suma=0;
            for(let j=0; j<a.length; j++){
                suma+=a[j].avgrateing;
            }
            let avg=suma/a.length
            await Artistsssp.updateOne({Name:Art},{avgr:avg})
        }
        
    }
    catch(err){}
}