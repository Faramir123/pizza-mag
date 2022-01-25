import React from "react";
import { Route, Routes } from "react-router";
import {Header} from "./components"
import {Home} from "./pages";


function App() {
  return (
    <div className="wrapper">
    <Header />
    <div className="content">
    <Routes exect path="/" component ={<Home/>} />
    </div>
  </div>
  )
}

export default App;
