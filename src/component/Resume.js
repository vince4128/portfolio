import React, { Component } from 'react';
import Pdf from '../cv/cv_varlet_vincent.pdf';

class Resume extends Component {

    render() {

        return (
            <a href = {Pdf} target = "_blank">
                CV
            </a>
        );

    }
}

export default Resume;