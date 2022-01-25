import { SET_TOTAL_COUNT, SET_TOTAL_PRICE } from "../actions/cart";

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
             totelPrice: action.payload,  
         }
         case SET_TOTAL_COUNT:
            return{
                ...state,
                isLoaded: action.payload.val
            }
    
        default:
            return state;
    } 
}