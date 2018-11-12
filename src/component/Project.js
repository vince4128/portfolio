import React from 'react';

const Project = (props) => {

    return(
        <div className="m-project">
            <article>
                <img src="/img/project-placeholder.jpg" />
                <div>
                    <h2 className="m-project__title">{props.project.title}</h2>
                    <p className="m-project__description">{props.project.description}</p>
                    <p className="m-project__tech">{props.project.tech}</p>
                </div>                
            </article>            
        </div>
    )

}

export default Project;