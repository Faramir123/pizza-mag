import axios from "axios";
import React from "react";
import { Route } from "react-router";
import {Header} from "./components"
import { Cart, Home } from "./pages";
import { setPizzas } from "./redux/actions/pizzas";




function App() {
  const dispatch = useDispatch()
 const{items} =  useSelector(state => state.pizzas  )
  React.useEffect(()=>{
    axios.get("http://localhost:3000/db.json")
    .then(({data}) => {
      dispatch(setPizzas(data.pizzas))
    })
  },[])

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
/* 
class App extends React.Component{
  componentDidMount(){
    axios.get("http://localhost:3000/db.json")
    .then(({data}) => {
      this.props.setPizzas(data.pizzas)
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

const mapDispatchToProps = (dispatch) =>{
  return {
    setPizzas: (items)=> dispatch(setPizzas(items)),
    dispatch
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
 */