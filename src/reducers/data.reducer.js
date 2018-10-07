import {
    FETCH_DATA
} from '../actions/type';

export default (state = {}, action ) => {
    switch(action.type){
        case FETCH_DATA:
            const data = {};
            return data;

        default:
            return state;
    }
    
}