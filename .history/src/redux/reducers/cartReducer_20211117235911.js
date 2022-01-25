import { ADD_PIZZA_CART, SET_TOTAL_COUNT, SET_TOTAL_PRICE } from "../actions/cart";

const initialState ={
    items: {},
    totelPrice: 0,
    totalCount: 0,
}

const cartReducer = (state=initialState, action) =>{
    switch (action.type) {
        case ADD_PIZZA_CART:{
            const newItems ={
                ...state.items,
                [action.payload.id] : 
                    !state.items[action.payload.id]
                    ? [action.payload]
                    : [...state.items[action.payload.id], action.payload],
            }
            return{
                ...state,
                items: newItems,
                totalCount: [].concat.apply([], Object.values(newItems)).length
            };
        }
        default:
            return state;
    } 
}

export default cartReducer