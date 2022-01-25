import axios from "axios";

export const SET_PIZZAS = "SET_PIZZAS"
export const SET_LOADING = "SET_LOADING"
export const setLoaded = val =>({

})

export const setPizzas = (items) =>({
    type: SET_PIZZAS,
    payload: items,
})

export const fetchPizzas =() => (dispatch) => {
axios.get("http://localhost:3001/pizzas").then(({data}) => {
    dispatch(setPizzas(data))
  })
}