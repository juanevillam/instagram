import React from "react";
import { NavLink } from "react-router-dom";
import { NewPostIconMobile } from "./NewPost";
import { LikeIconMobileDarkMode, LikeIconMobileLightMode } from "./Like";
import { MessengerIconMobileDarkMode, MessengerIconMobileLightMode } from "./Messenger";

export const HeaderIconsMobile = ({ openCreatePost, setOpenCreatePost }) => {
    return (
        <>
            <div className="cursor-pointer flex md:hidden pb-2 pt-2">
                <NewPostIconMobile openCreatePost={ openCreatePost } setOpenCreatePost={ setOpenCreatePost } />
            </div>
            <NavLink className="cursor-pointer flex md:hidden pb-2 pt-2" to="/notifications">
                <LikeIconMobileLightMode />
                <LikeIconMobileDarkMode />
            </NavLink>
            <NavLink className="cursor-pointer flex md:hidden pb-2 pt-2" to="/messenger">
                <MessengerIconMobileLightMode />
                <MessengerIconMobileDarkMode />
            </NavLink>
        </>
    );
};
