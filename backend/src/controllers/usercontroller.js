const express = require('express');
const User= require("../models/usermodel");
const bcrypt = require('bcrypt');
const jwt =require("jsonwebtoken");
require("dotenv").config()

// register user
exports.registeruser=async(req, res, next) => {
    
    const {Name,email,password} = req.body;
    const salt=await bcrypt.genSalt(10);
    const hashedpassword=await bcrypt.hash(password,salt);
    

        const newuser=new User({Name,email,password:hashedpassword});
    try{
        const olduser = await User.findOne({Name:Name});
        if(olduser){
            return res.status(400).json({message:"user is already registered"})
        }
        
        const user=await newuser.save();
        const token=jwt.sign({
            Name:user.Name,
            id:user._id
        },process.env.JWT_SECRET,{expiresIn:"1h"})
        res.status(200).json({user,token})
        
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
}


// loginuser

exports.loginuser=async(req, res, next) =>{
    
    const {Name,password}=req.body;

    try{
        const user=await User.findOne({Name:Name});

        if(user){
            const validity=await bcrypt.compare(password,user.password);

            if(!validity){
                res.status(400).json({message:"Wrong Password"})
            }else{
                const token=jwt.sign({
                    Name:user.Name,
                    id:user._id
                },process.env.JWT_SECRET,{expiresIn:"1h"})

                res.status(200).json({user,token})
            }
        }
        else{
            res.status(404).json("user not found")
        }
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
}