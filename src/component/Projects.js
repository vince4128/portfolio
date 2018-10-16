import React, { Component } from 'react';

class Projects extends Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <section id="projects" className="section--projects o-projects">
                <article className="o-projects__webapp m-project m-project--wide">
                    <h2>Blabla</h2>
                    <div className="m-project__info">
                        <p className="m-project__info__legend">blablbalbalbabla balbalbalba</p>
                        <ul className="m-project__info__tools">
                            <li>tool</li>
                            <li>tool</li>
                            <li>tool</li>
                            <li>tool</li>
                            <li>tool</li>
                        </ul>
                    </div>
                </article>
                <article className="o-projects__sitemu m-project">
                    <h2>Blabla</h2>
                    <div className="m-project__info">
                        <p className="m-project__info__legend">blablbalbalbabla balbalbalba</p>
                        <ul className="m-project__info__tools">
                            <li>tool</li>
                            <li>tool</li>
                            <li>tool</li>
                        </ul>
                    </div>
                </article>
                <article className="o-projects__sitelars m-project">
                    <h2>Blabla</h2>
                    <div className="m-project__info">
                        <p className="m-project__info__legend">blablbalbalbabla balbalbalba</p>
                        <ul className="m-project__info__tools">
                            <li>tool</li>
                            <li>tool</li>
                            <li>tool</li>
                            <li>tool</li>
                        </ul>
                    </div>
                </article>
                <article className="o-projects__newproject m-project">
                    <h2>Blabla</h2>
                    <div className="m-project__info">
                        <p className="m-project__info__legend">blablbalbalbabla balbalbalba</p>
                        <ul className="m-project__info__tools">
                            <li>tool</li>
                            <li>tool</li>
                            <li>tool</li>
                        </ul>
                    </div>
                </article>
            </section>
        )
    }

}

export default Projects;