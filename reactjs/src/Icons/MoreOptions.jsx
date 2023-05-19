import React from "react";

export const MoreOptionsIconMiniMobile = () => {
    return (
        <>
            <svg className="animate__animated animate__fadeIn block dark:hidden rotate-180 transform" color="#000" fill="#000" height="13" role="img" viewBox="0 0 48 48" width="13">
                <path d="M40 33.5c-.4 0-.8-.1-1.1-.4L24 18.1l-14.9 15c-.6.6-1.5.6-2.1 0s-.6-1.5 0-2.1l16-16c.6-.6 1.5-.6 2.1 0l16 16c.6.6.6 1.5 0 2.1-.3.3-.7.4-1.1.4z" />
            </svg>
            <svg className="animate__animated animate__fadeIn dark:block hidden rotate-180 transform" color="#ffffff" fill="#ffffff" height="13" role="img" viewBox="0 0 48 48" width="13">
                <path d="M40 33.5c-.4 0-.8-.1-1.1-.4L24 18.1l-14.9 15c-.6.6-1.5.6-2.1 0s-.6-1.5 0-2.1l16-16c.6-.6 1.5-.6 2.1 0l16 16c.6.6.6 1.5 0 2.1-.3.3-.7.4-1.1.4z" />
            </svg>     
        </>
    );
};

export const MoreOptionsIconMini = ({ boxForm }) => {
    return (
        <>
            { boxForm ? 
                <>
                    <svg className="animate__animated animate__fadeIn bg-transparent border border-dark-400 cursor-pointer dark:block hidden p-2.5 rounded-lg rotate-180 transform" color="#ffffff" fill="#ffffff" height="36" role="img" viewBox="0 0 48 48" width="36">
                        <path d="M40 33.5c-.4 0-.8-.1-1.1-.4L24 18.1l-14.9 15c-.6.6-1.5.6-2.1 0s-.6-1.5 0-2.1l16-16c.6-.6 1.5-.6 2.1 0l16 16c.6.6.6 1.5 0 2.1-.3.3-.7.4-1.1.4z" />
                    </svg>
                    <svg className="animate__animated animate__fadeIn bg-transparent block border cursor-pointer dark:hidden p-2.5 rounded-lg rotate-180 transform" color="#000" fill="#000" height="36" role="img" viewBox="0 0 48 48" width="36">
                        <path d="M40 33.5c-.4 0-.8-.1-1.1-.4L24 18.1l-14.9 15c-.6.6-1.5.6-2.1 0s-.6-1.5 0-2.1l16-16c.6-.6 1.5-.6 2.1 0l16 16c.6.6.6 1.5 0 2.1-.3.3-.7.4-1.1.4z" />
                    </svg>
                </>
                :
                <svg className="animate__animated animate__fadeIn rotate-180 transform" color="#ffffff" fill="#ffffff" height="13" role="img" viewBox="0 0 48 48" width="13">
                    <path d="M40 33.5c-.4 0-.8-.1-1.1-.4L24 18.1l-14.9 15c-.6.6-1.5.6-2.1 0s-.6-1.5 0-2.1l16-16c.6-.6 1.5-.6 2.1 0l16 16c.6.6.6 1.5 0 2.1-.3.3-.7.4-1.1.4z" />
                </svg>
            }
        </>
    );
};

