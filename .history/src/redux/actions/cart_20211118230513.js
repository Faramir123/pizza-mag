export const ADD_PIZZA_CART = "ADD_PIZZA_CART"
export const CLEAR_CART = "CLEAR_CART"
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM"

export const addPizzaToCart = (pizzaObj) => ({
    type: ADD_PIZZA_CART,
    payload: pizzaObj
}) 

export const clearCart = () => ({
    type: CLEAR_CART,
}) 

export const removeCartItem = (id) => ({
    type: REMOVE_CART_ITEM,
    payload: id,
}) 