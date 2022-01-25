
const initialState ={
    sortBy: 'popular',
    category: 0
}

const filters = (state=initialState, action) =>{
    switch (action.type) {
        case SET_SORT_BY:
         return{
             ...state,
             sortBy: action.payload
         }
    
        default:
            return state;
    } 
}