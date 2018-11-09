import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Header from './Header';
import Hero from './Hero';
import Project from './Projects';
import Tools from './Tools';
import Contact from './Contact';

const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait)
  }
}

class App extends Component {

  constructor(props){
      super(props);      
      this.HeaderRef = React.createRef();
      this.HeroRef = React.createRef();
      this.ProjectRef = React.createRef();
      this.ToolsRef = React.createRef();
      this.ContactRef = React.createRef();
      this.state = {
          scrollPositionY: 0,
          elementPosition: {
            Header:0,
            Hero:0,
            Project:0,
            Tools:0,
            Contact:0
          }
      }
  }

  componentDidMount(){
    return window.addEventListener('scroll', debounce(this.handleScroll, 32))
  }

  componentWillUnmount(){
    return window.removeEventListener('scroll', debounce(this.handleScroll, 32))
  }

  getPosition(){
    return {
      Header:this.HeaderRef.current.offsetTop,
      Hero:this.HeroRef.current.offsetTop,
      Project:this.ProjectRef.current.offsetTop,
      Tools:this.ToolsRef.current.offsetTop,
      Contact:this.ContactRef.current.offsetTop
    }
  }

  handleScroll = () => {
    const scrollPositionY = +window.scrollY;
    const elementPosition = this.getPosition();
    return this.setState({ scrollPositionY, elementPosition });    
  }

  render() {
    return (
      <div className="App">
        <h1>
          Scroll : {this.state.scrollPositionY}<br/>
          HeaderY : {JSON.stringify(this.state.elementPosition)}<br/>
        </h1>
        <div ref={this.HeaderRef}>
          <Header/>
        </div>
        <div ref={this.HeroRef}>
          <Hero/>
        </div>
        <div ref={this.ProjectRef}>
          <Project/>
        </div>
        <div ref={this.ToolsRef}>          
          <Tools/>
        </div>
        <div ref={this.ContactRef}>
          <Contact/>
        </div>
      </div>
    );
  }
}

export default App;
