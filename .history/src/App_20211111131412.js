import React from "react";
import { Route, Routes } from "react-router";
import {Header} from "./components"
import { Home } from "./pages";



function App() {
  return (
    <div className="wrapper">
    <Header />
    <div className="content">
    <Routes>
      <Route path="/" component={Home} exact/>
    </Routes>
    </div>
  </div>
  )
}

export default App;
