
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

    const  handleSelectItem = (index) => {
        setActiveItem(index);
    }
    return (
        <div className="categories">
        <ul>
          <li onClick={()=>handleSelectItem(null)} 
          className = {activeItem === null? 'active' : ''}>Все</li>
          {items.map((name,index)=> (
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
