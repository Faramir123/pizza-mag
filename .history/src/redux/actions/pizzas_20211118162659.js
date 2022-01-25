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
axios.get(`/pizzas?${category !==null ? `category=${category}`: ''}&_sort=${sortBy.type}&_order=${sortBy.order}`)
.then(({data}) => {
    dispatch(setPizzas(data))
  })
}
