import React, { Component } from 'react';
import Project from './Project';

class Projects extends Component{

    constructor(props){
        super(props)
    }

    render(){

        const tempProject = {
            project1:{
                title:"Project1",
                description:"Description du projet 1",
                tech:"html, css, js"
            },
            project2:{
                title:"Project2",
                description:"Description du projet 2",
                tech:"html, css, js"
            },
            project3:{
                title:"Project3",
                description:"Description du projet 3",
                tech:"html, css, js"
            },
            project4:{
                title:"Project4",
                description:"Description du projet 4",
                tech:"html, css, js"
            },
        }

        return(
            <section id="projects" className="section--projects">
                <div className="o-projects">
                    <Project project={tempProject.project1}></Project>
                    <Project project={tempProject.project2}></Project>
                    <Project project={tempProject.project3}></Project>
                    <Project project={tempProject.project4}></Project>
                </div>
                <div className="polygon">
                    <svg preserveAspectRatio="none" viewBox="0 0 100 100">
                        <polygon points="100,100 100,0 0,100" opacity="1"></polygon>
                    </svg>
                </div>
            </section>
        )
    }

}

export default Projects;