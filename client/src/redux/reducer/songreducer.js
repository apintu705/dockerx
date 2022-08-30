
export const addsongreducer=(state={songs:null,loading:false,error:false},action)=>{
    switch(action.type){
        case "SONGP_LOADING":
            return {
                ...state,
                loading:true,
                error:false
            }
        case "SONGG_SUCCESS":
            return {
                ...state,
                loading:false,
                error:false,
                songs:action.payload
            }

        case "SONGP_SUCCESS":
            return {
                ...state,
                loading:false,
                error:false,
                
            }

        case "SONGP_ERROR":
            return{
                ...state,
                loading:false,
                error:true,
            }
        default:
        return {
            ...state,
        }
    }
}