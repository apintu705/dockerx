import React from 'react'
import { useNavigate } from 'react-router-dom'
import {FaArrowRight,FaArrowLeft,FaSearch,FaBars,FaSyncAlt} from "react-icons/fa"
import "./navbar.css"


export const Navbar = ({toggle}) => {
    const navigate=useNavigate();
    
  return (
    <div className="navbar">
        <div className="icon">
            <FaArrowLeft />
            <FaArrowRight />
        </div>
        <div className="icon">
            <FaSyncAlt onClick={()=>navigate("/")}/>
        </div>
        <div className="icon search">
            <FaSearch/>
            <input className="searchinp" type="text" placeholder="search song" />
        </div>
        <div className="icon">
            <FaBars onClick={toggle}/>
        </div>
    </div>
  )
}
