import axios from "axios";

export const createsong=(formdata)=>async(dispatch)=>{
    dispatch({type:"SONGP_START"})
    try{
        const {data} = await axios.post("http://localhost:8080/songs/newsong",formdata)
        dispatch({type:"SONGP_SUCCESS",payload:data.song})
        dispatch({type:"SONGG_SUCCESS",payload:data.song})

    }
    catch(error){
        console.log(error)
        dispatch({type:"SONGP_FAIL"})
    }
}
export const allsongsaction=()=>async(dispatch)=>{
    
    dispatch({type:"SONGP_START"})
    try{
        const {data} = await axios.get("http://localhost:8080/songs/allsongs")

        dispatch({type:"SONGG_SUCCESS",payload:data.song})
    }
    catch(error){
        console.log(error)
        dispatch({type:"SONGP_FAIL"})
    }
}

export const ratingaction=(id,formdata)=>async(dispatch)=>{
    dispatch({type:"RATING_START"})
    try{
        
        const {data} = await axios.put(`http://localhost:8080/songs/review/${id}`,formdata)
        dispatch({type:"SONGG_SUCCESS",payload:data.song})
        dispatch({type: "ARTIST_SUCCESS",payload: data.artist})
        
    }
    catch(error){
        console.log(error)
        dispatch({type:"RATING_FAIL"})
    }
}

export const searchsongaction=(search)=>async(dispatch)=>{
    dispatch({type:"SONGP_START"})
    try{
        const {data} = await axios.get(`http://localhost:8080/songs/new?q=${search}`)
        dispatch({type:"SONGG_SUCCESS",payload:data.song})
        
    }
    catch(error){
        console.log(error)
        dispatch({type:"SONGP_FAIL"})
    }
}