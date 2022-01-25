import React from "react"
import logopizza from '../accets/img/pizza-logo.svg'
import Button from "./buttonHeader"

function Header() {

    return(
        <div className="header">
      <div className="container">
        <div className="header__logo">
          <img width="38" src={logopizza} alt="Pizza logo" />
          <div>
            <h1>React Pizza</h1>
            <p>самая вкусная пицца во вселенной</p>
          </div>
        </div>
        <div className="header__cart">
            
          
           
          </a>
        </div>
      </div>
    </div>
    )
    
}

export default Header