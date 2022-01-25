
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import PropTypes from "prop-types"

const Categories = React.memo(function Categories({activeCategory, items, onClick}) {
    
    const dispatch = useDispatch()
    const  handleSelectItem = (index) => {
  
        onClick(index)
    }
    return (
        <div className="categories">
        <ul>
          <li onClick={()=>handleSelectItem(null)} 
          className = {activeCategory === null? 'active' : ''}>Все</li>
          {items && 
          items.map((name,index)=> (
          <li 
          className = {activeCategory === index? 'active' : ''}
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

Categories.propTypes ={
  activeCategory: PropTypes.number.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClick: PropTypes.func.isRequired

}

Categories.defaultProps = {
  activeCategory: null, 
  items: [],
};
export default Categories
