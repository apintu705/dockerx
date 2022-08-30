
export const artistreducer=(state={artist:null,loading:false,error:false},action)=>{
    switch(action.type){
        case "ARTIST_LOADING":
            return {
                ...state,
                loading:true, 
                error:false
            }

        case "ARTIST_SUCCESS":{
            return {
                ...state,
                artist:action.payload,
                loading:false, 
                error:false
            }
        }
        case "ARTIST_ERROR":{
            return {
                ...state,
                loading:false, 
                error:true,
            }
        }
        default:
            return {
                ...state,
            }
    }
}