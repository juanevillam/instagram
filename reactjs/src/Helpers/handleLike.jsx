import { db, firebase } from "../Database/firebase";

export const handleLike = ( id, liked, name, postId, profilePicture, setLiked, username ) => { 
    if ( liked ) { 
        db.collection( "posts" ).doc( postId ).collection( "likes" ).add({ username, name, profilePicture, id, dateCreated: firebase.firestore.FieldValue.serverTimestamp() }); 
    } if ( !liked ) { 
        db.collection( "posts" ).doc( postId ).collection( "likes" ).where( "id", "==", id ).get().then( ( querySnapshot ) => { querySnapshot.forEach( ( doc ) => db.collection( "posts" ).doc( postId ).collection( "likes" ).doc( doc.id ).delete() )}); 
    }; 
    
    setLiked( !liked ); 
};