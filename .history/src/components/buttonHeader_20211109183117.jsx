import React from "react";
import classNames from 'classnames'

const Button = ({className}) =>{


    return(
      <button className={classNames('button', className)}>
      {props.children}
      </button>

    )
}

export default Button