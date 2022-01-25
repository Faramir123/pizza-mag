import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router";
import {Header} from "./components"
import { Cart, Home } from "./pages";
import { setPizzas } from "./redux/actions/pizzas";
import store from "./redux/Store";



/* function App() {
  React.useEffect(()=>{
    axios.get("http://localhost:3000/db.json")
    .then(({data}) => {
      setPizzas(data.pizzas)
    })
  },[])

  return 
}
 */
class App extends React.Component{
  componentDidMount(){
    axios.get("http://localhost:3000/db.json")
    .then(({data}) => {
      store.dispatch(setPizzas(data.pizzas))
    })
}

  render(){
    return (
      <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" render={()=><Home items={this.props.items}/>} exact/>
        <Route path="/cart" component={Cart} exact/>
      </div>
    </div>
    )
  }
}
const mapStateToProps = (state) =>{
  return {
    items: state.pizzas.items
  }
}

const mapDispatchToProps = ()
export default connect(mapStateToProps)(App);
