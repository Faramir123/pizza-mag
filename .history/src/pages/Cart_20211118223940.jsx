import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import {CartItem} from '../components/index'
import { clearCart } from '../redux/actions/cart'

function Cart() {

  const dispatch = useDispatch()

  const {totalPrice, totalCount, items} =useSelector(({cart})=> cart)
  const handleClearCart = () =>{
    if(window.confirm('вы действительно хотите отчистить карзину?')){
    dispatch(clearCart())}
  }
  const pizzasGroup = Object.keys(items).map(key =>{
    return items[key].items[0]
  })

    return (
        <div className="container container--cart">
          {totalCount?
          : }
        
      </div>
    )
}

export default Cart
