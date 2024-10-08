import React from "react";

export const AudioIcon = () => {
    return (
        <svg color="#ffffff" fill="#ffffff" height="12" role="img" viewBox="0 0 48 48" width="12">
            <path clipRule="evenodd" d="M40.8 6.6c-.6-.6-1.6-.6-2.2 0L37.2 8c-.6.6-.6 1.6 0 2.2 0 0 5.7 5 5.7 13.8s-5.7 13.8-5.7 13.8c-.6.6-.6 1.6 0 2.2l1.4 1.4c.6.6 1.6.6 2.2 0 0 0 7.2-6 7.2-17.4S40.8 6.6 40.8 6.6zm-7.1 7.1c-.6-.6-1.6-.6-2.2 0l-1.4 1.4c-.6.6-.6 1.6 0 2.2 0 0 2.6 2 2.6 6.7s-2.6 6.7-2.6 6.7c-.6.6-.6 1.6 0 2.2l1.4 1.4c.6.6 1.6.6 2.2 0 0 0 4.1-3.5 4.1-10.3s-4.1-10.3-4.1-10.3zM23.1.4L10.2 13.3H1.5c-.8 0-1.5.7-1.5 1.5v18.4c0 .8.7 1.5 1.5 1.5h8.7l12.9 12.9c.9.9 2.5.3 2.5-1V1.4C25.5.2 24-.5 23.1.4z" fillRule="evenodd" />
        </svg>
    );
};

export const MutedAudioIcon = () => {
    return (
        <svg color="#ffffff" fill="#ffffff" height="12" role="img" viewBox="0 0 48 48" width="12">
            <path clipRule="evenodd" d="M1.5 13.3c-.8 0-1.5.7-1.5 1.5v18.4c0 .8.7 1.5 1.5 1.5h8.7l12.9 12.9c.9.9 2.5.3 2.5-1v-9.8c0-.4-.2-.8-.4-1.1l-22-22c-.3-.3-.7-.4-1.1-.4h-.6zm46.8 31.4l-5.5-5.5C44.9 36.6 48 31.4 48 24c0-11.4-7.2-17.4-7.2-17.4-.6-.6-1.6-.6-2.2 0L37.2 8c-.6.6-.6 1.6 0 2.2 0 0 5.7 5 5.7 13.8 0 5.4-2.1 9.3-3.8 11.6L35.5 32c1.1-1.7 2.3-4.4 2.3-8 0-6.8-4.1-10.3-4.1-10.3-.6-.6-1.6-.6-2.2 0l-1.4 1.4c-.6.6-.6 1.6 0 2.2 0 0 2.6 2 2.6 6.7 0 1.8-.4 3.2-.9 4.3L25.5 22V1.4c0-1.3-1.6-1.9-2.5-1L13.5 10 3.3-.3c-.6-.6-1.5-.6-2.1 0L-.2 1.1c-.6.6-.6 1.5 0 2.1L4 7.6l26.8 26.8 13.9 13.9c.6.6 1.5.6 2.1 0l1.4-1.4c.7-.6.7-1.6.1-2.2z" fillRule="evenodd" />
        </svg>
    );
};

export const AudioIconMobile = () => {
    return (
        <svg className="cursor-pointer" color="#ffffff" fill="#ffffff" height="16" role="img" viewBox="0 0 24 24" width="16">
            <path d="M16.636 7.028a1.5 1.5 0 10-2.395 1.807 5.365 5.365 0 011.103 3.17 5.378 5.378 0 01-1.105 3.176 1.5 1.5 0 102.395 1.806 8.396 8.396 0 001.71-4.981 8.39 8.39 0 00-1.708-4.978zm3.73-2.332A1.5 1.5 0 1018.04 6.59 8.823 8.823 0 0120 12.007a8.798 8.798 0 01-1.96 5.415 1.5 1.5 0 002.326 1.894 11.672 11.672 0 002.635-7.31 11.682 11.682 0 00-2.635-7.31zm-8.963-3.613a1.001 1.001 0 00-1.082.187L5.265 6H2a1 1 0 00-1 1v10.003a1 1 0 001 1h3.265l5.01 4.682.02.021a1 1 0 001.704-.814L12.005 2a1 1 0 00-.602-.917z" />\
        </svg>
    );
};

