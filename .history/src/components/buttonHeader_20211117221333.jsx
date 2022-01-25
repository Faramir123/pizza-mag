import React from "react";
import classNames from 'classnames'

const Button = ({className,outline,addbutton, children}) =>{


    return(
      <button className={classNames('button', className, {
        "button--outline" : outline,
        "button--add": addbutton,
      })}>
      {children}
      </button>

    )
}

export default Button