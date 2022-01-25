import {combineReducers} from 'redux'
import { cartReducer } from './cartReducer'
import {filtersReducer} from './filtersReducer'
import {pizzasReducer} from './pizzasReducer'

const rootReducer = combineReducers({
   filters: filtersReducer,
   pizzas: pizzasReducer,
   pizzas: cartReducer,
})

export default rootReducer