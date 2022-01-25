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
             items: {
                 [action.payload.id] :
                 
             }
         
         }
        default:
            return state;
    } 
}

export default pizzasReducer