import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Header from './Header';
import Hero from './Hero';
import Project from './Projects';
import Tools from './Tools';
import Contact from './Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Hero/>
        <Project/>
        <Tools/>
        <Contact/>
      </div>
    );
  }
}

export default App;
