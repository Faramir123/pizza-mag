import React from 'react'
import ContentLoader from "react-content-loader"

const SortPizza = React.memo(function SortPizza({items}) {

  const [showPizza, setShowPizza] = React.useState(false)
  const[activeItem,setActiveItem] = React.useState(0)
  const sortRef = React.useRef();
  const activeLabel = items[activeItem].name

  const toggleSortPizza = () => {
    setShowPizza(!showPizza)
  }
  const  handleSelectItem = (index) => {
    setActiveItem(index);
    setShowPizza(false);
  }

  const handleOutsideClick = (e) =>{
    if (!e.path.includes(sortRef.current)){
      setShowPizza(false);
    }
  };

    React.useEffect((e) => {
      document.body.addEventListener('click', handleOutsideClick)
  
}, [showPizza])

  return(
    <ContentLoader 
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="130" cy="130" r="130" /> 
    <rect x="0" y="276" rx="0" ry="0" width="280" height="24" /> 
    <rect x="0" y="319" rx="0" ry="0" width="280" height="84" /> 
    <rect x="0" y="420" rx="0" ry="0" width="90" height="27" /> 
    <rect x="123" y="414" rx="20" ry="20" width="152" height="44" />
  </ContentLoader>
  )



  return (
    <div ref={sortRef} className="sort" >
    <div className="sort__label">
      <svg
        className={showPizza? 'rotated': ''}
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
      <span onClick={toggleSortPizza}>{activeLabel}</span>
    </div>
    {showPizza &&
    <div className="sort__popup">
    <ul>
       {items && 
       items.map((obj, index)=>(
         <li 
         key={`${obj.type}_${index}`}
         className={activeItem === index? "active": ""}
         onClick={()=>handleSelectItem(index)}
         >{obj.name}</li>
       ))}
    </ul>
</div>}
  </div>
    
  )
})

export default SortPizza
