import { SET_PIZZAS } from "../actions/pizzas";

const initialState ={
    items: []
}

const pizzas = (state=initialState, action) =>{
    switch (action.type) {
        case SET_PIZZAS:
         return{
             ...state,
             sortBy: action.payload
         }
    
        default:
            return state;
    } 
}