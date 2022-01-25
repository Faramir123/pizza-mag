import React from "react";
import { Router } from "react-router";
import {Header} from "./components"
import {Home} from "./pages";


function App() {
  return (
    <div className="wrapper">
    <Header />
    <div className="content">
    <Router path="/" component={Home} exact/>
    </div>
  </div>
  )
}

export default App;
