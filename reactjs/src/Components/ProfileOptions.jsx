import React from "react";
import { NavLink } from "react-router-dom";
import { SettingsIcon } from "../Icons/Settings";
import { MoreOptionsIconBig, MoreOptionsIconMini, MoreOptionsIconMiniMobile } from "../Icons/MoreOptions";

export const ProfileOptions = ({ followedSnap, handleFollowProfile, profile, userUid, version }) => {
    return (
        <>
            { profile &&
                <>
                    { version === "mobile" &&
                        <div className="flex font-medium md:hidden w-full">
                            { userUid === profile?.id ? 
                               <div className="flex items-center pt-2 space-x-3 w-full">
                                    <div className="border cursor-pointer dark:border-dark-400 dark:text-white duration-300 pb-2 pt-2 rounded-md text-center text-sm transition w-11/12">
                                        <NavLink to="/settings/edit-profile">
                                            Edit Profile
                                        </NavLink>
                                    </div>
                                    <MoreOptionsIconMini boxForm={ true } />
                                </div>
                                :
                                <div className="flex items-center pt-2 space-x-3 text-sm w-full">
                                    <div className={`border cursor-pointer dark:border-dark-400 dark:text-white duration-300 flex pb-2 pt-2 rounded-md items-center justify-center space-x-1.5 transition w-5/12 ${ !followedSnap && "bg-instagram-100 text-white" }`} onClick={ handleFollowProfile }>
                                        <p>{ followedSnap ? "Following" : "Follow" }</p>
                                        { followedSnap && <MoreOptionsIconMiniMobile /> }
                                    </div>
                                    <div className="border cursor-pointer dark:border-dark-400 dark:text-white duration-300 pb-2 pt-2 rounded-md text-center transition w-5/12">
                                        <p>Messsage</p>
                                    </div>
                                    <MoreOptionsIconMini boxForm={ true } />
                                </div>
                            }
                        </div>
                    }
                    { version === "desktop" &&
                        <div className="hidden md:flex">
                            { userUid === profile?.id ?
                                <div className="flex items-center -mt-1 space-x-4">
                                    { profile?.username?.length < 16 &&
                                        <NavLink className="animate__animated animate__fadeIn border cursor-pointer dark:border-dark-400 dark:text-white dark:hover:bg-opacity-10 duration-300 font-medium hover:bg-gray-100 pb-1.5 pl-4 pr-4 pt-1.5 rounded-md text-center text-sm transition" to="/settings/edit-profile">
                                            Edit Profile
                                        </NavLink>
                                    }
                                    <NavLink to="/settings/edit-profile">
                                        <SettingsIcon height="25" width="25" />
                                    </NavLink>
                                </div>
                                :
                                <div className="flex items-center -mt-1 space-x-3">
                                    <div className={`animate__animated animate__fadeIn border cursor-pointer bg-instagram-100 dark:bg-dark-300 dark:border-dark-300 dark:hover:bg-dark-200 duration-300 flex font-medium hover:bg-instagram-200 items-center pb-1.5 pl-6 pr-6 pt-1.5 rounded-md space-x-2 text-center text-sm text-white transition ${ !followedSnap && "bg-instagram-100 dark:bg-instagram-100 dark:hover:bg-instagram-200 text-white" }`} onClick={ handleFollowProfile }>
                                        <p>{ followedSnap ? "Following" : "Follow" }</p>
                                        { followedSnap && <MoreOptionsIconMini boxForm={ false } /> }
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <MoreOptionsIconBig />
                                    </div>
                                </div>
                            }
                        </div>
                    }
                </>
            }
        </>
    );
};