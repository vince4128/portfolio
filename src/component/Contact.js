import React from 'react';

const Contact = (props) => {
    return(
        <section id="contact" className="section--contact o-contact">            
            <form className="o-contact__form">
            <h1>Contact</h1>
                <fieldset>                    
                    <label for="nom">Nom</label>
                    <input type="text"></input>
                    <label>Prénom</label>
                    <input type="text"></input>
                    <label>Mail de contact</label>
                    <input type="mail"></input>
                </fieldset>
                <fieldset>
                    <label>Message</label>
                    <textarea></textarea>
                </fieldset>
                <button type="submit">envoyer</button>
            </form>
            <div className="polygon">
                <svg preserveAspectRatio="none" viewBox="0 0 100 100">
                    <polygon points="0,100 100,0 0,0" opacity="1"></polygon>
                </svg>
            </div>
        </section>
    )
}

export default Contact;