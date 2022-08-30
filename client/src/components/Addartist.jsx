import React from 'react'
import "./addartist.css"
import {FaTimes} from "react-icons/fa"
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { addartist } from '../redux/action/artistaction'

export const Addartist = ({artistadd,aatist}) => {
     const dispatch=useDispatch()
     const [data,setdata] = useState({
          Name:"",
          DOB:"",
          Bio:""
     })
     const handlechange=(e)=>{
          setdata({...data,[e.target.id]:e.target.value})
     }
     const handlesubmit=(e)=>{
          e.preventDefault();
          dispatch(addartist(data));
          artistadd();
     }

  return (
    <>
    {aatist?(
        <div className="addartist">
           <div className="iconx">
           <FaTimes onClick={artistadd}/>
           </div>
           <h1>Add Artist</h1>
           <hr/>
           <div className="addartist-inp">
           <div>
                <label >Artist Name</label>
                <input id="Name" onChange={(e)=>handlechange(e)} type="text" required />
           </div>
           <div>
                <label >Date of Birth</label>
                <input id="DOB" onChange={(e)=>handlechange(e)} type="date" required />
           </div>
           <div>
                <label >Bio</label>
                <textarea id="Bio" onChange={(e)=>handlechange(e)}  name="comment" >
                </textarea>
           </div>
           </div>
           <div className='btn btnartist'>
            <button onClick={artistadd}>Cancel</button>
            <button type="submit" onClick={handlesubmit}>Done</button>
           </div>
        </div>
    ):""}
    </>
    
  )
}
