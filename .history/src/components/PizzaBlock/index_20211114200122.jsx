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