
import "./addingsong.css"
import Multiselect from 'multiselect-react-dropdown';
import { useState } from "react";
import { Addartist } from "./Addartist";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createsong } from "../redux/action/songsaction";


export const Addingsong = ({isrender}) => {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const [aatist,setaatist]=useState(false)
    const artistadd=()=>{
        setaatist(!aatist)
    }
    const {artist}=useSelector((state)=>state.artist);
    let options=[]
    if(artist){
        for(let i=0; i<artist.length; i++){
            options.push(artist[i].Name)
        }
    }
    const [art,setart]=useState([])
    const [song,setsong]=useState({
        Name:"",
        DateOfRelease:"",
        CoverIMG:"",
    })
    const handlechange=(e)=>{
        setsong({...song,[e.target.id]:e.target.value})
    }
    const data={...song,Artist:art[0]}
    const handlesubmit=(e)=>{
        e.preventDefault();
        dispatch(createsong(data))
        isrender()
        navigate("/")
    }
  return (
    <div className="addingsong">
        <h1>Adding a new Song</h1>

        <div className="addings-input">
            <div>
                <label>Song Name</label>
                <input id="Name" onChange={(e)=>handlechange(e)} type="text" required/>
            </div>
            <div>
                <label>Date of Release</label>
                <input id="DateOfRelease" onChange={(e)=>handlechange(e)} type="date" required/>
            </div>
            <div>
                <label>coverURL</label>
                <input id="CoverIMG" onChange={(e)=>handlechange(e)} type="text" required/>
            </div>
            <div>
                <label>Artists</label>
                
                <Multiselect
                isObject={false}
                onRemove={function noRefCheck(e){setart(art.filter(item => item.name !== e));}}
                onSelect={function noRefCheck(e){setart((prev)=>[...prev,e])}}
                options={options}
                />
                <button onClick={artistadd}>Add Artist</button>
                <div className="abs">
                    <Addartist artistadd={artistadd} aatist={aatist} />
                </div>
                
            </div>
            
        </div>
        <div className="btn">
                <button onClick={()=>navigate("/")}>Cancel</button>
                <button type="submit" onClick={(e)=>handlesubmit(e)}>Save</button>
            </div>
    </div>
  )
}
