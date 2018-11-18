import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Project = (props) => {

    return(        
            <div id={"project-" + props.project.id} className={
                (props.selectedProject == props.project.id ? "m-project--selected" : "m-project--not-selected")             
                + " m-project"
                } onClick={()=>{props.onProjectSelect(props.project.id)}}
                >
                    <article className="m-project__thumb">
                        {/* - Full width opened project <AnchorLink href='#projects'> */}
                            <img src="/img/project-placeholder.jpg" />
                            <div>
                                <h2 className="m-project__title">{props.project.title}</h2>
                                <p className="m-project__description">{props.project.description}</p>
                                <p className="m-project__tech">{props.project.tech}</p>                               
                            </div>
                        {/* - {/* - Full width opened project </AnchorLink> */}
                        {/*<div className="m-project__focus animated fadeIn">
                            <p>Détail</p>
                        </div> - not full width opened project*/}
                        <div className="m-project__link">
                            <hr/>
                            <a className="m-button" target="_blank" href="http://www.google.fr">Voir le projet</a>
                        </div>              
                    </article>
                    {/* - Full width opened project
                    <div className="m-project__focus animated fadeIn">
                        
                        <div className="m-project__focus--left">
                            <img src="/img/project-placeholder.jpg" />
                        </div>
                        <div className="m-project__focus--right">
                            <h2 className="m-project__title">{props.project.title}</h2>
                            <p className="m-project__description">Suspendisse pellentesque eros purus, quis sodales tellus facilisis vitae. Integer tortor risus, egestas sed mollis quis, ornare vel leo. Aliquam efficitur pretium bibendum. Suspendisse blandit mauris in est aliquet, vel tempor velit ornare. In hac habitasse platea dictumst. Duis eu aliquet tortor, nec iaculis nisl. Mauris laoreet commodo euismod</p>
                            <p className="m-project__tech">{props.project.tech}</p>                                                      
                            <button onClick={()=>{props.closeProject()}} >Quitter</button>
                            <a href="http://www.google.fr">test</a> 
                        </div>                                                                       
                    </div>*/}  
            </div>
    )

}

export default Project;