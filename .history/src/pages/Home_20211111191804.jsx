import React from 'react'
import { Categories, PizzaBlock, SortPizza} from "../components"

function Home({items}) {
    return (
        <div className="container">
        <div className="content__top">
         <Categories 
          items = {[
           "Мясные",
           "Вегитарианская",
           "Гриль",
           "Острые",
           "Закрытые",
         ]}/>
       <SortPizza 
       items={["популярные", "цене", "алфавиту"]}/>
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">

         {items.map(name, index)=>{
             
         }}

        <PizzaBlock pizzaItems={items} /> 
        </div>
      </div>
    )
}

export default Home