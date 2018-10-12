import React, { component } from 'react';
import BackgroundPatterns from './pattern/BackgroundPattern';
import lines from 'svg-patterns/p/lines';

const Hero = (props) => {

    const pattern = lines({
        stroke: '#efefef',
        background: '#dfdbe5',
        orientations: [45]
    });

    return(
        <section className="section--hero" id="home">
            {/*<BackgroundPatterns pttrn={pattern}>*/}
                <h1>Hero</h1>
            {/*</BackgroundPatterns>*/}
        </section>
    )
}

export default Hero;