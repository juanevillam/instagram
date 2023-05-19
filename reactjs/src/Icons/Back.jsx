import React from "react";
import { handleReturn } from "../Helpers/handleReturn";

export const BackIconMobileLightMode = () => {
    return (
        <svg className="cursor-pointer dark:hidden flex" fill="none" height="38" viewBox="0 0 24 24" width="28">
            <path d="M8 5.00024L0.999937 12.0003L8 19.0004" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
    );
};

export const BackIconMobileDarkMode = () => {
    return (
        <svg className="cursor-pointer hidden dark:flex" fill="none" height="38" viewBox="0 0 24 24" width="28">
            <path d="M8 5.00024L0.999937 12.0003L8 19.0004" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
    );
};

export const BackIconMobile = ({ newState, setState }) => {
    return (
        <div onClick={ setState ? () => setState( newState ) : () => handleReturn }>
            <BackIconMobileLightMode />
            <BackIconMobileDarkMode />
        </div>
    );
};

export const BackIconMobileChat = () => {
    return (
        <>
            <BackIconMobileLightMode />
            <BackIconMobileDarkMode />
        </>
    );
};

export const BackIconMiniLightMode = () => {
    return (
        <svg className="flex dark:hidden" color="#262626" fill="#262626" height="16" role="img" viewBox="0 0 24 24" width="16">
            <line fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" x1="1.23" x2="23.233" y1="12.004" y2="12.004" />
            <polyline fill="none" points="8.919 3.817 0.733 12.004 8.919 20.19" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
    );
};

export const BackIconMiniDarkMode = () => {
    return (
        <svg className="hidden dark:flex" color="white" fill="white" height="16" role="img" viewBox="0 0 24 24" width="16">
            <line fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" x1="1.23" x2="23.233" y1="12.004" y2="12.004" />
            <polyline fill="none" points="8.919 3.817 0.733 12.004 8.919 20.19" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
    );
};

export const BackIconMini = () => {
    return (
        <div>
            <BackIconMiniLightMode />
            <BackIconMiniDarkMode />
        </div>
    );
};

export const BackIconLightMode = ({ newState, setState }) => {
    return (
        <svg className="cursor-pointer dark:hidden flex" color="#262626" fill="#262626" height="24" role="img" onClick={ () => setState( newState ) } viewBox="0 0 24 24" width="24">
            <line fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1.5" x1="1.23" x2="23.233" y1="12.004" y2="12.004" />
            <polyline fill="none" points="8.919 3.817 0.733 12.004 8.919 20.19" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </svg>
    );
};

export const BackIconDarkMode = ({ newState, setState }) => {
    return (
        <svg className="cursor-pointer dark:flex hidden" color="white" fill="white" height="24" role="img" onClick={ () => setState( newState ) } viewBox="0 0 24 24" width="24">
            <line fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="1.5" x1="1.23" x2="23.233" y1="12.004" y2="12.004" />
            <polyline fill="none" points="8.919 3.817 0.733 12.004 8.919 20.19" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </svg>
    );
};

export const BackIcon = ({ newState, setState }) => {
    return (
        <div>
            <BackIconLightMode newState={ newState } setState={ setState } />
            <BackIconDarkMode newState={ newState } setState={ setState } />
        </div>
    );
};

export const BackIconMobileVideo = () => {
    return (
        <svg className="animate__animated animate__fadeIn cursor-pointer" color="white" fill="white" height="20" role="img" viewBox="0 0 24 24" width="20">
            <line fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="3" x1="1.23" x2="23.233" y1="12.004" y2="12.004" />
            <polyline fill="none" points="8.919 3.817 0.733 12.004 8.919 20.19" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        </svg>
    );
};

