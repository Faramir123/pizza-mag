import { SET_SORT_BY_CATEGORY, SET_SORT_BY_TYPE } from "../actions/filter";

const initialState ={
    category: null,
    sortBy: {
        type: 'popular',
        
    }
}

export const filtersReducer = (state=initialState, action) =>{
    switch (action.type) {
        case SET_SORT_BY_TYPE:
         return{
             ...state,
             sortBy: action.payload.sortBy,
         }
        case SET_SORT_BY_CATEGORY:
            return{
                ...state,
                category:action.payload.catIndex
            }
    
        default:
            return state;
    } 
}