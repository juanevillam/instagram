import Swal from "sweetalert2";
import { db } from "../Database/firebase";
import { setProfile } from "../Actions/auth";
import { handlePostImageToCloudinary } from "./handlePostImageToCloudinary";

export const handleEditProfile = async( e, username, setUsername, profile, imageFromFilePicker, description, profileFatherId, fullName, dispatch ) => {
    e.preventDefault();

    Swal.fire({ title: "Editing Profile", text: "Please wait...", allowOutsideClick: false, didOpen: () => Swal.showLoading() });

    const batch = db.batch();

    const thisUsernameExits = ( await db.collection( "users" ).where( "username", "==", username ).where( "id", "!=", profile?.id ).get() ).empty;

    if ( !thisUsernameExits ) {
        Swal.close();
        setUsername( profile?.username );
        Swal.fire( "Ups!", "This username is already in use. Please choose another username.", "error" );
    } else {
        if ( imageFromFilePicker ) {
            const imageFromFilePickerPosted = await handlePostImageToCloudinary( imageFromFilePicker );

            db.collection( "posts" ).where( "username", "==", profile?.username ).get().then( ( querySnapshot ) => {
                querySnapshot.forEach( ( doc ) => {
                    const docRef = db.collection( "posts" ).doc( doc.id );
                    batch.update( docRef, { username, photoURL: imageFromFilePickerPosted } );
                });
                batch.commit();
            });

            dispatch( setProfile( { ...profile, username, fullName, description, profilePicture: imageFromFilePickerPosted }, profile.fatherId ) );
            db.collection( "users" ).doc( profileFatherId ).update({ username, fullName, profilePicture: imageFromFilePickerPosted, description });
        } else {
            db.collection( "posts" ).where( "username", "==", profile?.username ).get().then( ( querySnapshot ) => {
                querySnapshot.forEach( ( doc ) => {
                    const docRef = db.collection( "posts" ).doc( doc.id );
                    batch.update( docRef, { username } );
                });
                batch.commit();
            });
            
            // db.collection( "posts" ).get().then( ( querySnapshot ) => {
            //     querySnapshot.forEach( ( doc ) => {
            //         const docRef = db.collection( "posts" ).doc( doc.id ).collection( "comments" );
            //         docRef.where( "id", "==", profile?.id ).get().then( ( querySnapshot ) => {
            //             querySnapshot.forEach( ( doc ) => {
            //                 batch.update( docRef.doc( doc.id ), { username } );
            //             });   
            //         });
            //     });
            //     batch.commit();
            // });

            dispatch( setProfile( { ...profile, username, fullName, description }, profile.fatherId ) );
            db.collection( "users" ).doc( profileFatherId ).update({ username, fullName, description });
        };

        Swal.close();
        Swal.fire( "Great!", "Your profile has been updated correctly.", "success" );
    };
};