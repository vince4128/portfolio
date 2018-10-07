import React from 'react';
import stringify from 'virtual-dom-stringify';

const BackgroundPattern = ({ children, pttrn }) => {

    return(
        <div className="section--background">
            <svg className="patterns-content">
                <defs dangerouslySetInnerHTML={{__html: stringify(pttrn)}}></defs>
                <rect width="100%" height="100%" style={{ 'fill': pttrn.url() }} />
            </svg>
            {children}
        </div>
    )

}

export default BackgroundPattern;