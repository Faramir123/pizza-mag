
import React from 'react'
import PropTypes from "prop-types"

const Categories = React.memo(function Categories({activeCategory, items, onClickCategory}) {
    return (
        <div className="categories">
        <ul>
          <li onClick={()=>onClickCategory(null)} 
          className = {activeCategory === null? 'active' : ''}>Все</li>
          {items && 
          items.map((name,index)=> (
          <li 
          className = {activeCategory === index? 'active' : ''}
          onClick={()=>onClickCategory(index)} 
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
  activeCategory: PropTypes.oneOf([PropTypes.number,PropTypes.number])б
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickCategory: PropTypes.func

}

Categories.defaultProps = {
  activeCategory: null, 
  items: [],
};
export default Categories
