export const SET_PIZZAS = "SET_PIZZAS"

export const SetPizzas = (items) =>({
    type: SET_PIZZAS,
    payload:{
        items,
    }
})