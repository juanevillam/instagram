import React from "react";

export const NewPostIconMobileLightMode = () => {
    return (
        <svg className="cursor-pointer dark:hidden flex" width="26" height="26" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="3" width="18" height="18" rx="5" stroke="black" strokeWidth="1.8"/>
            <line x1="12.1" y1="6.9" x2="12.1" y2="17.1" stroke="black" strokeWidth="1.8" strokeLinecap="round"/>
            <line x1="6.9" y1="11.8" x2="17.1" y2="11.8" stroke="black" strokeWidth="1.8" strokeLinecap="round"/>
        </svg>        
    );
};

export const NewPostIconBoldMobileLightMode = () => {
    return (
        <svg className="cursor-pointer dark:hidden flex" width="26" height="26" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="3" width="18" height="18" rx="5" fill="black" stroke="black" strokeWidth="1.8"/>
            <line x1="12.1" y1="6.9" x2="12.1" y2="17.1" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
            <line x1="6.9" y1="11.8" x2="17.1" y2="11.8" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
        </svg>
    );
};

export const NewPostIconMobileDarkMode = () => {
    return (
        <svg className="cursor-pointer dark:flex hidden" width="26" height="26" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="3" width="18" height="18" rx="5" stroke="white" strokeWidth="1.8"/>
            <line x1="12.1" y1="6.9" x2="12.1" y2="17.1" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
            <line x1="6.9" y1="11.8" x2="17.1" y2="11.8" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
        </svg>        
    );
};

export const NewPostIconBoldMobileDarkMode = () => {
    return (
        <svg className="cursor-pointer dark:flex hidden" width="26" height="26" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="3" width="18" height="18" rx="5" fill="white" stroke="white" strokeWidth="1.8"/>
            <line x1="12.1" y1="6.9" x2="12.1" y2="17.1" stroke="black" strokeWidth="1.8" strokeLinecap="round"/>
            <line x1="6.9" y1="11.8" x2="17.1" y2="11.8" stroke="black" strokeWidth="1.8" strokeLinecap="round"/>
        </svg>
    );
};

export const NewPostIconMobile = ({ openCreatePost, setOpenCreatePost }) => {
    return (
        <div className="flex md:hidden" onClick={ () => setOpenCreatePost( !openCreatePost ) }>
            { openCreatePost ?
                <>
                    <NewPostIconBoldMobileLightMode />
                    <NewPostIconBoldMobileDarkMode />
                </>
                :
                <>
                    <NewPostIconMobileLightMode />
                    <NewPostIconMobileDarkMode />
                </>
            }
        </div>
    );
};

export const NewPostIconLightMode = () => {
    return (
        <svg className="h-7" color="#262626" fill="#262626" height="22" role="img" viewBox="0 0 48 48" width="22">
            <path d="M43.9 4c-2.5-2.4-5.5-4-12.2-4H16.2C9.6 0 6.6 1.6 4 4.1 1.6 6.6 0 9.6 0 16.2v15.5c0 6.6 1.6 9.7 4.1 12.2 2.5 2.4 5.5 4 12.2 4h15.5c6.6 0 9.7-1.6 12.2-4.1 2.4-2.5 4-5.5 4-12.2V16.2c0-6.6-1.6-9.6-4.1-12.2zm-7.6 21.5H25.5v10.8c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5V25.5H11.7c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h10.8V11.7c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v10.8h10.8c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5z" />
        </svg> 
    );
};

