import React from "react";
import { NavLink } from "react-router-dom";

export const Caption = ({ caption, username }) => {
    return (
        <>
            { caption &&
                <div className="mt-2 -mb-px md:pl-4 pl-3.5 pr-8">
                    <div className="dark:text-white font-light text-md">
                        <NavLink className="animate__animated animate__fadeIn cursor-pointer font-medium dark:text-white hover:underline pr-1 text-black" to={ { pathname:`/:${ username }`, props:{ username } } }>{ username }</NavLink>
                        { caption }
                    </div>
                </div>
            }
        </>
    );
};

export const CaptionId = ({ caption, profilePicture, username }) => {
    return (
        <>
            { caption && 
                <div className={`flex ${ caption.length < 10 && "items-center" } mt-4 space-x-2.5`}>
                    <div className="animate__animated animate__fadeIn h-10 w-10">
                        <img className="h-10 object-cover rounded-full w-10" src={ profilePicture } alt="" />
                    </div>
                    <div className="break-words dark:text-white font-light text-sm">
                        <NavLink className="animate__animated animate__fadeIn cursor-pointer font-medium dark:text-white hover:underline pr-1 text-black" to={ { pathname:`/:${ username }`, props:{ username } } }>{ username }</NavLink>
                        { caption }
                    </div>
                </div>
            } 
        </>
    );
};