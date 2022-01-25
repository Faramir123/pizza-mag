const initialState ={
    items: [],
    isLoaded: false,
}

export const pizzasReducer = (state=initialState, action) =>{
    switch (action.type) {
        case SET_PIZZAS:
         return{
             ...state,
             isLoaded: true,
             items: action.payload,  
         }
         case SET_LOADING:
            return{
                ...state,
                isLoaded: action.payload.val
            }
    
        default:
            return state;
    } 
}