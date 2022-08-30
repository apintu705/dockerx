import React from 'react'
import { useSelector } from 'react-redux'
import "./artist.css"


export const Artist = () => {
    const {artist}=useSelector((state)=>state.artist)
  return (
    <>
    
    <div className="artist">

        <div className="artist-title">
            <h1>Top 10 Artists</h1>
            
        </div>
        
        <div className="artist-content">
            
            <ul className='artist-cont'>
                <li><h2>Artists</h2></li>
                {artist&&artist.map((e,i)=><li key={i}>{e.Name}</li>)}
                
            </ul>
            
            
            <ul className='artist-cont'>
                <li><h2>Date of Birth</h2></li>
                {artist&&artist.map((e,i)=><li key={i}>{e.DOB}</li>)}
            </ul>
            <ul className='artist-cont'>
                <li><h2>Avrrating</h2></li>
                {artist&&artist.map((e,i)=><li key={i}>{e.avgr}</li>)}
            </ul>
            <ul className='artist-cont'>
                <li><h2>Bio</h2></li>
                {artist&&artist.map((e,i)=><li key={i}>{e.Bio}</li>)}
            </ul>
            
            
        </div>
        
    </div>
    </>
  )
}
