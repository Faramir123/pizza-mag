import {combineReducers} from 'redux'
import { cartReducer as cart } from './cartReducer'
import {filtersReducer as filters} from './filtersReducer'
import {pizzas} from './pizzasReducer'

const rootReducer = combineReducers({
   filters,
   pizzas,
   cart,
})

export default rootReducer