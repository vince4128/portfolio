import React, { Component } from 'react';
import Project from './Project';

class Projects extends Component{

    constructor(props){
        super(props)
        this.state = {
            focus:false,
            selectedProject:null
        }

        this.showProject = this.showProject.bind(this);
        this.closeProject = this.closeProject.bind(this);
    }

    showProject(id){
        this.setState({focus:true,selectedProject:id});
    }

    closeProject(){        
        this.setState({focus:false,selectedProject:null});
        alert("focus " + this.state.focus + " selectedProject " + this.state.selectedProject);
    }

    render(){

        const tempProject = {
            project1:{
                id:0,
                title:"Project1",
                description:"Description du projet 1",
                tech:"html, css, js"
            },
            project2:{
                id:1,
                title:"Project2",
                description:"Description du projet 2",
                tech:"html, css, js"
            },
            project3:{
                id:2,
                title:"Project3",
                description:"Description du projet 3",
                tech:"html, css, js"
            },
            project4:{
                id:3,
                title:"Project4",
                description:"Description du projet 4",
                tech:"html, css, js"
            },
        }

        return(
            <section id="projects" className="section--projects">
                {/*<div className={(this.state.focus ? "slideOutLeft o-projects--hide" : "slideInLeft") + " animated o-projects"}>*/}
                <div className="o-projects">
                    <Project onProjectSelect={(id)=>{this.showProject(id)}} project={tempProject.project1} selectedProject={this.state.selectedProject} focus={this.state.focus} closeProject={this.closeProject}></Project>
                    <Project onProjectSelect={(id)=>{this.showProject(id)}} project={tempProject.project2} selectedProject={this.state.selectedProject} focus={this.state.focus} closeProject={this.closeProject}></Project>
                    <Project onProjectSelect={(id)=>{this.showProject(id)}} project={tempProject.project3} selectedProject={this.state.selectedProject} focus={this.state.focus} closeProject={this.closeProject}></Project>
                    <Project onProjectSelect={(id)=>{this.showProject(id)}} project={tempProject.project4} selectedProject={this.state.selectedProject} focus={this.state.focus} closeProject={this.closeProject}></Project>
                </div>
                {/*<div className={(this.state.focus ? "slideInRight m-project-focus--visible" : "") + " animated m-project-focus"}>
                    <ProjectFocus project={this.state.selectedProject}/>
        </div>*/}
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