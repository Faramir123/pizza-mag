import React from 'react'
import ContentLoader from "react-content-loader"

function LoadingBlock() {
    return(
        <ContentLoader 
        className="pizza-block"
        speed={2}
        width={280}
        height={460}
        viewBox="0 0 280 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <circle cx="130" cy="130" r="130" /> 
        <rect x="0" y="273" rx="3" ry="3" width="280" height="24" /> 
        <rect x="0" y="310" rx="6" ry="6" width="280" height="84" /> 
        <rect x="0" y="418" rx="3" ry="3" width="90" height="27" /> 
        <rect x="123" y="408" rx="25" ry="25" width="140" height="46" />
      </ContentLoader>
      );
}

export default LoadingBlock
