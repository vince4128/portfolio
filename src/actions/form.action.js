import {
    POST_FORM
} from './types';
import axios from 'axios';

export function postContact(data){

    const request = axios.post('http://138.197.186.223:3005/contact', data);

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