import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route } from "react-router";
import {Header} from "./components"
import { Cart, Home } from "./pages";
import { setPizzas } from "./redux/actions/pizzas";




function App() {

  const dispatch = useDispatch()
 const hranilishe =  useSelector(({pizzas, filters}) =>{
   return {
     items: pizzas.items,
     sortBy: filters.sortBy,
   }
 } )
  React.useEffect(()=>{
    axios.get("http://localhost:3000/db.json")
    .then(({data}) => {
      dispatch(setPizzas(data.pizzas))
    })
  },[])

  return (
    <div className="wrapper">
    <Header />
    <div className="content">
      <Route path="/" render={()=><Home items={items}/>} exact/>
      <Route path="/cart" component={Cart} exact/>
    </div>
  </div>
  )
}

export default App
