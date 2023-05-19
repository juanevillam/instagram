import { db, firebase } from '../Database/firebase';

export const handlePostComment = ( comment, postId, profile, setComment ) => { 
    if ( !comment ) return; 

    db.collection( "posts" ).doc( postId ).collection( "comments" ).add({ message: comment, id: profile.id, username: profile.username, profilePicture: profile.profilePicture, dateCreated: firebase.firestore.FieldValue.serverTimestamp() } );

    setComment( "" );
};