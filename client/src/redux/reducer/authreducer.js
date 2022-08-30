
export const authreducer=(state={authdata:null,loading:false,error:false},action)=>{
    switch(action.type){
        case "AUTH_START":
        
            return {
                ...state,
                loading:true, 
                error:false
            }
        
        case "AUTH_SUCCESS":
            
            localStorage.setItem("profile", JSON.stringify({...action?.data}));
            return {
                ...state,
                authdata:action.data,
                loading:false, 
                error:false
            }

            case "AUTH_LOGOUT":
                localStorage.removeItem('profile')
                return {
                    ...state,
                    loading:false,
                    error:false,
                    authdata:null,
                }
        case "AUTH_FAIL":
            
            return {
                ...state,
                loading:false, 
                error:true,
            }

        default:
            return {
                ...state
            }
    }
}