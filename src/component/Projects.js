import React, { Component } from 'react';
import Project from './Project';
import { connect } from 'react-redux';
import { fetchData } from '../actions/data.action';

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

    componentDidMount(){
        this.props.fetchData();
    }

    renderList(){
        const data = Object.assign({}, this.props.projets.data);
        return Object.keys(data)
            .map((key) => {
                const renderData = data[key];
                return(
                    <Project onProjectSelect={(id)=>{this.showProject(id)}} project={renderData} selectedProject={this.state.selectedProject} focus={this.state.focus} closeProject={this.closeProject}></Project>
                )
            })
    }

    render(){ 

        return(
            <section id="projects" className="section--projects">
                {/*<div className={(this.state.focus ? "slideOutLeft o-projects--hide" : "slideInLeft") + " animated o-projects"}>*/}
                <div className="o-projects">
                    {this.renderList()}
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

function mapStateToProps(state){
    return {projets:state.projets}
}

export default connect(mapStateToProps, { fetchData })(Projects);