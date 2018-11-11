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
      
      const sections = ['HeaderRef', 'HeroRef', 'ProjectRef', 'ToolsRef', 'ContactRef'];

      this.HeaderRef = React.createRef();
      this.HeroRef = React.createRef();
      this.ProjectRef = React.createRef();
      this.ToolsRef = React.createRef();
      this.ContactRef = React.createRef();

      this.state = {
          scrollPositionY: 0,
          elementPosition: {
            Header:[],
            Hero:[],
            Project:[],
            Tools:[],
            Contact:[]
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
      Header:[this.HeaderRef.current.offsetTop,this.HeroRef.current.offsetTop],
      Hero:[(this.HeroRef.current.offsetTop-100),this.ProjectRef.current.offsetTop],
      Project:[(this.ProjectRef.current.offsetTop-100),this.ToolsRef.current.offsetTop],
      Tools:[(this.ToolsRef.current.offsetTop-100),this.ContactRef.current.offsetTop],
      Contact:[(this.ContactRef.current.offsetTop-100),(this.ContactRef.current.offsetTop+1000)]
    }
  }

  checkPosition(){
    console.log('check');
    const sections = Object.assign({}, this.state.elementPosition);
    let section = "";
    Object.keys(sections)
      .map((key)=>{
        //entre quoi et quoi
        if(this.state.scrollPositionY >= this.state.elementPosition[`${key}`][0] && this.state.scrollPositionY <= this.state.elementPosition[`${key}`][1]){
          section = key;
        }
      })
    return section;
  }

  handleScroll = () => {
    const scrollPositionY = +window.scrollY;
    const elementPosition = this.getPosition();
    console.log(elementPosition);
    this.setState({ scrollPositionY, elementPosition });
    //return 
  }

  render() {
    return (
      <div className="App">
        <div ref={this.HeaderRef}>
          <Header active={this.checkPosition()}/>
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
