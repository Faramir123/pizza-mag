import { ADD_PIZZA_CART} from "../actions/cart";

const initialState ={
    items: {},
    totalPrice: 0,
    totalCount: 0,
}

const getTotalPrice = arr => arr.reduce((sum, obj) => obj.price + sum, 0)

const cartReducer = (state=initialState, action) =>{
    switch (action.type) {
        case ADD_PIZZA_CART:{
            const idCurrentPizzaItems = !state.items[action.payload.id]
            ? [action.payload]
            : [...state.items[action.payload.id], action.payload]
            
            const newItems ={
                ...state.items,
                [action.payload.id] :{
                    items:  idCurrentPizzaItems,
                    totalPrice: getTotalPrice(idCurrentPizzaItems)
                }
            }
            const allPizzas = [].concat.apply([], Object.values(newItems))
            const totalPrice = allPizzas.reduce((sum, obj) => obj.price + sum, 0)
            return{
                ...state,
                items: newItems,
                totalCount: allPizzas.length,
                totalPrice,
            
            };
        }
        default:
            return state;
    } 
}

export default cartReducer