import { db, firebase } from "../Database/firebase";

export const handleFollow = ( chatsSnapshot, followed, myProfile, myProfileFatherId, profile, profileFatherId, setFollowed ) => {
    setFollowed( !followed );
    
    const chatAlreadyExists = ( uid ) => !!chatsSnapshot?.docs.find( chat => chat.data().users.find( user => user === uid )?.length > 0 );
    
    if ( followed ) {
        if ( !chatAlreadyExists( profile?.id ) ) {
            db.collection( "chats" ).add({ users: [ myProfile.id, profile.id ] });
        };
        
        db.collection( "users" ).doc( myProfileFatherId ).collection( "following" ).add({ username: profile.username, name: profile.fullName, profilePicture: profile.profilePicture, id: profile.id, dateCreated: firebase.firestore.FieldValue.serverTimestamp() });  
        db.collection( "users" ).doc( profileFatherId ).collection( "followers" ).add({ username: myProfile.username, name: myProfile.fullName, profilePicture: myProfile.profilePicture, id: myProfile.id, dateCreated: firebase.firestore.FieldValue.serverTimestamp() });  
    } if ( !followed ) {
        db.collection( "users" ).doc( myProfileFatherId ).collection( "following" ).where( "id", "==", profile.id ).get().then( ( querySnapshot ) => { querySnapshot.forEach( ( doc ) => db.collection( "users" ).doc( myProfileFatherId ).collection( "following" ).doc( doc.id ).delete() )});  
        db.collection( "users" ).doc( profileFatherId ).collection( "followers" ).where( "id", "==", myProfile.id ).get().then( ( querySnapshot ) => { querySnapshot.forEach( ( doc ) => db.collection( "users" ).doc( profileFatherId ).collection( "followers" ).doc( doc.id ).delete() )});  
    };
    
};