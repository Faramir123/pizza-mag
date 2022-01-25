import React from "react";
import classNames from 'classnames'

const Button = (props) =>{


    return(
      <button className={classNames('button', props.className)}>
      
      </button>

    )
}

export default Button