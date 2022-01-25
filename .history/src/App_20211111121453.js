import React from "react";
import { Route, Routers} from "react-router";
import {Header} from "./components"
import {Home} from "./pages";


function App() {
  return (
    <div className="wrapper">
    <Header />
    <div className="content">
      <Routers>
    <Route  path="/" component ={<Home/>} exact/>
    </Routers>
    </div>
  </div>
  )
}

export default App;
