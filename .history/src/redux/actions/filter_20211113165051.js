export const SET_SORT_BY = 'SET_SORT_BY'


export const sortByCategory = (sortBy) =>({
    type: SET_SORT_BY,
    payload:{
        sortBy,
    }
})