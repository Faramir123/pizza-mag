import React from "react";
import { Route, Routes } from "react-router";
import {Header} from "./components"
import { Cart, Home } from "./pages";



function App() {

  const [pazzas, setPizzas] = React.useState([])

  React.useEffect(()=>{
    fetch("http://localhost:3000/db.json")
    .then(response => response.json())
    .then(setPizzas(response.pizzas))
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

export default App;
