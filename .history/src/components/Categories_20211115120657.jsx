
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setSortByCatrgory } from '../redux/actions/filter';

const Categories = React.memo(function Categories({activeCategoriIndex, items, onClick}) {
    
    const dispatch = useDispatch()
    const  handleSelectItem = (index) => {
        setActiveItem(index);
        onClick(index)
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
)
export default Categories
