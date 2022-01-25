import React from 'react'
import { Categories, PizzaBlock, SortPizza} from "../components"
import { useDispatch, useSelector } from "react-redux";
import { setSortByCatrgory, setSortByType } from '../redux/actions/filter';
import { fetchPizzas } from "../redux/actions/pizzas";
import LoadingBlock from '../components/PizzaBlock/LoadingBlock';

const categoryNames =[
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

  const onSelectItem = React.useCallback((index) => {
    dispatch(setSortByCatrgory(index))
  },[])

  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortByType(type))
  },[])
  React.useEffect(()=>{
    
    dispatch(fetchPizzas(sortBy, category))

  },[sortBy, category])
   
   
   return (
        <div className="container">
        <div className="content__top">
         <Categories 
         activeCategory={category}
          onClickCategory={onSelectItem}
          items = {categoryNames}/>
       <SortPizza 
       activeSortType={sortBy}
       onClickSortType={onSelectSortType}
       items={sorts}/>
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">

         {isLoaded ? items.map(obj =><PizzaBlock
         key={obj.id}
         {...obj}
         />) : Array(12).fill(0).map((_, index)=><LoadingBlock key={index}/>)}
        
        </div>
      </div>
    )
}

export default Home
