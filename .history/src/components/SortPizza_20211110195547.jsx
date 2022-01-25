import React from 'react'

function SortPizza() {

  const [showPizza, setShowPizza] = React.useState(false)

  const handleShowMenuPizza (e) =>{
    
  }

  return (
    <div className="sort__popup">
              <ul>
                <li className="active">популярности</li>
                <li>цене</li>
                <li>алфавиту</li>
              </ul>
            </div>
  )
}

export default SortPizza
