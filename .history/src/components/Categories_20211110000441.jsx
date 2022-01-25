
import React from 'react'

function Categories({items, onClick}) {
    return (
        <div className="categories">
        <ul>
          <li onClick={onClick} className="active">Все</li>
          {items.map((name,index)=> (
          <li onClick={onClick} key={`${name}_${index}`}>{name}</li>
          ))}
          
         
        </ul>
      </div>
    )
}

export default Categories
