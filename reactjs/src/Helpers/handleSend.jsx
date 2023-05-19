import { db, firebase } from "../Database/firebase";
import { handlePostImageToCloudinary } from "./handlePostImageToCloudinary";

export const handleSendLike = ( e, chatId, username, id ) => {
    e.preventDefault();

    db.collection( "chats" ).doc( chatId ).collection( "messages" ).add({ like: true, username, id, dateCreated: firebase.firestore.FieldValue.serverTimestamp() });
};

export const handleSendMessage = ( e, chatId, message, username, id, setMessage ) => {
    e.preventDefault();

    if ( message.replace(/ /g,'').length === 0 ) {
        return;
    }

    db.collection( "chats" ).doc( chatId ).collection( "messages" ).add({ message, username, id, dateCreated: firebase.firestore.FieldValue.serverTimestamp() });
    setMessage( "" );
};

export const handleSendImageToReader = ( e, reader, setImagefromFilePicker ) => {     
    if ( e.target.files[0] ) {
        reader.readAsDataURL( e.target.files[0] );
    };

    reader.onload = ( readerEvent ) => {
        setImagefromFilePicker( readerEvent.target.result );
    };
};

export const handleSendImage = async( chatId, username, id, imagefromFilePicker, setImagefromFilePicker, setPostingImage ) => {
    setPostingImage( true );
    
    const imagefromFilePickerPosted = await handlePostImageToCloudinary( imagefromFilePicker );
    
    if ( imagefromFilePickerPosted ) {
        db.collection( "chats" ).doc( chatId ).collection( "messages" ).add({ image: imagefromFilePickerPosted, username, id, dateCreated: firebase.firestore.FieldValue.serverTimestamp() });
    };
    
    setPostingImage( false );
    setImagefromFilePicker( null );
};

export const handleSendAudio = async( chatId, username, profilePicture, id, blob ) => {    
    var reader = new FileReader();
    reader.readAsDataURL(blob); 
    reader.onloadend = function() {
        var base64data = reader.result;                
        blob = base64data;
    };
    
    const audioFromLocalRecorderRecorded = await handlePostImageToCloudinary( blob );
    
    if ( audioFromLocalRecorderRecorded ) {
        db.collection( "chats" ).doc( chatId ).collection( "messages" ).add({ audio: audioFromLocalRecorderRecorded, audioImage: profilePicture, username, id, dateCreated: firebase.firestore.FieldValue.serverTimestamp() });
    };
};