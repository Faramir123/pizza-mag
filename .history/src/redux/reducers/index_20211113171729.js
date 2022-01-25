import {createStore, combineReducers} from 'redux'
import {filtersReducer} from './reducers/filtersReducer'
import {pizzasReducer} from './reducers/pizzasReducer'

const rootReducer = combineReducers({
   filtersReducer,
   pizzasReducer,
})