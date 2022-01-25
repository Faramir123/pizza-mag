import { SET_TOTAL_PRICE } from "../actions/cart";

const initialState ={
    items: {},
    totelPrice: 0,
    totalCount: 0
}

export const cartReducer = (state=initialState, action) =>{
    switch (action.type) {
        case SET_TOTAL_PRICE:
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