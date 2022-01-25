import axios from "axios";
import React from "react";
import { Route } from "react-router";
import {Header} from "./components"
import { Cart, Home } from "./pages";



/* s */
class App extends React.Component{

  render(){
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
}
export default App;
