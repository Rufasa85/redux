import { INCREMENT,DECREMENT,RESET,CHANGE_COLOR,MAKE_SALMON } from "./actions"; 
 const reducer =(state,action)=>{
    switch (action.type) {
        case INCREMENT:
            return {...state,count:state.count+1}

        case DECREMENT:
            return {...state,count:state.count-1}
           
        case RESET:
            return {...state,count:0}
      
        case CHANGE_COLOR:
            return {...state,color:action.payload.color}
          
        case MAKE_SALMON:
            return {...state,color:"#fa8072"}
          
    
    }
}

export default reducer;