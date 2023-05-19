import { handleChangeDocumentTitle } from "./handleChangeDocumentTitle";

export const handleCloseCreatePost = ( location, profile, setOpenCreatePost ) => {
    handleChangeDocumentTitle( location, "/explore", "Explore" );
    handleChangeDocumentTitle( location, "/messenger", "Messenger" );
    handleChangeDocumentTitle( location, "/notifications", "Notifications" );
    handleChangeDocumentTitle( location, "/feed", "The Instagram Clone • By Juan Villa" );
    handleChangeDocumentTitle( location, `/:${ profile?.username }`, `${ profile.fullName } • (@${ profile?.username })` );

    setOpenCreatePost( false );
};