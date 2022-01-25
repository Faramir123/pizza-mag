import React from 'react'
import { Categories, PizzaBlock, SortPizza} from "../components"
import { useDispatch, useSelector } from "react-redux";
import { setSortByCatrgory } from '../redux/actions/filter';
import { fetchPizzas } from "../redux/actions/pizzas";
import LoadingBlock from '../components/PizzaBlock/LoadingBlock';

const category =[
  "Мясные",
  "Вегитарианская",
  "Гриль",
  "Острые",
  "Закрытые",
]
const sorts =[
  {name:"популярные", type: 'popular'},
  {name: "цене", type: 'price'}, 
  {name: "алфавиту", type: 'alphabet'}]

function Home() {
  const dispatch = useDispatch()
  const items =  useSelector(({pizzas}) => pizzas.items)
  const isLoaded =  useSelector(({pizzas}) => pizzas.isLoaded)
  const {category, sortBy} =  useSelector(({filters}) => filters)

  const onSelectItem = React.useCallback((index) => dispatch(setSortByCatrgory(index)), [])
  React.useEffect(()=>{

    if(!items.length){
    dispatch(fetchPizzas())
    }
  },[])
   
   
   return (
        <div className="container">
        <div className="content__top">
         <Categories 
          onClick={onSelectItem}
          items = {category}/>
       <SortPizza 
       items={sorts}/>
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">

         {isLoaded ? items.map(obj =><PizzaBlock
         key={obj.id}
         {...obj}
         />) : Array(12).fill(<LoadingBlock/>)}
        
        </div>
      </div>
    )
}

export default Home
