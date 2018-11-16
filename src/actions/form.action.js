import {
    POST_FORM
} from './types';
import axios from 'axios';

export function postContact(data){

    const request = axios.post('http://37.187.25.65/html5/sendmail/sendmail.php', data);

    request.then((r) => {
        console.log('formulaire envoyé ', r);
    })

    request.catch((error) => {
        console.log('erreur du formulaire : ', error);
    })

    return {
        type:POST_FORM,
        payload:request
    }

}