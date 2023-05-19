import "../Styles/Navigation.css";
import { NewPost } from "./NewPost";
import React, { useState } from "react";
import { HomeIcon } from "../Icons/Home";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import { startLogout } from "../Actions/auth";
import { BackIconMini } from "../Icons/Back";
import { NewPostIcon } from "../Icons/NewPost";
import { ProfileIcon } from "../Icons/Profile";
import { ExploreIcon } from "../Icons/Explore";
import { SavedIconMini } from "../Icons/Saved";
import { SettingsIcon } from "../Icons/Settings";
import { InstagramLogo } from "../Icons/Instagram";
import { MessengerIcon } from "../Icons/Messenger";
import { NotificationsIcon } from "../Icons/Notifications";
import { SwitchAccountsIcon } from "../Icons/SwitchAccounts";
import { HeaderIconsMobile } from "../Icons/HeaderIconsMobile";

export const Header = ({ profile }) => {   
    const dispatch = useDispatch();
    const location = useLocation();
    const handleLogout = () => dispatch( startLogout() );
    const [ openCreatePost, setOpenCreatePost ] = useState( false );
    const [ openHeaderOptions, setOpenHeaderOptions ] = useState( false );
    
    return (
        <>
            <div className="bg-white block dark:border-dark-300 dark:bg-black duration-300 md:border-b md:border-smoke-200 md:dark:border-dark-200 sticky top-0 transition z-20">
                <div className="flex items-center max-w-5xl mx-auto pb-1 pl-2 pr-2 pt-1 md:pb-1.5 md:pl-4 md:pr-4 md:pt-1.5 xl:pl-2 xl:pr-0">
                    <InstagramLogo />
                    <div className="flex-grow relative">
                        <div className="absolute bg-smoke-100 border dark:border-dark-200 dark:bg-dark-100 duration-300 hidden left-24 lg:left-32 md:flex mx-auto pb-1.5 pl-4.5 pr-4 pt-1 rounded-md -top-4.5 transition w-max xl:left-64">
                            <input className="bg-transparent dark:placeholder-gray-400 dark:text-white duration-300 font-light focus:outline-none placeholder-smoke-400 transition w-56" placeholder="Search" />
                        </div>
                    </div>
                    <div className="flex items-center space-x-6 md:space-x-5">
                        <HeaderIconsMobile openCreatePost={ openCreatePost } setOpenCreatePost={ setOpenCreatePost } />
                        <HomeIcon />
                        <MessengerIcon />
                        <NewPostIcon openCreatePost={ openCreatePost } setOpenCreatePost={ setOpenCreatePost } />
                        <ExploreIcon />
                        <NotificationsIcon isUsedOnProfile={ false } />
                        <div className="hidden md:block relative">
                            { profile?.profilePicture === null ?
                                <div onClick={ () => setOpenHeaderOptions( !openHeaderOptions ) }>
                                    {( openHeaderOptions || location.pathname === `/:${ profile?.username }` || location.pathname === "/saved" || location.pathname === "/settings" || location.pathname === "/settings/edit-profile" || location.pathname === "/settings/change-password" || location.pathname === "/settings/privacy-security" || location.pathname === "/settings/display-accesibility" ) ?
                                        <svg className="border-black border-2 cursor-pointer dark:border-white h-7 p-avatar object-cover rounded-full w-7" viewBox="0 0 212 212">
                                            <path fill="#b8b9b9" d="M106.251.5C164.653.5 212 47.846 212 106.25S164.653 212 106.25 212C47.846 212 .5 164.654.5 106.25S47.846.5 106.251.5z" />
                                            <path fill="#FFF" d="M173.561 171.615a62.767 62.767 0 0 0-2.065-2.955 67.7 67.7 0 0 0-2.608-3.299 70.112 70.112 0 0 0-3.184-3.527 71.097 71.097 0 0 0-5.924-5.47 72.458 72.458 0 0 0-10.204-7.026 75.2 75.2 0 0 0-5.98-3.055c-.062-.028-.118-.059-.18-.087-9.792-4.44-22.106-7.529-37.416-7.529s-27.624 3.089-37.416 7.529c-.338.153-.653.318-.985.474a75.37 75.37 0 0 0-6.229 3.298 72.589 72.589 0 0 0-9.15 6.395 71.243 71.243 0 0 0-5.924 5.47 70.064 70.064 0 0 0-3.184 3.527 67.142 67.142 0 0 0-2.609 3.299 63.292 63.292 0 0 0-2.065 2.955 56.33 56.33 0 0 0-1.447 2.324c-.033.056-.073.119-.104.174a47.92 47.92 0 0 0-1.07 1.926c-.559 1.068-.818 1.678-.818 1.678v.398c18.285 17.927 43.322 28.985 70.945 28.985 27.678 0 52.761-11.103 71.055-29.095v-.289s-.619-1.45-1.992-3.778a58.346 58.346 0 0 0-1.446-2.322zM106.002 125.5c2.645 0 5.212-.253 7.68-.737a38.272 38.272 0 0 0 3.624-.896 37.124 37.124 0 0 0 5.12-1.958 36.307 36.307 0 0 0 6.15-3.67 35.923 35.923 0 0 0 9.489-10.48 36.558 36.558 0 0 0 2.422-4.84 37.051 37.051 0 0 0 1.716-5.25c.299-1.208.542-2.443.725-3.701.275-1.887.417-3.827.417-5.811s-.142-3.925-.417-5.811a38.734 38.734 0 0 0-1.215-5.494 36.68 36.68 0 0 0-3.648-8.298 35.923 35.923 0 0 0-9.489-10.48 36.347 36.347 0 0 0-6.15-3.67 37.124 37.124 0 0 0-5.12-1.958 37.67 37.67 0 0 0-3.624-.896 39.875 39.875 0 0 0-7.68-.737c-21.162 0-37.345 16.183-37.345 37.345 0 21.159 16.183 37.342 37.345 37.342z" />
                                        </svg>
                                        :
                                        <svg className="cursor-pointer h-7 rounded-full object-cover w-7" viewBox="0 0 212 212">
                                            <path fill="#b8b9b9" d="M106.251.5C164.653.5 212 47.846 212 106.25S164.653 212 106.25 212C47.846 212 .5 164.654.5 106.25S47.846.5 106.251.5z" />
                                            <path fill="#FFF" d="M173.561 171.615a62.767 62.767 0 0 0-2.065-2.955 67.7 67.7 0 0 0-2.608-3.299 70.112 70.112 0 0 0-3.184-3.527 71.097 71.097 0 0 0-5.924-5.47 72.458 72.458 0 0 0-10.204-7.026 75.2 75.2 0 0 0-5.98-3.055c-.062-.028-.118-.059-.18-.087-9.792-4.44-22.106-7.529-37.416-7.529s-27.624 3.089-37.416 7.529c-.338.153-.653.318-.985.474a75.37 75.37 0 0 0-6.229 3.298 72.589 72.589 0 0 0-9.15 6.395 71.243 71.243 0 0 0-5.924 5.47 70.064 70.064 0 0 0-3.184 3.527 67.142 67.142 0 0 0-2.609 3.299 63.292 63.292 0 0 0-2.065 2.955 56.33 56.33 0 0 0-1.447 2.324c-.033.056-.073.119-.104.174a47.92 47.92 0 0 0-1.07 1.926c-.559 1.068-.818 1.678-.818 1.678v.398c18.285 17.927 43.322 28.985 70.945 28.985 27.678 0 52.761-11.103 71.055-29.095v-.289s-.619-1.45-1.992-3.778a58.346 58.346 0 0 0-1.446-2.322zM106.002 125.5c2.645 0 5.212-.253 7.68-.737a38.272 38.272 0 0 0 3.624-.896 37.124 37.124 0 0 0 5.12-1.958 36.307 36.307 0 0 0 6.15-3.67 35.923 35.923 0 0 0 9.489-10.48 36.558 36.558 0 0 0 2.422-4.84 37.051 37.051 0 0 0 1.716-5.25c.299-1.208.542-2.443.725-3.701.275-1.887.417-3.827.417-5.811s-.142-3.925-.417-5.811a38.734 38.734 0 0 0-1.215-5.494 36.68 36.68 0 0 0-3.648-8.298 35.923 35.923 0 0 0-9.489-10.48 36.347 36.347 0 0 0-6.15-3.67 37.124 37.124 0 0 0-5.12-1.958 37.67 37.67 0 0 0-3.624-.896 39.875 39.875 0 0 0-7.68-.737c-21.162 0-37.345 16.183-37.345 37.345 0 21.159 16.183 37.342 37.345 37.342z" />
                                        </svg>
                                    }
                                </div>
                                :
                                <div onClick={ () => setOpenHeaderOptions( !openHeaderOptions ) }>
                                    {( openHeaderOptions || location.pathname === `/:${ profile?.username }` || location.pathname === "/saved" || location.pathname === "/settings" || location.pathname === "/settings/edit-profile" || location.pathname === "/settings/change-password" || location.pathname === "/settings/privacy-security" || location.pathname === "/settings/display-accesibility" ) ?
                                        <img alt="" className="border-black border-2 cursor-pointer dark:border-white h-7 p-avatar object-cover rounded-full w-7" src={ profile?.profilePicture } />
                                        :
                                        <img alt="" className="cursor-pointer h-7 rounded-full object-cover w-7" src={ profile?.profilePicture } />
                                    }
                                </div>
                            }
                            { openHeaderOptions &&
                                <div className="absolute animate__animated animate__fadeIn animate__faster border bg-white dark:bg-black dark:border-dark-400 dark:rounded-md duration-300 h-max -left-44 rounded-lg shadow-lg top-8 transition w-60">
                                    <NavLink className="cursor-pointer dark:bg-opacity-10 duration-300 flex hover:bg-gray-100 items-center pb-2 pl-5 pr-5 pt-2 rounded-t-md space-x-3 transition w-full" to={`/:${ profile?.username }`}>
                                        <ProfileIcon />
                                        <p className="dark:text-white flex-grow text-sm">Profile</p>
                                    </NavLink>
                                    <div className="cursor-pointer dark:bg-opacity-10 duration-300 flex hover:bg-gray-100 items-center pb-2 pl-5 pr-5 pt-2 space-x-3 transition w-full">
                                        <SavedIconMini />
                                        <p className="dark:text-white flex-grow text-sm">Saved</p>
                                    </div>
                                    <NavLink className="cursor-pointer dark:bg-opacity-10 dark:pl-2 duration-300 flex hover:bg-gray-100 items-center pb-2 pl-5 pr-5 pt-2 space-x-3 transition w-full" to="/settings/edit-profile">
                                        <SettingsIcon height="16" width="16" />
                                        <p className="dark:text-white flex-grow text-sm">Settings</p>
                                    </NavLink>
                                    <div className="cursor-pointer dark:bg-opacity-10 duration-300 flex hover:bg-gray-100 items-center pb-2 pl-5 pr-5 pt-2 space-x-3 transition w-full">
                                        <SwitchAccountsIcon />
                                        <p className="dark:text-white flex-grow text-sm">Switch Accounts</p>
                                    </div>
                                    <div className="cursor-pointer border-t dark:bg-opacity-10 dark:border-dark-400 duration-300 flex hover:bg-gray-100 items-center pb-2 pl-5 pr-5 pt-2 rounded-b-md space-x-3 transition w-full" onClick={ handleLogout }>
                                        <BackIconMini />
                                        <p className="dark:text-white flex-grow text-sm">Log Out</p>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
                <NewPost openCreatePost={ openCreatePost } profile={ profile } setOpenCreatePost={ setOpenCreatePost } />
            </div>
        </>
    );
};