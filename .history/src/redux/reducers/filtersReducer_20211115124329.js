import { SET_SORT_BY_CATEGORY, SET_SORT_BY_TYPE } from "../actions/filter";

const initialState ={
    sortBy: 'popular',
    category: 2,
}

export const filtersReducer = (state=initialState, action) =>{
    switch (action.type) {
        case SET_SORT_BY_TYPE:
         return{
             ...state,
             sortBy: action.payload
         }
        case SET_SORT_BY_CATEGORY:
            return{
                ...state,
                category:action.payload
            }
    
        default:
            return state;
    } 
}