import Swal from "sweetalert2";
import { db, firebase } from "../Database/firebase";
import { handlePostImageToCloudinary } from "./handlePostImageToCloudinary";

export const handleSubmitPost = async( caption, imageFromFilePicker, profile, setCaption, setImageFromFilePicker, setOpenCreatePost ) => {
    setOpenCreatePost( false );

    Swal.fire({ title: "Uploading Post", text: "Please wait...", allowOutsideClick: false, didOpen: () => Swal.showLoading() });

    const imageFromFilePickerPosted = await handlePostImageToCloudinary( imageFromFilePicker );
    
    if ( imageFromFilePickerPosted ) {
        db.collection( "posts" ).add({
            caption, 
            id: profile.id,
            username: profile.username, 
            image: imageFromFilePickerPosted, 
            profileFatherId: profile.fatherId,
            profilePicture: profile.profilePicture,
            dateCreated: firebase.firestore.FieldValue.serverTimestamp(), 
        });
        Swal.close();
        Swal.fire( "Great!", "Your post has been uploaded correctly", "success" );
    };

    setCaption( "" );
    setImageFromFilePicker( null );
};
