import axios from "axios";

export const registeruser=(formdata)=>async(dispatch)=>{
        dispatch({type:"AUTH_START"})

    try{
        const {data}=await axios.post("http://localhost:8080/auth/register",formdata)
        dispatch({type:"AUTH_SUCCESS",data:data})
    }
    
    
        catch(error){
            console.log(error);
            dispatch({type:"AUTH_FAIL"})
        }
    
}

export const loginaction=(formdata)=>async(dispatch)=>{
    dispatch({type:"AUTH_START"})

    try{
        const {data}=await axios.post("http://localhost:8080/auth/login",formdata)
        dispatch({type:"AUTH_SUCCESS",data:data})
    }
    catch(error){
        console.log(error);
        dispatch({type:"AUTH_FAIL"})
    }
    
}

export const logoutaction=()=>async(dispatch)=>{
    dispatch({type:"AUTH_LOGOUT"})
}