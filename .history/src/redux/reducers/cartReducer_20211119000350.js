import { ADD_PIZZA_CART, CLEAR_CART, REMOVE_CART_ITEM} from "../actions/cart";


const initialState ={
    items: {},
    totalPrice: 0,
    totalCount: 0,
}

const getTotalPrice = arr => arr.reduce((sum, obj) => obj.price + sum, 0)
const getTotalSum = (obj, key) => {

    const [firstKey, ...keys] = key.split('.')
    return Object.keys(obj).reduce(
    (sum, key)=>{
        const value = keys.reduce((val, key) => {
        if(typeof val[key] === 'object'){
            return val[key]
        }else {
            return val
        }
    }, obj[firstKey])
    return sum + value
}, 0)
}

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
            const totalCount = Object.keys(newItems).reduce((sum, key)=>newItems[key].items.length + sum, 0)
            const totalPrice = Object.keys(newItems).reduce((sum, key)=>newItems[key].totalPrice + sum, 0)
            return{
                ...state,
                items: newItems,
                totalCount,
                totalPrice,
            
            };
        }
        case REMOVE_CART_ITEM:{
            const newItem = {
                ...state.items,                
            }

            const currentTotalPrice = newItem[action.payload].totalPrice;
            const currentTotalCount = newItem[action.payload].items.length;
            delete newItem[action.payload]
            return{
                ...state,
                items: newItem,
                totalPrice: state.totalPrice - currentTotalPrice,
                totalCount: state.totalCount - currentTotalCount,
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