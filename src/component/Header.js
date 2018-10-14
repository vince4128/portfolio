import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import AnchorLink from 'react-anchor-link-smooth-scroll';

class Header extends Component {
    render(){
        return(
            <nav className="o-navbar">
                <ul>
                    <li>
                        <a href="">Logo</a>
                    </li>
                    <li>
                        <AnchorLink href='#home'>Home</AnchorLink>
                    </li>
                    <li>
                        <AnchorLink href='#projects'>Projects</AnchorLink>
                    </li>
                    <li>
                        <AnchorLink href='#tools'>Tools</AnchorLink>
                    </li>
                    <li>
                        <AnchorLink href='#contact'>Contact</AnchorLink>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Header;