export const SET_SORT_BY_TYPE = 'SET_SORT_BY_TYPE'
export const SET_SORT_BY_CATEGORY = 'SET_SORT_BY_CATEGORY'


export const setSortByType = ({type, order}) =>({
    type: SET_SORT_BY_TYPE,
    payload:{
        type, order
    }
})

export const setSortByCatrgory = (catIndex) =>({
    type: SET_SORT_BY_CATEGORY,
    payload:{
        catIndex,
    }
})