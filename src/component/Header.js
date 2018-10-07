import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {
    render(){
        return(
            <header>
                <ul className="o-navbar" role="navigation">
                    <li className="a-navbar-item a-navbar-item--center">Header</li>
                    <li className="a-navbar-item">Home</li>
                    <li className="a-navbar-item">Projects</li>
                    <li className="a-navbar-item">Tools</li>
                    <li className="a-navbar-item">Contact</li>
                </ul>
            </header>
        )
    }
}

export default Header;