import React from 'react'
import { Categories, SortPizza} from "../components"

function Home() {
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
          <div className="pizza-block">
<img
  className="pizza-block__image"
  src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
  alt="Pizza"
/>
<h4 className="pizza-block__title">Чизбургер-пицца</h4>
<div className="pizza-block__selector">
  <ul>
    <li className="active">тонкое</li>
    <li>традиционное</li>
  </ul>
  <ul>
    <li className="active">26 см.</li>
    <li>30 см.</li>
    <li>40 см.</li>
  </ul>
</div>

        </div>
      </div>
    )
}

export default Home
