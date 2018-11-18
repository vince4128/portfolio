import {
    FETCH_DATA
} from '../actions/types';

export default (state = {}, action ) => {
    switch(action.type){
        case FETCH_DATA:
            const data = action.payload;
            return data;

        default:
            return state;
    }
    
}