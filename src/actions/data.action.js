import {
    FETCH_DATA
} from './types';
import axios from 'axios';

export function fetchData(){
    //const response = {data:"data"};
    const response = axios.get('data/projet.json');
    response.then((r) => {
        console.log('Data ! : ', r);
    })

    return {
        type:FETCH_DATA,
        payload:response
    }
}

/*export function fetchData(){

    return {
        type:FETCH_DATA,
        payload:{"coucou":"coucou"}
    }

}*/

