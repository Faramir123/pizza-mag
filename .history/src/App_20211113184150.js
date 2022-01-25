import axios from "axios";
import React from "react";
import { Route } from "react-router";
import {Header} from "./components"
import { Cart, Home } from "./pages";



function App() {
  React.useEffect(()=>{
    axios.get("http://localhost:3000/db.json")
    .then(({data}) => {
      setPizzas(data.pizzas)
    })
  },[])

  return (
    <div className="wrapper">
    <Header />
    <div className="content">
      <Route path="/" render={()=><Home items={pizzas}/>} exact/>
      <Route path="/cart" component={Cart} exact/>
    </div>
  </div>
  )
}

export default App;
