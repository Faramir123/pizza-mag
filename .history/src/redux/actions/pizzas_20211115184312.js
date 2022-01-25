import axios from "axios";

export const SET_PIZZAS = "SET_PIZZAS"
export const SET_LOADING = "SET_LOADING"
export const setLoaded = (val) =>({
type: SET_LOADING,
payload: val
})

export const setPizzas = (items) =>({
    type: SET_PIZZAS,
    payload: items,
})

export const fetchPizzas =() => (dispatch) => {
  dispatch(setLoaded(false))
axios.get("http://localhost:3001/pizzas").then(({data}) => {
    dispatch(setPizzas(data))
  })
}
export const fetchPizzasBy =(sortBy, category) => (dispatch) => {
  dispatch(setLoaded(false))
axios.get(`http://localhost:3001/pizzas?category=${}`).then(({data}) => {
    dispatch(setPizzas(data))
  })
}