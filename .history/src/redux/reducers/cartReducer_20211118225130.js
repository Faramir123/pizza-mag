import { ADD_PIZZA_CART, CLEAR_CART, REMOVE_CART_ITEM} from "../actions/cart";

const initialState ={
    items: {},
    totalPrice: 0,
    totalCount: 0,
}

const getTotalPrice = arr => arr.reduce((sum, obj) => obj.price + sum, 0)

/* const filterOnTwoParametrs = (currentItem, allArrayItems) => arr.includes(currentItem.type==arr[0].type) */

const cartReducer = (state=initialState, action) =>{
    switch (action.type) {
        case ADD_PIZZA_CART:{
            /* const currentItem =action.payload */

            const idCurrentPizzaItems = !state.items[action.payload.id]
            ? [action.payload]
            : [...state.items[action.payload.id].items, action.payload]
            
            const newItems ={
                ...state.items,
                [action.payload.id] :{
                    items:  idCurrentPizzaItems,
                    totalPrice: getTotalPrice(idCurrentPizzaItems)
                }
            }
            const items = Object.values(newItems).map(obj => obj.items)
            const allPizzas = [].concat.apply([], items)
            const totalPrice = getTotalPrice(allPizzas)
            return{
                ...state,
                items: newItems,
                totalCount: allPizzas.length,
                totalPrice,
            
            };
        }
        case REMOVE_CART_ITEM:{
            return{
                ...state,
                items: []
            }
        }
        case CLEAR_CART:{
            return{
                ...state,
                items: {},
                totalPrice: 0,
                totalCount: 0,
            }
        }
        default:
            return state;
    } 
}

export default cartReducer