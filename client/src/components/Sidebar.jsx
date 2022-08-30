import React from 'react'
import "./sidebar.css"
import {FaTimes} from "react-icons/fa"
import { Link} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logoutaction } from '../redux/action/authaction'

export const Sidebar = ({isOpen,toggle}) => {
  const dispatch=useDispatch()
  const logout=()=>{
    dispatch(logoutaction());
    toggle();
  }
  return (
    <>{isOpen ? (
    <div className="sidebar">
        <div className="iconx">
            <FaTimes onClick={toggle}/>
        </div>
        <div className="sidewrapper">
            <Link to = "/signin"><h2>Sign In</h2></Link>
            <Link to = "/signup"><h2>Sign Up</h2></Link>
            <h2 style={{cursor:"pointer"}} onClick={logout}>Sign out</h2>
        </div>
    </div>):""}
    </>
  )
}
