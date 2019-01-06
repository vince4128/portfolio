import {
    POST_FORM
} from './types';
import axios from 'axios';

export function postContact(data,callback){

    const request = axios.post('http://138.197.186.223:3005/contact', data);

    request.then((r) => {
        console.log('formulaire envoyé ', r);
        callback(true);
    })

    request.catch((error) => {
        console.log('erreur du formulaire : ', error);
        callback(false);
    })

    return {
        type:POST_FORM,
        payload:request
    }

}