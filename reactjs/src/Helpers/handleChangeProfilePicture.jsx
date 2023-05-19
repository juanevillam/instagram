export const handleChangeProfilePicture = ( filePicker, imageFromFilePicker, profilePicture, seChangeImage ) => { 
    if ( imageFromFilePicker || profilePicture ) {
        seChangeImage( true )
    } else {
        filePicker.current.click() 
    };
};