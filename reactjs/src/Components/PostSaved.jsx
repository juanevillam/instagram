import React from "react";
import { NavLink } from "react-router-dom";

export const PostSaved = ({ postSaved }) => {
    return (
        <div className={`animate__animated animate__fadeIn bg-white border-b border-smoke-200 border-t dark:bg-black dark:border-dark-200 ${ postSaved ? "hidden md:flex" : "hidden" } pb-4 pl-3 pr-3 pt-5`}>
            <p className="dark:text-white flex-grow font-normal">Item is saved.</p>
            <NavLink className="font-medium hover:underline text-blue-500 text-md" to="/saved">View your saved posts</NavLink>
        </div>
    );
};

export const ItemSavedPostId = ({ postSaved }) => {
    return (
        <div className={`animate__animated animate__fadeIn bg-white border-t dark:bg-black dark:border-dark-200 ${ postSaved ? "hidden md:flex" : "hidden" } pb-4 pl-3 pr-3 pt-4`}>
            <p className="dark:text-white flex-grow font-normal text-sm">Item is saved.</p>
            <NavLink className="font-medium hover:underline text-blue-500 text-sm" to="/saved">View your saved posts</NavLink>
        </div>
    );
};