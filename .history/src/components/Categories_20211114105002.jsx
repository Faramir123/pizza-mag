
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setSortByCatrgory } from '../redux/actions/filter';

function Categories({items, onClickItem}) {
    const [activeItem, setActiveItem] = useState(null)
    const dispatch = useDispatch()
    const  handleSelectItem = (index) => {
        setActiveItem(index);
        onClickItem(index)
        dispatch(setSortByCatrgory(index))
    }
    return (
        <div className="categories">
        <ul>
          <li onClick={()=>handleSelectItem(null)} 
          className = {activeItem === null? 'active' : ''}>Все</li>
          {items && 
          items.map((name,index)=> (
          <li 
          className = {activeItem === index? 'active' : ''}
          onClick={()=>handleSelectItem(index)} 
          key={`${name}_${index}`}
          >
              {name}</li>
          ))}
          
         
        </ul>
      </div>
    )
}

export default Categories
