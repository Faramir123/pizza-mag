import React from "react";
import { Route } from "react-router";
import {Header} from "./components"
import { Cart, Home } from "./pages";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setPizzas } from "./redux/actions/pizzas";






function App() {
  const dispatch = useDispatch()
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
      <Route path="/" component={Home} exact/>
      <Route path="/cart" component={Cart} exact/>
    </div>
  </div>
  )
}

export default App
