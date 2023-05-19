import { types } from "../Types/types";

export const following = ( state = {}, action ) => {
    switch ( action.type ) {
        case types.setFollowing: return { ...action.payload };
        default: return state;
    };
};