import React from "react";
import classNames from 'classnames'

const Button = ({className,outline, children}) =>{


    return(
      <button className={classNames('button', className, {
        "button--outline" : outline,
        "button--add",
      })}>
      {children}
      </button>

    )
}

export default Button