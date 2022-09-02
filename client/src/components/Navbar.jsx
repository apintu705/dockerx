import React, { useState } from 'react'
import {FaArrowRight,FaArrowLeft,FaSearch,FaBars,FaSyncAlt} from "react-icons/fa"
import "./navbar.css"
import { useDispatch } from 'react-redux'
import { allsongsaction, searchsongaction } from '../redux/action/songsaction'


export const Navbar = ({toggle,isrender}) => {

    const dispatch=useDispatch()
    const [search,setSearch]=useState("");
    const enter=(e)=>{
        if(e.key==="Enter"){
            dispatch(searchsongaction(search));
            isrender();
        }
    }
    const reload=() => {
        
        dispatch(allsongsaction())
        isrender();
    }
    
  return (
    <div className="navbar">
        <div className="icon">
            <FaArrowLeft />
            <FaArrowRight />
        </div>
        <div className="icon">
            <FaSyncAlt onClick={reload} style={{cursor:"pointer"}}/>
        </div>
        <div className="icon search">
            <FaSearch/>
            <input onChange={(e)=>setSearch(e.target.value)} onKeyPress={(e)=>enter(e)} className="searchinp" type="text" placeholder="search song by title" />
        </div>
        <div className="icon">
            <FaBars onClick={toggle}/>
        </div>
    </div>
  )
}
