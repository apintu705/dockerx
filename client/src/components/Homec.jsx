import React, { useEffect } from 'react'
import "./homec.css"
import {Section} from "./Section"
import ReactStars from "react-rating-stars-component";
import { useNavigate } from 'react-router-dom';
import { Artist } from './Artist';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { allsongsaction, ratingaction } from '../redux/action/songsaction';
import { getallartist } from '../redux/action/artistaction';


export const Homec = ({isrender}) => {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const {songs}=useSelector((state)=>state.songs);
    const [rating,setrating]=useState(0)
    const {authdata}=useSelector((state)=>state.user);
    

    const handleaddsongs=()=>{
        if(!authdata){
            navigate("/signin")
        }
        else{
           navigate('/addsong') 
        }
        
    }
    let dat;
    const ratingChanged=async(e,m)=>{
        if(!authdata){
            navigate("/signin")
        }else{
            setrating(e);
            dat={
               "_id":m._id,
               "rate":e
           }
           let id=authdata&&authdata.user._id
           dispatch(ratingaction(id,dat))
           isrender()
        }
        
        
    }
    useEffect(()=>{
        dispatch(allsongsaction())
        dispatch(getallartist())
        
    },[rating,dispatch])
    

    
  return (
    <>
    <Section/>
    {songs&&songs.length?(<div className="homec">

        <div className="homec-title">
            <h1>Top 10 Songs</h1>
            <button onClick={handleaddsongs}>Add Songs</button>
        </div>
        
        <div className="hc-content">
            
            <ul className='hc-cont'>
                <li><h2>Artworks</h2></li>
                {songs&&songs.map((e,i)=><li key={i}>
                    <img src={e.CoverIMG} alt="songs" />
                </li>)}
                
                
            </ul>
            
            
            <ul className='hc-cont'>
                <li><h2>songs</h2></li>
                {songs&&songs.map((e,i)=><li key={i}>
                    {e.Name}
                </li>)}
            </ul>
            <ul className='hc-cont'>
                <li><h2>Date of Release</h2></li>
                {songs&&songs.map((e,i)=>
                
                <li key={i}>
                    {e.DateOfRelease.split("").splice(0,10).join("").split("-")[2]+"/"+e.DateOfRelease.split("").splice(0,10).join("").split("-")[1]+"/"+e.DateOfRelease.split("").splice(0,10).join("").split("-")[0]}
                </li>)}
            </ul>
            <ul className='hc-cont'>
                <li><h2>Artists</h2></li>
                {songs&&songs.map((e,i)=><li key={i}>
                    {e.Artist.join(" \n ")}
                </li>)}
            </ul>
            <ul className='hc-cont'>
                <li><h2>Avgrating</h2></li>
                {songs&&songs.map((e,i)=><li key={i}>
                    {e.avgrateing.toFixed(2)}
                </li>)}
            </ul>
            <ul className='hc-cont'>
                <li><h2>rate</h2></li>
                {songs&&songs.map((m,i)=><li key={i}>
                    <ReactStars
                    count={5}
                    onChange={(e)=>ratingChanged(e,m)}
                    size={24}
                    color2={'#ffd700'}
                    />
                </li>)}   
            </ul>
        </div>
        
    </div>):<div className="snf"> song not found please enter correct song name</div>}
    

    <Artist/>
    </>
  )
}
