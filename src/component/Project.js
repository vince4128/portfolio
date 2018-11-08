import React from 'react';

const Project = (props) => {

    return(
        <div className="m-project">
            <article>
                <img src="/img/project-placeholder.jpg" />
                <div>
                    <h1>{props.project.title}</h1>
                    <p>{props.project.description}</p>
                    <p>{props.project.tech}</p>
                </div>                
            </article>            
        </div>
    )

}

export default Project;