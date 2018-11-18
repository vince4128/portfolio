import React from 'react';
import axios from 'axios';

const Contact = (props) => {
    return(
        <section id="contact" className="section--contact o-contact">            
            <form className="o-contact__form">
            <h1>Contact</h1>
                <fieldset>                    
                    <label htmlFor="nom">Nom</label>
                    <input type="text" placeholder="Votre nom"></input>
                    <label htmlFor="prenom">Prénom</label>
                    <input type="text" placeholder="Votre prénom"></input>
                    <label htmlFor="email">Email de contact</label>
                    <input type="mail" placeholder="Votre email de contact"></input>
                    <label htmlFor="objet">Objet</label>
                    <input type="text" placeholder="Objet du message"></input>
                    <label htmlFor="message">Message</label>
                    <textarea placeholder="Votre message"></textarea>
                </fieldset>
                <button className="m-button" type="submit">Envoyer</button>
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