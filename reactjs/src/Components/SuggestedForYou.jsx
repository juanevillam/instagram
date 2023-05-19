import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { startLogout } from "../Actions/auth";
import { SuggestedForYouUser } from "./SuggestedForYouUser";

export const SuggestedForYou = ({ chatsSnapshot, dispatch, profile, users }) => {
    const handleLogout = () => dispatch( startLogout() );

    return (
        <div className="animate__animated animate__fadeIn bg-none hidden md:block mx-auto pt-14 relative xl:w-72 w-64">
            <div className="flex items-center pb-6">
                <div className="flex flex-grow items-center space-x-4">
                    <NavLink to={`/:${ profile?.username }`}>
                        <motion.img alt="" className="block cursor-pointer h-16 rounded-full object-cover w-16" src={ profile?.profilePicture } whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.9 }} />
                    </NavLink>
                    <div className="text-sm">
                        <NavLink to={`/:${ profile?.username }`}>
                            <h1 className="dark:text-white font-medium hover:underline">{ profile?.username }</h1>
                        </NavLink>
                        <h1 className="mt-px dark:text-gray-400 text-gray-500">{ profile?.fullName?.split( " " ).slice( 0, 2 ).join( " " ) }</h1>
                    </div>
                </div>
                <p className="cursor-pointer hover:underline font-semibold text-instagram-100 text-xs" onClick={ handleLogout }>Logout</p>
            </div>
            <div className="flex items-center pb-2">
                <h1 className="dark:text-gray-400 flex-grow font-medium text-smoke-500 text-sm">Suggestions For You</h1>
                <NavLink to="/explore/people">
                    <h1 className="cursor-pointer dark:text-white font-medium hover:underline text-black text-sm">See All</h1>
                </NavLink>
            </div>
            { users.map(({ id, user }) => <SuggestedForYouUser chatsSnapshot={ chatsSnapshot } key={ id } profile={ profile } user={ user } userId={ id } /> )}
            <div className="absolute bottom-20 dark:text-smoke-500 left-0 text-xs text-smoke-500 w-full">
                © 2021 THE INSTAGRAM CLONE FROM
                <a className="hover:underline ml-1" href="https://github.com/juanevillam" rel="noreferrer" target="_blank">
                    JUAN VILLA
                </a>
            </div>
        </div>
    );
};