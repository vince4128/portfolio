import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait)
    }
}

class Header extends Component {

    constructor(props){
        super(props);
        this.state = {
            scrollPositionY: 0,
            toggleMenuResp:false
        }
    }

    toggleMenuResp(){
        this.setState({toggleMenuResp: !this.state.toggleMenuResp})
    }

    closeMenuResp(){
        //alert('click');
        if(this.state.toggleMenuResp){
            this.setState({toggleMenuResp:false})
        }
    }

    checkClass(toCheck){
        return toCheck === this.props.active ? true : false;        
    }

    componentDidMount(){
        return window.addEventListener('scroll', debounce(this.handleScroll, 32))
    }

    componentWillUnmount(){
        return window.removeEventListener('scroll', debounce(this.handleScroll, 32))
    }

    handleScroll = () => {
        const scrollPositionY = +window.scrollY;
        return this.setState({ scrollPositionY })
    }

    render(){

        const isScrolling = !!this.state.scrollPositionY

        return(
            <nav className={((isScrolling) ? 'o-navbar o-navbar--scrolled' : 'o-navbar') + (this.state.toggleMenuResp ? ' o-navbar--open':'')}>
                <div className={(this.state.toggleMenuResp ? "open" : "") + " o-navbar__toggle"} onClick={()=>{this.toggleMenuResp()}}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div onClick={()=>{this.closeMenuResp()}} className={(this.state.toggleMenuResp ? " o-navbar__overlay" : "")}></div>
                <ul>
                    <li>
                        <a href="">Logo</a>
                    </li>
                    <li onClick={()=>{this.closeMenuResp()}} className={(this.checkClass('Hero') ? 'a-navbar-item--active' : '') + " a-navbar-item--home a-navbar-item"}>
                        <AnchorLink href='#home'>Home</AnchorLink>
                    </li>
                    <li onClick={()=>{this.closeMenuResp()}} className={(this.checkClass('Project') ? 'a-navbar-item--active' : '') + " a-navbar-item"}>
                        <AnchorLink href='#projects'>Projects</AnchorLink>
                    </li>
                    <li onClick={()=>{this.closeMenuResp()}} className={(this.checkClass('Tools') ? 'a-navbar-item--active' : '') + " a-navbar-item"}>
                        <AnchorLink href='#tools'>Tools</AnchorLink>
                    </li>
                    <li onClick={()=>{this.closeMenuResp()}} className={(this.checkClass('Contact') ? 'a-navbar-item--active' : '') + " a-navbar-item"}>
                        <AnchorLink href='#contact'>Contact</AnchorLink>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Header;