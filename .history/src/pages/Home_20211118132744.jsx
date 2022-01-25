import React from 'react'
import { Categories, PizzaBlock, SortPizza} from "../components"
import { useDispatch, useSelector } from "react-redux";
import { setSortByCatrgory, setSortByType } from '../redux/actions/filter';
import { fetchPizzas } from "../redux/actions/pizzas";
import LoadingBlock from '../components/PizzaBlock/LoadingBlock';
import { addPizzaToCart } from '../redux/actions/cart';

const categoryNames =[
  "Мясные",
  "Вегитарианская",
  "Гриль",
  "Острые",
  "Закрытые",
]
const sorts =[
  {name:"популярные", type: 'popular', order: 'desc'},
  {name: "цене", type: 'price', order: 'desc'}, 
  {name: "алфавиту", type: 'name', order: 'asc'}]

function Home() {
  const dispatch = useDispatch()
  const items =  useSelector(({pizzas}) => pizzas.items)
  const cartItems =  useSelector(({pizzas}) => pizzas.items)
  const isLoaded =  useSelector(({cart}) => cart.items)
  const {category, sortBy} =  useSelector(({filters}) => filters)

  const handleaddPizzaToCart = (obj) =>{
    dispatch(addPizzaToCart(obj))
  }
  const onSelectItem = React.useCallback((index) => {
    dispatch(setSortByCatrgory(index))
  },[dispatch])

  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortByType(type))
  },[dispatch])
  React.useEffect(()=>{
    
    dispatch(fetchPizzas(sortBy, category))

  },[sortBy, category, dispatch])
   
   
   return (
        <div className="container">
        <div className="content__top">
         <Categories 
         activeCategory={category}
          onClickCategory={onSelectItem}
          items = {categoryNames}/>
       <SortPizza 
       activeSortType={sortBy.type}
       onClickSortType={onSelectSortType}
       items={sorts}/>
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">

         {isLoaded ? items.map(obj =><PizzaBlock
         onClickAddPizza={handleaddPizzaToCart}
         key={obj.id}
         {...obj}
         addedCount={cartItems[obj.id].length}
         />) : Array(12).fill(0).map((_, index)=><LoadingBlock key={index}/>)}
        
        </div>
      </div>
    )
}

export default Home
