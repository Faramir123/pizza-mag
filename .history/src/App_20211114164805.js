import React from "react";
import { Route } from "react-router";
import {Header} from "./components"
import { Cart, Home } from "./pages";
import { useDispatch } from "react-redux";

import { setPizzas } from "./redux/actions/pizzas";






function App() {
  const dispatch = useDispatch()
  React.useEffect(()=>{
    
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
