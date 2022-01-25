
import React, { useState } from 'react'

function Categories({items, onClick}) {
    const [activeItem, setActiveItem] = useState(null)

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

export default Categories
