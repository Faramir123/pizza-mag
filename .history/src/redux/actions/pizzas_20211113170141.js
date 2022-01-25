export const SET_PIZZAS = "SET_PIZZAS"

export const setSortByType = (items) =>({
    type: SET_SORT_BY_TYPE,
    payload:{
        items,
    }
})