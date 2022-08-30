import axios from "axios";


export const getallartist=()=>async(dispatch)=>{
    dispatch({type: "ARTIST_LOADING"})
    try{
        const {data}=await axios.get('http://localhost:8080/artist/getallartist');
        dispatch({type: "ARTIST_SUCCESS",payload: data.artist})
    }
    catch(error){
        console.log(error)
        dispatch({type: "ARTIST_ERROR"})
    }
}

export const addartist=(formdata)=>async(dispatch)=>{
    dispatch({type: "ARTIST_LOADING"})
    try{
        
        await axios.post("http://localhost:8080/artist/createArtist",formdata)
        const {data}=await axios.get('http://localhost:8080/artist/getallartist');
        dispatch({type: "ARTIST_SUCCESS",payload: data.artist})
    }
    catch(error){
        console.log(error)
        dispatch({type: "ARTIST_ERROR"})
    }
}