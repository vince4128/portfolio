import React, { component } from 'react';

const Tools = (props) => {
    return(
        <section id="tools" className="section--tools o-tools">
            <div className="m-tools-icon">
                <ul className="o-tools-icon__list">
                    <li>
                        <span className="m-tools-icon__icon style1 major fa-code">                        
                            <h1>JS</h1>
                        </span>                        
                    </li>
                    <li>
                        <span className="m-tools-icon__icon style1 major fa-code">
                            <h1>React</h1>
                        </span>
                    </li>
                    <li>
                        <span className="m-tools-icon__icon style1 major fa-code">
                            <h1>Node.js</h1>
                        </span>
                    </li>
                    <li>
                        <span className="m-tools-icon__icon style1 major fa-code">
                            <h1>Express</h1>
                        </span>
                    </li>
                    <li>
                        <span className="m-tools-icon__icon style1 major fa-code">
                        <h1>MongoDB</h1>
                        </span>
                    </li>
                    <li>
                        <span className="m-tools-icon__icon style1 major fa-code">                        
                        <h1>HTML5</h1>
                        </span>                        
                    </li>
                    <li>
                        <span className="m-tools-icon__icon style1 major fa-code">                        
                        <h1>CSS3</h1>
                        </span>                        
                    </li>                    
                </ul>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum commodo arcu at metus bibendum, vel finibus dui pharetra. Aliquam non mi massa. Quisque aliquam quam vel posuere sollicitudin. Morbi eu dignissim nisl. Integer ut sem pulvinar, fringilla urna non, placerat metus. Cras feugiat diam mi, vitae auctor erat convallis nec. Pellentesque facilisis nisl eget diam ullamcorper, eget scelerisque dui viverra. Vestibulum in augue lectus.
                </p>
            </div>      
        </section>
    )
}

export default Tools;