import { ADD_PIZZA_CART, SET_TOTAL_COUNT, SET_TOTAL_PRICE } from "../actions/cart";

const initialState ={
    items: {},
    totelPrice: 0,
    totalCount: 0,
}

const cartReducer = (state=initialState, action) =>{
    switch (action.type) {
        case ADD_PIZZA_CART:
            return{
                ...state,
                items: {
                    [action.payload.id] : [
                        !state.items[action.payload.id]?
                        action.payload:  ...state.items[action.payload.id],
                        action.payload
                    ]
                }
            
            }
        default:
            return state;
    } 
}

export default cartReducer