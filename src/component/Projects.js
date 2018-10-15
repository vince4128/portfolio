import React, { Component } from 'react';

class Projects extends Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <section id="projects" className="section--projects o-projects">
                <article className="o-projects__webapp"></article>
                <article className="o-projects__sitemu"></article>
                <article className="o-projects__sitelars"></article>
                <article className="o-projects__newproject"></article>
            </section>
        )
    }

}

export default Projects;