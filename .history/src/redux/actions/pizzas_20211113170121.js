export const SET_PIZZAS = "SET_PIZZAS"

export const setSortByType = (sortBy) =>({
    type: SET_SORT_BY_TYPE,
    payload:{
        sortBy,
    }
})