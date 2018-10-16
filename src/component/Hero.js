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
                <div className="m-hero">
                    <h1>John Doe</h1>
                    <h2>fdgfdg ghfghf fghfghh</h2>
                </div>                
            {/*</BackgroundPatterns>*/}
        </section>
    )
}

export default Hero;