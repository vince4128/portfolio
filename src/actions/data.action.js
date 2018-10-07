import {
    FETCH_DATA
} from './types';

export function fetch_data(){
    const response = {data:"data"};

    return {
        type:FETCH_DATA,
        payload:response
    }
}

