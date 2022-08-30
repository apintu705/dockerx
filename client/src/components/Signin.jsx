import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginaction } from '../redux/action/authaction'
import {Link} from "react-router-dom"
import "./signin.css"


export const Signin = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const [user,setuser]=useState({
    Name:"",
    password:"",
  })
  const handlesignupform=(e)=>{
    e.preventDefault();
    setuser({...user,[e.target.id]:e.target.value})
  }
  useEffect(()=>{

  },[dispatch])
  const handlesubmit=(e)=>{
    e.preventDefault();
    dispatch(loginaction(user));
    navigate("/")
  }
  return (
    <div className="siginin">
      <h1>Login</h1>
      <div className="sin-input">
      <div>
        <label>Name</label>
        <input id="Name" onChange={(e)=>handlesignupform(e)} type="text" required/>
      </div>
      <div>
        <label>password</label>
        <input id="password" onChange={(e)=>handlesignupform(e)} type="password" required />
      </div>
      </div>
      <p>If you are not registered then  <Link to="/signup">register first</Link></p>
      <div className="si-btn">
          <button type="submit" onClick={(e)=>handlesubmit(e)} >Login</button>
      </div>
      
    </div>


  )
}
