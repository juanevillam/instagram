import { db } from "../Database/firebase";
import { setProfile } from "../Actions/auth";

export const handleGetStarted = ( e, dispatch, profile ) => {
    let getStarted = true;
    e.preventDefault();
    
    dispatch( setProfile( { ...profile, getStarted }, profile?.fatherId ) );
    db.collection( "users" ).doc( profile?.fatherId ).update({ getStarted });
};