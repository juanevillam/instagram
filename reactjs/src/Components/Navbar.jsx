import React from "react";
import { HomeIconMobile } from "../Icons/Home";
import { ReelsIconMobile } from "../Icons/Reels";
import { ProfileIconMobile } from "../Icons/Profile";
import { ExploreIconMobile } from "../Icons/Explore";
import { ShoppingIconMobile } from "../Icons/Shopping";

export const Navbar = ({ username, profilePicture }) => {
    return (
        <div className="bg-white block border-t bottom-0 dark:bg-black dark:border-dark-300 fixed inset-x-0 md:hidden z-10">
            <div className="flex justify-around items-center -ml-3 -mr-3 pb-3 pt-1.5">
                <HomeIconMobile />
                <ExploreIconMobile />
                <ReelsIconMobile />
                <ShoppingIconMobile />
                <ProfileIconMobile username={ username } profilePicture={ profilePicture } />
            </div>
        </div>
    );
};