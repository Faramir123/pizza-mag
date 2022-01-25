import {combineReducers} from 'redux'
import { cartReducer } from './cartReducer'
import {filters} from './filtersReducer'
import {pizzas} from './pizzasReducer'

const rootReducer = combineReducers({
   filters,
   pizzas: pizzasReducer,
   pizzas: cartReducer,
})

export default rootReducer