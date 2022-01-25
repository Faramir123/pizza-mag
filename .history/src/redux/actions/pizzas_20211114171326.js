import axios from "axios";

export const SET_PIZZAS = "SET_PIZZAS"

export const setPizzas = (items) =>({
    type: SET_PIZZAS,
    payload: items,
})

export const fetchPizzas =() => (dispatch, getState) => {
axios.get("http://localhost:3001/pizzas").then(({data}) => {
    dispatch(setPizzas(data))
  })
}