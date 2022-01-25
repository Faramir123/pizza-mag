export const ADD_PIZZA_CART = "ADD_PIZZA_CART"
export const CLEAR_CART = "CLEAR_CART"

export const addPizzaToCart = (pizzaObj) => ({
    type: ADD_PIZZA_CART,
    payload: pizzaObj
}) 

export const clearCart = (pizzaObj) => ({
    type: ADD_PIZZA_CART,
    payload: pizzaObj
}) 