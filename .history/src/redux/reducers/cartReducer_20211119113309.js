import { ADD_PIZZA_CART, CLEAR_CART, MINUS_CART_ITEM, PLUS_CART_ITEM, REMOVE_CART_ITEM} from "../actions/cart";


const initialState ={
    items: {},
    totalPrice: 0,
    totalCount: 0,
}

const _get = (obj, path) =>{
    const [firstKey, ...keys] = path.split('.')
   return keys.reduce((val, key) => {
        return val[key]
}, obj[firstKey])
}

const getTotalPrice = arr => arr.reduce((sum, obj) => obj.price + sum, 0)

const getTotalSum = (obj, path) => {
    return Object.values(obj).reduce((sum, obj)=>{
        const value = _get(obj, path)
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
            const totalCount = getTotalSum(newItems, 'items.length')
            const totalPrice = getTotalSum(newItems, 'totalPrice')
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
        case PLUS_CART_ITEM:{
            const newItem =[
                    ...state.items[action.payload].items,
                    state.items[action.payload].items[0]
                ]
            const totalCount = getTotalSum(newItem, 'items.length')
            const totalPrice = getTotalSum(newItem, 'totalPrice')
            
            return {
                ...state,
                items: {
                    ...state.items,
                    [action.payload] :{
                        items: newItem, 
                        totalPrice: getTotalPrice(newItem)
                    }
                },
                totalCount,
                totalPrice
            }}

            case MINUS_CART_ITEM:{
                const oldItems = state.items[action.payload].items
                const newObjec??Items = oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems
                const newItem = {
                    ...state.items,
                    [action.payload]:{
                    items: newObjec??Items,
                    totalPrice: getTotalPrice(newObjec??Items),
                    }

                }
                const totalCount = getTotalSum(newItem, 'items.length')
                const totalPrice = getTotalSum(newItem, 'totalPrice')    
                
                return {
                    ...state,
                    items: newItem,
                    totalCount,
                    totalPrice,
                };
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