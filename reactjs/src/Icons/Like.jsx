import React from "react";
import { handleLike } from "../Helpers/handleLike";

export const LikeIconMobileLightMode = () => {
    return (
        <svg className="animate__animated animate__bounceIn cursor-pointer dark:hidden flex" width="25" height="25" viewBox="0 0 25 22" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M13.5498 19.7815C12.7874 20.4729 11.6249 20.4729 10.8626 19.7815L10.6258 19.5668C5.01273 14.4714 1.30701 11.109 1.30701 6.99455C1.30701 3.63215 3.93916 1 7.30156 1C9.19801 1 11.0182 1.88283 12.2062 3.27248C13.3942 1.88283 15.2144 1 17.1108 1C20.4732 1 23.1054 3.63215 23.1054 6.99455C23.1054 11.109 19.3996 14.4714 13.7866 19.5668L13.5498 19.7815Z" stroke="black" strokeWidth="2" />
        </svg>
    );
};

export const LikeIconMobileDarkMode = () => {
    return (
        <svg className="animate__animated animate__bounceIn cursor-pointer dark:flex hidden" width="25" height="25" viewBox="0 0 25 22" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M13.5498 19.7815C12.7874 20.4729 11.6249 20.4729 10.8626 19.7815L10.6258 19.5668C5.01273 14.4714 1.30701 11.109 1.30701 6.99455C1.30701 3.63215 3.93916 1 7.30156 1C9.19801 1 11.0182 1.88283 12.2062 3.27248C13.3942 1.88283 15.2144 1 17.1108 1C20.4732 1 23.1054 3.63215 23.1054 6.99455C23.1054 11.109 19.3996 14.4714 13.7866 19.5668L13.5498 19.7815Z" stroke="white" strokeWidth="2" />
        </svg>
    );
};

export const LikeIconBoldMobileLightMode = () => {
    return (
        <svg className="animate__animated animate__bounceIn cursor-pointer h-6 text-black w-6" fill="currentColor" viewBox="0 0 25 22">
            <path fillRule="evenodd" clipRule="evenodd" d="M13.84 20.7907C13.0787 21.4777 11.9213 21.4777 11.16 20.7907L10.8325 20.4951C4.91 15.145 1 11.6144 1 7.29428C1 3.76376 3.77725 1 7.325 1C9.326 1 11.2465 1.92698 12.5 3.3861C13.7535 1.92698 15.674 1 17.675 1C21.2227 1 24 3.76376 24 7.29428C24 11.6144 20.09 15.145 14.1675 20.4951L13.84 20.7907Z" fill="#ED4756" stroke="#ED4756" strokeLinejoin="round" />
        </svg>
    );
};

export const LikeIconLightMode = () => {
    return (
        <svg className="animate__animated animate__bounceIn cursor-pointer dark:hidden flex h-6 text-black w-6" fill="currentColor" viewBox="0 0 48 48">
            <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z" />
        </svg>
    );
};

export const LikeIconBoldLightMode = () => {
    return (
        <svg className="animate__animated animate__bounceIn cursor-pointer dark:hidden flex h-6 text-black w-6" viewBox="0 0 48 48">
            <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z" fill="#ED4756" />
        </svg>
    );
};

export const LikeIconDarkMode = () => {
    return (
        <svg className="animate__animated animate__bounceIn cursor-pointer dark:flex hidden h-6 text-black w-6" color="#fafafa" fill="#fafafa" viewBox="0 0 48 48">
            <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z" />
        </svg>
    );
};

export const LikeIconBoldDarkMode = () => {
    return (
        <svg className="animate__animated animate__bounceIn cursor-pointer dark:flex hidden h-6 w-6" color="#ED4756" fill="#ED4756" height="24" role="img" viewBox="0 0 48 48" width="24">
            <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z" />
        </svg>
    );
};

export const LikeIcon = ({ id, like, liked, name, postId, profilePicture, setLiked, username }) => {
    const likeHandler = () => handleLike( id, liked, name, postId, profilePicture, setLiked, username );

    return (
        <div onClick={ likeHandler }>
            <div className="block md:hidden">
                { like ? 
                    <LikeIconBoldMobileLightMode />
                    : 
                    <>
                        <LikeIconMobileLightMode />
                        <LikeIconMobileDarkMode />
                    </>
                }
            </div>
            <div className="hidden md:block">
                { like ? 
                    <>
                        <LikeIconBoldLightMode />
                        <LikeIconBoldDarkMode />
                    </>
                    : 
                    <>
                        <LikeIconLightMode />
                        <LikeIconDarkMode />
                    </>
                }
            </div>
        </div>
    );
};

export const LikeIconMobile = () => {
    return (
        <>
            <div className="block md:hidden">
                <LikeIconMobileLightMode />
                <LikeIconBoldMobileLightMode />
            </div>
        </>
    );
};

export const LikeIconMobileVideo = ({ id, like, liked, name, postId, profilePicture, setLiked, username }) => {
    const likeHandler = () => handleLike( id, liked, name, postId, profilePicture, setLiked, username );

    return (
        <div onClick={ likeHandler }>
            <div className="block md:hidden">
                { like ? 
                    <LikeIconBoldMobileLightMode />
                    : 
                    <svg className="animate__animated animate__bounceIn cursor-pointer" width="25" height="25" viewBox="0 0 25 22" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M13.5498 19.7815C12.7874 20.4729 11.6249 20.4729 10.8626 19.7815L10.6258 19.5668C5.01273 14.4714 1.30701 11.109 1.30701 6.99455C1.30701 3.63215 3.93916 1 7.30156 1C9.19801 1 11.0182 1.88283 12.2062 3.27248C13.3942 1.88283 15.2144 1 17.1108 1C20.4732 1 23.1054 3.63215 23.1054 6.99455C23.1054 11.109 19.3996 14.4714 13.7866 19.5668L13.5498 19.7815Z" stroke="white" strokeWidth="2" />
                    </svg>
                }
            </div>
        </div>
    );
};

export const LikeIconMessengerLightMode = () => {
    return (
        <svg className="animate__animated animate__fadeIn cursor-pointer dark:hidden flex" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 48 48" width="24">
            <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z" />
        </svg>
    );
};

export const LikeIconMessengerDarkMode = () => {
    return (
        <svg className="animate__animated animate__fadeIn cursor-pointer dark:flex hidden" color="#fafafa" fill="#fafafa" height="24" role="img" viewBox="0 0 48 48" width="24">
            <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z" />
        </svg>
    );
};


export const LikeIconMessengerMini = () => {
    return (
        <svg className="animate__animated animate__bounceIn inline-flex ml-1 mr-1" color="#ed4956" fill="#ed4956" height="16" role="img" viewBox="0 0 48 48" width="16">
            <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z" />
        </svg>
    );
};

export const LikeIconMessenger = ({ isItMessage, handleSendLike }) => {
    return (
        <> 
            { isItMessage ? 
                <svg className="animate__animated animate__bounceIn" color="#ed4956" fill="#ed4956" height="44" role="img" viewBox="0 0 48 48" width="44">
                    <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z" />
                </svg>
                :
                <div onClick={ handleSendLike }>
                    <LikeIconMessengerLightMode />
                    <LikeIconMessengerDarkMode /> 
                </div>
            }
        </>
    );
};