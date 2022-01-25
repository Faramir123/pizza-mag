import { ADD_PIZZA_CART } from "../actions/cart";
import { SET_LOADING, SET_PIZZAS } from "../actions/pizzas";

const initialState ={
    items: [],
    isLoaded: false,
}

export const pizzasReducer = (state=initialState, action) =>{
    switch (action.type) {
        case ADD_PIZZA_CART:
         return{
             ...state,
             items: {
                 [action.payload.id] : [
                     ...state.items[action.payload.id],
                     action.payload
                 ]
             }
         
         }
        default:
            return state;
    } 
}

export default pizzasReducer