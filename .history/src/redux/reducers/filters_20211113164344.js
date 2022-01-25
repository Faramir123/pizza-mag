
const initialState ={
    sortBy: 'popular',
    category: 0
}

const filters =(state=0, action) =>{
    switch (action.type) {
        case SET_SORT_BY:
         return{
             ...state,
             
         }
    
        default:
            return state;
    } 
}