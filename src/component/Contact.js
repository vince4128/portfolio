import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { postContact } from '../actions/form.action';
import { connect } from 'react-redux';
import axios from 'axios';
import LogoGit from './icon/LogoGit';
import LogoGmail from './icon/LogoGmail';
import LogoLinkedin from './icon/LogoLinkedin';
import LogoResume from './icon/LogoResume';

const sended = null;

const validate = values => {
    const errors = {}
    if(!values.lastname){
        errors.lastname = 'Veuillez renseigner votre nom'
    }
    if(!values.firstname){
        errors.firstname = 'Veuillez renseigner votre prénom'
    }
    if(!values.email){
        errors.email = 'Veuillez renseigner votre adresse e-mail'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        errors.email = 'Adresse e-mail invalide'
    }
    if(!values.objet){
        errors.objet = `Veuillez renseigner l'objet de votre message`;
    }
    if(!values.message){
        errors.message = `N'oubliez pas votre message !`;
    }
    return errors;
}

const renderField = ({
    input,
    label,
    placeholder,
    type,
    meta: {touched, error, warning}
}) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={placeholder} type={type} />
            {touched &&
                ((error && <span class="a-field--error animated fadeInTop">{error}</span>) ||
                (warning && <span>{warning}</span>))}
        </div>
    </div>
)

const onSubmit = (values) => {
    console.log('Envoi du mail ', values);
    postContact(values, (sended)=>{
        if(sended){
            //reset();
        }
    });
}

const Contact = (props) => {

    const { handleSubmit, pristine, reset, submitting, submitSucceeded } = props;

    const sended = null;

    if(submitSucceeded){
        reset();
        //sended = true;
    }

    return(        
        <section id="contact" className="section--contact o-contact">              
            <form onSubmit={handleSubmit(onSubmit)} className="o-contact__form">
            <h1>Contact</h1>
                <div>
                    <label htmlFor="lastname">Nom</label>
                    <div>
                        <Field
                            name="lastname"
                            component={renderField}
                            type="text" 
                            placeholder="Votre nom"                            
                            />
                    </div>
                </div>
                <div>
                    <label htmlFor="firstname">Prénom</label>
                    <div>
                        <Field 
                            name="firstname"
                            component={renderField}
                            type="text"
                            placeholder="Votre prénom"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="email">E-mail</label>
                    <div>
                        <Field
                            name="email"
                            component={renderField}
                            type="email"
                            placeholder="votre@mail"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="Objet">Objet</label>
                    <div>
                        <Field
                            name="objet"
                            component={renderField}
                            type="text"
                            placeholder="Objet de votre mail"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="message">Message</label>
                    <div>
                        <Field
                            name="message"
                            component="textarea"
                            placeholder="Tapez ici votre message..."
                        />
                    </div>
                </div>
                <div className="m-button-group--form">
                    <button className="m-button" type="submit" disabled={submitting}>Envoyer</button>
                    <button className="m-button" type="button" disabled={pristine || submitting} onClick={reset}>Réinitialiser</button>
                    {/*JSON.stringify(props)*/}
                </div>
                <div>
                    {sended ? "<h1>Mail envoye</h1>" : ""}
                </div>
            </form>
            <hr/>
            <div className="m-links">
                <LogoGit></LogoGit><LogoGmail></LogoGmail><LogoLinkedin></LogoLinkedin><LogoResume></LogoResume>
            </div>
            <div className="polygon">
                <svg preserveAspectRatio="none" viewBox="0 0 100 100">
                    <polygon points="0,100 100,0 0,0" opacity="1"></polygon>
                </svg>
            </div>
        </section>
    )
}

export default reduxForm({
    form:'contactForm',
    validate
})(connect(null, { postContact })(Contact));