export const MutedAudioIconMobile = () => {
    return (
        <svg className="cursor-pointer" color="#ffffff" fill="#ffffff" height="16" role="img" viewBox="0 0 24 24" width="16">
            <path d="M11.403 1.083a1.001 1.001 0 00-1.082.187L5.265 6H2a1 1 0 00-1 1v10.003a1 1 0 001 1h3.265l5.01 4.682.02.021a1 1 0 001.704-.814L12.005 2a1 1 0 00-.602-.917zM20.704 12l1.94-1.94a1.5 1.5 0 00-2.122-2.12l-1.939 1.939-1.94-1.94a1.5 1.5 0 10-2.12 2.122L16.461 12l-1.94 1.94a1.5 1.5 0 102.122 2.12l1.939-1.939 1.94 1.94a1.5 1.5 0 002.12-2.122z" />
        </svg>
    );
};

export const RecordAudioIconMobileLightMode = () => {
    return (
        <svg className="cursor-pointer hidden dark:flex" fill="none" height="24" viewBox="0 0 19 24"  width="19">
            <path clipRule="evenodd" fill="white" fillRule="evenodd" d="M4.99996 22H13C13.5522 22 14 22.4477 14 23C14 23.5128 13.6139 23.9355 13.1166 23.9933L13 24H4.99996C4.44767 24 3.99996 23.5523 3.99996 23C3.99996 22.4872 4.386 22.0645 4.88334 22.0067L4.99996 22H13H4.99996ZM17.1011 10.6035C17.6531 10.6197 18.0875 11.0804 18.0713 11.6324C18.0293 13.0647 17.5712 14.5824 16.7941 15.9284C14.3088 20.233 8.80451 21.7079 4.49988 19.2226C1.74634 17.6329 0.0719678 14.7458 0.000875111 11.6258C-0.0117064 11.0737 0.425693 10.6159 0.977835 10.6033C1.52998 10.5907 1.98777 11.0281 2.00036 11.5803C2.0557 14.0091 3.35737 16.2536 5.49988 17.4906C8.84792 19.4236 13.1291 18.2764 15.0621 14.9284C15.6789 13.86 16.0402 12.6628 16.0722 11.5737C16.0884 11.0217 16.549 10.5873 17.1011 10.6035ZM8.99996 0C11.7614 0 14 2.23858 14 5V11.5C14 14.2614 11.7614 16.5 8.99996 16.5C6.23853 16.5 3.99996 14.2614 3.99996 11.5V5C3.99996 2.23858 6.23853 0 8.99996 0Z" />
        </svg>
    );
};

export const RecordAudioIconMobileDarkMode = () => {
    return (
        <svg className="cursor-pointer flex dark:hidden" fill="none" height="24" viewBox="0 0 19 24"  width="19">
            <path clipRule="evenodd" fill="black" fillRule="evenodd" d="M4.99996 22H13C13.5522 22 14 22.4477 14 23C14 23.5128 13.6139 23.9355 13.1166 23.9933L13 24H4.99996C4.44767 24 3.99996 23.5523 3.99996 23C3.99996 22.4872 4.386 22.0645 4.88334 22.0067L4.99996 22H13H4.99996ZM17.1011 10.6035C17.6531 10.6197 18.0875 11.0804 18.0713 11.6324C18.0293 13.0647 17.5712 14.5824 16.7941 15.9284C14.3088 20.233 8.80451 21.7079 4.49988 19.2226C1.74634 17.6329 0.0719678 14.7458 0.000875111 11.6258C-0.0117064 11.0737 0.425693 10.6159 0.977835 10.6033C1.52998 10.5907 1.98777 11.0281 2.00036 11.5803C2.0557 14.0091 3.35737 16.2536 5.49988 17.4906C8.84792 19.4236 13.1291 18.2764 15.0621 14.9284C15.6789 13.86 16.0402 12.6628 16.0722 11.5737C16.0884 11.0217 16.549 10.5873 17.1011 10.6035ZM8.99996 0C11.7614 0 14 2.23858 14 5V11.5C14 14.2614 11.7614 16.5 8.99996 16.5C6.23853 16.5 3.99996 14.2614 3.99996 11.5V5C3.99996 2.23858 6.23853 0 8.99996 0Z" />
        </svg>
    );
};

export const RecordAudioIconMobile = () => {
    return (
        <>
            <RecordAudioIconMobileLightMode />
            <RecordAudioIconMobileDarkMode />
        </>
    );
};