import React from 'react'

function SortPizza({items}) {

  const [showPizza, setShowPizza] = React.useState(false)
  const[activeItem,setActiveItem] = React.useState(null)
  const sortRef = React.useRef();

  const toggleSortPizza = () => {
    setShowPizza(!showPizza)
  }
  const  handleSelectItem = (index) => {
    setActiveItem(index);
  }

  const handleOutsideClick = (e) =>{
    if (!e.path.includes(sortRef.current)){
      setShowPizza(false);
    }
  };

    React.useEffect((e) => {
      document.body.addEventListener('click', handleOutsideClick)
  
}, [showPizza])
  

  return (
    <div ref={sortRef} className="sort" >
    <div className="sort__label">
      <svg
        width="10"
        height="6"
        viewBox="0 0 10 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
          fill="#2C2C2C"
        />
      </svg>
      <b>Сортировка по:</b>
      <span onClick={toggleSortPizza}>популярности</span>
    </div>
    {showPizza &&
    <div className="sort__popup">
    <ul>
       {items && 
       items.map((name, index)=>{
         <li 
         key={`${name}_${index}`}
         className={activeItem === index? "active": ""}
         onClick={()=>handleSelectItem(index)}
         >{name}</li>
       })}

{/* {items && 
          items.map((name,index)=> (
          <li 
          key={`${name}_${index}`}
          className = {activeItem === index? 'active' : ''}
          onClick={()=>handleSelectItem(index)} 
          
          >
              {name}</li>
          ))} */}
    </ul>
</div>}
  </div>
    
  )
}

export default SortPizza
