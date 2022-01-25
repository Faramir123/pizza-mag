import {createStore, combineReducers} from 'redux'


const rootReducer = combineReducers({
    filtersReducer,
    pizzasReducers
})

const store = createStore()


export default store