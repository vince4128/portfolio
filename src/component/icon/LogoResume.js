import React, { Component } from 'react';
import Pdf from '../../cv/cv_varlet_vincent.pdf';

class LogoResume extends Component {

    render() {

        return (
            <a href = {Pdf} target = "_blank">
                <img src="img/resume.svg" alt="Star" width="40" height="40" />
            </a>
        );

    }
}

export default LogoResume;