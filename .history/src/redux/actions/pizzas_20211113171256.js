export const SET_PIZZAS = "SET_PIZZAS"

export const setSortByType = (items) =>({
    type: SET_PIZZAS,
    payload:{
        items,
    }
})