export const NewPostIconBoldLightMode = () => {
    return (
        <svg className="h-7" color="#262626" fill="#262626" height="22" role="img" viewBox="0 0 48 48" width="22">
            <path d="M31.8 48H16.2c-6.6 0-9.6-1.6-12.1-4C1.6 41.4 0 38.4 0 31.8V16.2C0 9.6 1.6 6.6 4 4.1 6.6 1.6 9.6 0 16.2 0h15.6c6.6 0 9.6 1.6 12.1 4C46.4 6.6 48 9.6 48 16.2v15.6c0 6.6-1.6 9.6-4 12.1-2.6 2.5-5.6 4.1-12.2 4.1zM16.2 3C10 3 7.8 4.6 6.1 6.2 4.6 7.8 3 10 3 16.2v15.6c0 6.2 1.6 8.4 3.2 10.1 1.6 1.6 3.8 3.1 10 3.1h15.6c6.2 0 8.4-1.6 10.1-3.2 1.6-1.6 3.1-3.8 3.1-10V16.2c0-6.2-1.6-8.4-3.2-10.1C40.2 4.6 38 3 31.8 3H16.2z"></path><path d="M36.3 25.5H11.7c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h24.6c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5z" />
            <path d="M24 37.8c-.8 0-1.5-.7-1.5-1.5V11.7c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v24.6c0 .8-.7 1.5-1.5 1.5z" />
        </svg>
    );
};

export const NewPostIconDarkMode = () => {
    return (
        <svg className="h-7" color="white" fill="white" height="22" role="img" viewBox="0 0 48 48" width="22">
            <path d="M43.9 4c-2.5-2.4-5.5-4-12.2-4H16.2C9.6 0 6.6 1.6 4 4.1 1.6 6.6 0 9.6 0 16.2v15.5c0 6.6 1.6 9.7 4.1 12.2 2.5 2.4 5.5 4 12.2 4h15.5c6.6 0 9.7-1.6 12.2-4.1 2.4-2.5 4-5.5 4-12.2V16.2c0-6.6-1.6-9.6-4.1-12.2zm-7.6 21.5H25.5v10.8c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5V25.5H11.7c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h10.8V11.7c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v10.8h10.8c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5z" />
        </svg> 
    );
};

export const NewPostIconBoldDarkMode = () => {
    return (
        <svg className="h-7" color="white" fill="white" height="22" role="img" viewBox="0 0 48 48" width="22">
            <path d="M31.8 48H16.2c-6.6 0-9.6-1.6-12.1-4C1.6 41.4 0 38.4 0 31.8V16.2C0 9.6 1.6 6.6 4 4.1 6.6 1.6 9.6 0 16.2 0h15.6c6.6 0 9.6 1.6 12.1 4C46.4 6.6 48 9.6 48 16.2v15.6c0 6.6-1.6 9.6-4 12.1-2.6 2.5-5.6 4.1-12.2 4.1zM16.2 3C10 3 7.8 4.6 6.1 6.2 4.6 7.8 3 10 3 16.2v15.6c0 6.2 1.6 8.4 3.2 10.1 1.6 1.6 3.8 3.1 10 3.1h15.6c6.2 0 8.4-1.6 10.1-3.2 1.6-1.6 3.1-3.8 3.1-10V16.2c0-6.2-1.6-8.4-3.2-10.1C40.2 4.6 38 3 31.8 3H16.2z"></path><path d="M36.3 25.5H11.7c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h24.6c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5z" />
            <path d="M24 37.8c-.8 0-1.5-.7-1.5-1.5V11.7c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v24.6c0 .8-.7 1.5-1.5 1.5z" />
        </svg>
    );
};

export const NewPostIcon = ({ openCreatePost, setOpenCreatePost }) => {
    return (
        <div className="cursor-pointer hidden md:flex pb-2 pt-2" onClick={ () => { setOpenCreatePost( true ); document.title = "Create new post • The Instagram Clone" } }>
            <div className="dark:hidden">
                { openCreatePost ?
                    <NewPostIconLightMode />
                    :
                    <NewPostIconBoldLightMode />
                }
            </div>
            <div className="hidden dark:block">
                { openCreatePost ?
                    <NewPostIconDarkMode />
                    :
                    <NewPostIconBoldDarkMode />
                }
            </div>
        </div>
    );
};