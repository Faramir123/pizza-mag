import React from 'react'
import CLASSNAMES from 'classnames'
import PropTypes from "prop-types"
import ContentLoader from "react-content-loader"


function PizzaBlock({name, imageUrl, price, sizes, types}) {

  const [chooseTypes, setChooseTypes] = React.useState(types[0])
  const [chooseSize, setChooseSize] = React.useState(sizes[0])
  const avaibleTypes = ['тонкое', 'традиционное']
  const avaibleSizes = [26,30,40]

  const handleSelectSize =(index) =>{
    setChooseSize(index)
  }
  const handleSelectTypes =(index) =>{
    setChooseTypes(index)
  }

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
  );

    return (
               <div className="pizza-block">
        <img
          className="pizza-block__image"
          src={imageUrl}
          alt="Pizza"
        />
        <h4 className="pizza-block__title">{name}</h4>
        <div className="pizza-block__selector">
          <ul>
            {avaibleTypes &&
            avaibleTypes.map((type, index)=>(
              <li
              key={`${type}_${Date.now()}`}
              className={CLASSNAMES({
                'active': chooseTypes === index,
                'disabled': !types.includes(index),
              })}
              onClick={()=>handleSelectTypes(index)}
              >{type}</li>
            ))}
          </ul>
          <ul>
         {avaibleSizes &&
         avaibleSizes.map((size, index)=>(
              <li
               key={`${size}_${Date.now()}`}
               className={CLASSNAMES({
                'active': chooseSize === index,
                'disabled': !sizes.includes(size),
              })}
              onClick={()=>handleSelectSize(index)}
            >{size} см.</li>
            ))}
          </ul>
        </div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">от {price} ₽</div>
          <div className="button button--outline button--add">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Добавить</span>
            <i>2</i>
          </div>
        </div>
        </div>
        
    );
}

PizzaBlock.propTypes ={
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  types: PropTypes.arrayOf(PropTypes.number).isRequired,
  sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
  category: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
}

PizzaBlock.defaultProps = {
  types: [],
};

export default PizzaBlock
