
import React from 'react'
class Categories extends React.Component{
    state = {
        activeItem: 3,
    }

    handleSelectItem = index => {
        this.setState({ activeItem: index});
    }
    render(){
        const {items, onClick} = this.props;
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
}

/* function Categories({items, onClick}) {
    return (
        <div className="categories">
        <ul>
          <li onClick={onClick} className="active">Все</li>
          {items.map((name,index)=> (
          <li onClick={()=>onClick(name)} key={`${name}_${index}`}>{name}</li>
          ))}
          
         
        </ul>
      </div>
    )
}
 */
export default Categories
