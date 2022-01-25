import React from 'react'
import { Categories, PizzaBlock, SortPizza} from "../components"
import { useDispatch, useSelector } from "react-redux";
import { setSortByCatrgory } from '../redux/actions/filter';

const arr =[
  "Мясные",
  "Вегитарианская",
  "Гриль",
  "Острые",
  "Закрытые",
]

function Home() {
  const dispatch = useDispatch()
  const items =  useSelector(({pizzas}) => pizzas.items)
   const onSelectItem =(index) => dispatch(setSortByCatrgory(index))
    return (
        <div className="container">
        <div className="content__top">
         <Categories 
          onClick={onSelectItem}
          items = {arr}/>
       <SortPizza 
       items={[
       {name:"популярные", type: 'popular'},
       {name: "цене", type: 'price'}, 
       {name: "алфавиту", type: 'alphabet'}]}/>
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">

         {items.map(obj =><PizzaBlock
         key={obj.id}
         {...obj}
         
         />) }

        
        </div>
      </div>
    )
}

export default Home
