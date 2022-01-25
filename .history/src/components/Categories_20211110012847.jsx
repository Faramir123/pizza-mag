
import React, { useState } from 'react'
/* class Categories extends React.Component{
    state = {
        activeItem: null,
    }

    handleSelectItem = index => {
        this.setState({ activeItem: index});
    }
    render(){
        const {items, onClick} = this.props;
        console.log(this.state)
        return (
            <div className="categories">
            <ul>
                {items.map((name,index)=> (
              <li
              className = {this.state.activeItem === index? 'active' : ''}
              onClick={()=>this.handleSelectItem(index)} key={`${name}_${index}`}>{name}</li>
              ))}
              
             
            </ul>
          </div>
        )
    }
} */

function Categories({items, onClick}) {
    const [activeItem, setActiveItem] = useState(null)

    return (
        <div className="categories">
        <ul>
          <li onClick={onClick} className="active">Все</li>
          {items.map((name,index)=> (
          <li 
          className = {activeItem === index? setActiveItem('active') : ''}
          onClick={()=>onClick(name)} 
          key={`${name}_${index}`}>
              {name}</li>
          ))}
          
         
        </ul>
      </div>
    )
}

export default Categories
