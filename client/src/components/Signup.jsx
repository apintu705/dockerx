import React from 'react'
import { useState } from 'react'
import "./signin.css"
import {useDispatch} from "react-redux"
import { registeruser } from '../redux/action/authaction'
import {useNavigate,Link} from "react-router-dom"


export const Signup = () => {
  const dispatch=useDispatch();
  const navigate = useNavigate()
  const [user,setuser]=useState({
    Name:"",
    email:"",
    password:"",
  })
  const handlesignupform=(e)=>{
    e.preventDefault();
    setuser({...user,[e.target.id]:e.target.value})
  }
  const handlesubmit=(e)=>{
    e.preventDefault();
    dispatch(registeruser(user));
    navigate("/")
  }
  

  return (
    <div className="siginin">
      <h1>Register</h1>
      <div className="sin-input">
      <div>
        <label>Name</label>
        <input id="Name" onChange={(e)=>handlesignupform(e)} type="text" required/>
      </div>
      <div>
        <label>Email</label>
        <input id="email" onChange={(e)=>handlesignupform(e)} type="email" required/>
      </div>
      <div>
        <label>password</label>
        <input id="password" onChange={(e)=>handlesignupform(e)} type="password" required placeholder="must greater than 6 chars"/>
      </div>
      </div>
      <p>If you are not registered then  <Link to="/signin">Login</Link></p>
      <div className="si-btn">
          <button type="submit" onClick={handlesubmit}>register</button>
      </div>
      
    </div>


  )
}

