import {combineReducers} from 'redux'
import cart  from './cartReducer'
import {filtersReducer as filters} from './filtersReducer'
import {pizzasReducer as pizzas} from './pizzasReducer'

const rootReducer = combineReducers({
   filters,
   pizzas,
   cart,
})

export default rootReducer