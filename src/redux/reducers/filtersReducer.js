import { SET_SORT_BY_CATEGORY, SET_SORT_BY_TYPE } from "../actions/filter";

const initialState ={
    category: null,
    sortBy: {
        type: 'popular',
        order: 'desc'
    }
}

const filtersReducer = (state=initialState, action) =>{
    switch (action.type) {
        case SET_SORT_BY_TYPE:
         return{
             ...state,
             sortBy: action.payload,
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

export default filtersReducer