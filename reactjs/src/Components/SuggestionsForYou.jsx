import React from "react";
import { handleGetStarted } from "../Helpers/handleGetStarted";
import { SuggestionsForYouUser } from "./SuggestionsForYouUser";

export const SuggestionsForYou = ({ chatsSnapshot, dispatch, following, profile, users }) => {
    const getStartedHandler = ( e ) => handleGetStarted( e, dispatch, profile );

    return (
        <div className="animate__animated animate__fadeIn max-w-xl mx-auto pt-6 w-full">
            <p className="dark:text-white font-medium">Suggestions For You</p>
            <div className="bg-white border border-smoke-200 dark:border-dark-300 dark:bg-black h-3/4 mt-3 overflow-y-scroll pt-2 relative rounded-lg">
                <div className="pb-3 pl-4 pr-4 space-y-2.5 h-full">
                    { users.map(({ id, user }) => <SuggestionsForYouUser chatsSnapshot={ chatsSnapshot } key={ id } profile={ profile } user={ user } userId={ id } /> )}
                </div>
                <div className="bg-white border-smoke-200 border-t bottom-0 dark:border-dark-300 sticky dark:bg-black pb-2.5 pl-5 pr-5 pt-2.5 w-full">
                    <button className="bg-instagram-100 disabled:cursor-not-allowed disabled:opacity-50 duration-300 font-medium hover:bg-instagram-200 pb-1 pt-1 rounded-md text-center text-white transition w-full" disabled={ following?.length === 0 } onClick={ getStartedHandler }>Get Started</button>
                </div>
            </div>
        </div>
    );
};