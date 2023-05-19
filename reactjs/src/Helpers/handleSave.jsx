import { db, firebase } from "../Database/firebase";

export const handleSave = ( postId, profile, saved, setSaved ) => { 
    if ( saved ) {
        db.collection( "posts" ).doc( postId ).collection( "saves" ).add( { username: profile?.username, id: profile.id ,timestamp: firebase.firestore.FieldValue.serverTimestamp() } );
    } if ( !saved ) {
        db.collection( "posts" ).doc( postId ).collection( "saves" ).where( "id", "==", profile.id ).get().then( ( querySnapshot ) => querySnapshot.forEach( ( doc ) => db.collection( "posts" ).doc( postId ).collection( "saves" ).doc( doc.id ).delete() ) ); 
    }; 

    setSaved( !saved ); 
};