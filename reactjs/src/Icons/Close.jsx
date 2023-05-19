import React from "react";
import { useLocation } from "react-router";
import { auth } from "../Database/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { handleChangeDocumentTitle } from "../Helpers/handleChangeDocumentTitle";

export const CloseIconThin = ({ newState, setState, className }) => {
    const location = useLocation();

    const handleClose = () => {
        handleChangeDocumentTitle( location, "/feed", "The Instagram Clone" );
        setState( newState );
    };

    return (
        <div className={ className }>
            <svg className="absolute cursor-pointer block dark:hidden duration-300 hover:bg-gray-100 p-1.5 right-2 rounded-full top-1 transition" color="#262626" fill="#262626" height="33" role="img" viewBox="0 0 48 48" width="33" onClick={ handleClose }>
                <path clipRule="evenodd" d="M41.1 9.1l-15 15L41 39c.6.6.6 1.5 0 2.1s-1.5.6-2.1 0L24 26.1l-14.9 15c-.6.6-1.5.6-2.1 0-.6-.6-.6-1.5 0-2.1l14.9-15-15-15c-.6-.6-.6-1.5 0-2.1s1.5-.6 2.1 0l15 15 15-15c.6-.6 1.5-.6 2.1 0 .6.6.6 1.6 0 2.2z" fillRule="evenodd" />
            </svg>
            <svg className="absolute cursor-pointer dark:block dark:hover:bg-opacity-10 duration-300 hidden hover:bg-gray-100 p-1.5 right-2 rounded-full top-1 transition" color="#fafafa" fill="#fafafa" height="33" role="img" viewBox="0 0 48 48" width="33" onClick={ handleClose }>
                <path clipRule="evenodd" d="M41.1 9.1l-15 15L41 39c.6.6.6 1.5 0 2.1s-1.5.6-2.1 0L24 26.1l-14.9 15c-.6.6-1.5.6-2.1 0-.6-.6-.6-1.5 0-2.1l14.9-15-15-15c-.6-.6-.6-1.5 0-2.1s1.5-.6 2.1 0l15 15 15-15c.6-.6 1.5-.6 2.1 0 .6.6.6 1.6 0 2.2z" fillRule="evenodd" />
            </svg>
        </div>
    );
};

export const CloseIconMessengerLightMode = () => {
    return (
        <svg className="animate__animated animate__fadeIn cursor-pointer dark:hidden flex" color="#262626" fill="#262626" height="26" role="img" viewBox="0 0 48 48" width="26">
            <path clipRule="evenodd" d="M41.1 9.1l-15 15L41 39c.6.6.6 1.5 0 2.1s-1.5.6-2.1 0L24 26.1l-14.9 15c-.6.6-1.5.6-2.1 0-.6-.6-.6-1.5 0-2.1l14.9-15-15-15c-.6-.6-.6-1.5 0-2.1s1.5-.6 2.1 0l15 15 15-15c.6-.6 1.5-.6 2.1 0 .6.6.6 1.6 0 2.2z" fillRule="evenodd" />
        </svg>        
    );
};

export const CloseIconMessengerDarkMode = () => {
    return (
        <svg className="animate__animated animate__fadeIn cursor-pointer dark:flex hidden" color="#fafafa" fill="#fafafa" height="26" role="img" viewBox="0 0 48 48" width="26">
            <path clipRule="evenodd" d="M41.1 9.1l-15 15L41 39c.6.6.6 1.5 0 2.1s-1.5.6-2.1 0L24 26.1l-14.9 15c-.6.6-1.5.6-2.1 0-.6-.6-.6-1.5 0-2.1l14.9-15-15-15c-.6-.6-.6-1.5 0-2.1s1.5-.6 2.1 0l15 15 15-15c.6-.6 1.5-.6 2.1 0 .6.6.6 1.6 0 2.2z" fillRule="evenodd" />
        </svg>
    );
};

export const CloseIconMessenger = () => {
    return (
        <>
            <CloseIconMessengerLightMode />
            <CloseIconMessengerDarkMode />
        </>
    );
};

export const CloseIcon = ({ newState, setState }) => {
    const location = useLocation();
    const [ user ] = useAuthState( auth );

    const handleClose = () => {
        handleChangeDocumentTitle( location, "/explore", "Explore" );
        handleChangeDocumentTitle( location, "/settings", "Settings" );
        handleChangeDocumentTitle( location, "/messenger", "Messenger" );
        handleChangeDocumentTitle( location, "/notifications", "Notifications" );
        handleChangeDocumentTitle( location, "/settings/edit-profile", "Settings" );
        handleChangeDocumentTitle( location, "/settings/change-password", "Settings" );
        handleChangeDocumentTitle( location, "/settings/privacy-security", "Settings" );
        handleChangeDocumentTitle( location, "/settings/display-accesibility", "Settings" );
        handleChangeDocumentTitle( location, "/profile", `Profile • ${ user.displayName }` );
        handleChangeDocumentTitle( location, "/feed", "The Instagram Clone • By Juan Villa" );

        setState( newState );
    };

    return (
        <svg className="absolute animate__animated animate__fadeIn cursor-pointer duration-300 hover:bg-gray-100 hover:bg-opacity-10 p-2 right-2 rounded-full top-2 transition z-30" color="#ffffff" fill="#ffffff" height="38" onClick={ handleClose } role="img" viewBox="0 0 48 48" width="38">
            <path clipRule="evenodd" d="M41.8 9.8L27.5 24l14.2 14.2c.6.6.6 1.5 0 2.1l-1.4 1.4c-.6.6-1.5.6-2.1 0L24 27.5 9.8 41.8c-.6.6-1.5.6-2.1 0l-1.4-1.4c-.6-.6-.6-1.5 0-2.1L20.5 24 6.2 9.8c-.6-.6-.6-1.5 0-2.1l1.4-1.4c.6-.6 1.5-.6 2.1 0L24 20.5 38.3 6.2c.6-.6 1.5-.6 2.1 0l1.4 1.4c.6.6.6 1.6 0 2.2z" fillRule="evenodd" />
        </svg>
    );
};