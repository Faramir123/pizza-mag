import { SET_LOADING, SET_PIZZAS } from "../actions/pizzas";

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
             items: action.payload.sortBy,  
         }
         case SET_LOADING:
            return{
                ...state,
                isLoaded: action.payload
            }
    
        default:
            return state;
    } 
}