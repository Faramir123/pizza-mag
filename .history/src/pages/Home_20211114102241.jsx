import React from 'react'
import { Categories, PizzaBlock, SortPizza} from "../components"

function Home() {

  const dispatch = useDispatch()
  const {items} =  useSelector(({pizzas, filters}) =>{
    return {
      items: pizzas.items,
      sortBy: filters.sortBy,
    }
  } )
   React.useEffect(()=>{
     axios.get("http://localhost:3000/db.json")
     .then(({data}) => {
       dispatch(setPizzas(data.pizzas))
     })
   },[])
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
