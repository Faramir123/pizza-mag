export const SET_TOTAL_PRICE = "BASKET::SET_TOTAL_PRICE"
export const SET_TOTAL_COUNT = "BASKET::SET_TOTAL_COUNT"
export const ADD_PIZZA_CART = "ADD_PIZZA_CART"

export const addPizzaToCart = (pizzaObj) => ({
    type: ADD_PIZZA_CART,
    payload: pizzaObj
}) 