export const MoreOptionsIcon = ({ openPostOptions, setOpenPostOptions }) => {
    return (
        <div onClick={ () => setOpenPostOptions( true ) }>
            <div className="block dark:hidden">
                <svg className={`${ openPostOptions && "bg-gray-100" } cursor-pointer duration-300 hover:bg-gray-100 md:transform-none -mr-1 p-1 rotate-90 rounded-full transform transition`} color="#262626" fill="#262626" height="35" role="img" viewBox="0 0 24 24" width="35">
                    <circle cx="12" cy="12" r="1.5" />
                    <circle cx="6.5" cy="12" r="1.5" />
                    <circle cx="17.5" cy="12" r="1.5" />
                </svg>
            </div>
            <div className="hidden dark:block">
                <svg className={`${ openPostOptions && "bg-gray-100 bg-opacity-10" } cursor-pointer duration-300 hover:bg-gray-100 hover:bg-opacity-10 md:transform-none -mr-1 p-1 rotate-90 rounded-full transform transition`} color="white" fill="white" height="35" role="img" viewBox="0 0 24 24" width="35">
                    <circle cx="12" cy="12" r="1.5" />
                    <circle cx="6.5" cy="12" r="1.5" />
                    <circle cx="17.5" cy="12" r="1.5" />
                </svg>
            </div>
        </div>
    );
};

export const MoreOptionsIconBig = ({ isOpenPostOptions }) => {
    return (
        <>
            <div className="block dark:hidden">
                <svg className={`${ isOpenPostOptions && "bg-gray-100" } cursor-pointer duration-300 hover:bg-gray-100 p-0.5 rounded-full transition`} color="#262626" fill="#262626" height="35" role="img" viewBox="0 0 24 24" width="35">
                    <circle cx="12" cy="12" r="1.5" />
                    <circle cx="6.5" cy="12" r="1.5" />
                    <circle cx="17.5" cy="12" r="1.5" />
                </svg>
            </div>
            <div className="hidden dark:block">
                <svg className={`${ isOpenPostOptions && "bg-gray-100" } cursor-pointer duration-300 hover:bg-gray-100 hover:bg-opacity-10 p-0.5 rounded-full transition`} color="white" fill="white" height="35" role="img" viewBox="0 0 24 24" width="35">
                    <circle cx="12" cy="12" r="1.5" />
                    <circle cx="6.5" cy="12" r="1.5" />
                    <circle cx="17.5" cy="12" r="1.5" />
                </svg>
            </div>
        </>
    );
};

export const MoreOptionsIconMiniMessengerLightMode = () => {
    return (
        <svg className="animate__animated animate__fadeIn cursor-pointer dark:hidden flex" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24">
            <circle cx="12" cy="12" r="1.5" />
            <circle cx="6.5" cy="12" r="1.5" />
            <circle cx="17.5" cy="12" r="1.5" />
        </svg>
    );
};

export const MoreOptionsIconMiniMessengerDarkMode = () => {
    return (
        <svg className="animate__animated animate__fadeIn cursor-pointer dark:flex hidden" color="#fafafa" fill="#fafafa" height="24" role="img" viewBox="0 0 24 24" width="24">
            <circle cx="12" cy="12" r="1.5" />
            <circle cx="6.5" cy="12" r="1.5" />
            <circle cx="17.5" cy="12" r="1.5" />
        </svg>
    );
};

export const MoreOptionsIconMessenger = ({ moreOptions, setMoreOptions }) => {
    return (
        <div className="dark:hover:bg-opacity-10 duration-300 group-hover:opacity-100 hidden hover:bg-gray-100 md:block mr-3 opacity-0 p-1 rounded-full transition" onClick={ () => setMoreOptions( !moreOptions ) }>
            <MoreOptionsIconMiniMessengerLightMode />
            <MoreOptionsIconMiniMessengerDarkMode />
        </div>
    );
};

export const MoreOptionsIconVideo = () => {
    return (
        <svg className="cursor-pointer" color="#ffffff" fill="#ffffff" height="24" role="img" viewBox="0 0 24 24" width="24">
            <path d="M12 9.75A2.25 2.25 0 1014.25 12 2.25 2.25 0 0012 9.75zm-6 0A2.25 2.25 0 108.25 12 2.25 2.25 0 006 9.75zm12 0A2.25 2.25 0 1020.25 12 2.25 2.25 0 0018 9.75z" fillRule="evenodd" />
        </svg>
    );
};