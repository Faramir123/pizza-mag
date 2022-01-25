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

export const fetchPizzas =(sortBy, category) => (dispatch) => {
  dispatch(setLoaded(false))
axios.get(`http://localhost:3001/pizzas?category=${category}_sort=`).then(({data}) => {
    dispatch(setPizzas(data))
  })
}
/* export const fetchPizzasBy =(sortBy, category) => (dispatch) => {
  dispatch(setLoaded(false))
axios.get(`http://localhost:3001/pizzas?category=${category}`).then(({data}) => {
    dispatch(setPizzas(data))
  })
} */