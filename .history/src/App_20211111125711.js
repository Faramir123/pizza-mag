import React from "react";
import { Route } from "react-router";

import {Header} from "./components"
import {Home} from "./pages";


function App() {
  return (
    <div className="wrapper">
    <Header />
    <div className="content">
      <Switch></Switch>
    <Route />
    </div>
  </div>
  )
}

export default App;
