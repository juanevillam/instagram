import { types } from "../Types/types";

export const messenger = ( state = {}, action ) => {
    switch ( action.type ) {
        case types.setMessenger:
            return {
                hidden: action.payload,
            }
    
        default:
            return state;
    };
};