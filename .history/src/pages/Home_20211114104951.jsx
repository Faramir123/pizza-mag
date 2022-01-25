import React from 'react'
import { Categories, PizzaBlock, SortPizza} from "../components"
import { useDispatch, useSelector } from "react-redux";

function Home() {

  const dispatch = useDispatch()
  const {items} =  useSelector(({pizzas}) =>{
    return {
      items: pizzas.items,
    }
  } )
   
    return (
        <div className="container">
        <div className="content__top">
         <Categories 
         onClickItem={(name)=>{console.log(name)}}
          items = {[
           "Мясные",
           "Вегитарианская",
           "Гриль",
           "Острые",
           "Закрытые",
         ]}/>
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
