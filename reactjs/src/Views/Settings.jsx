import React from "react";
import { NavLink } from "react-router-dom";
import { Setting } from "../Components/Setting";
import { Route, Switch, useRouteMatch } from "react-router";

const SettingsNavlink = ({ to, title }) => {
    return (
        <NavLink activeClassName="animate__animated animate__fadeIn border-black border-l-2 dark:border-white dark:font-medium font-medium" className="cursor-pointer dark:hover:bg-opacity-10 dark:border-white dark:text-white dark:font-extralight duration-300 flex font-light hover:bg-gray-100 hover:border-l-2 pb-4 pl-7 pt-4 transition" to={ to }>
            <p>{ title }</p>
        </NavLink>
    );
};

export const Settings = ({ profile }) => {
    let { path, url } = useRouteMatch();
    document.title = "Settings • The Instagram Clone";

    return (
        <div className="hidden md:flex overscroll-y-auto scrollbar-hide">
            <div className="bg-smoke-100 dark:bg-dark-100 duration-300 flex-grow h-screen overscroll-y-auto scrollbar-hide transition">
                <div className="bg-white border border-gray-300 dark:bg-black dark:border-dark-400 duration-300 flex h-5/6 lg:max-w-4xl max-w-3xl mt-5 mx-auto rounded-lg transition">
                    <div className="border-gray-300 border-r dark:border-dark-400 h-full w-80">
                        <SettingsNavlink title="Edit Profile" to={`${ url }/edit-profile`} />
                        <SettingsNavlink title="Change Password" to={`${ url }/change-password`} />
                        <SettingsNavlink title="Privacy & Security" to={`${ url }/privacy-security`} />
                        <SettingsNavlink title="Display & Accesibility" to={`${ url }/display-accesibility`} />
                    </div>
                    <div className="animate__animated animate__fadeIn w-full">
                        <Switch>
                            <Route exact path={ path }>
                                <div className="bg-white dark:bg-black flex h-93 items-center justify-center rounded-br-lg rounded-tr-lg">
                                    <div className="space-y-5">
                                        <div className="font-light space-y-1">
                                            <h1 className="dark:text-white text-center text-4xl">Your Settings</h1>
                                            <p className="dark:text-gray-400 text-center text-gray-500">Control settings for The Instagram Clone.</p>
                                        </div>
                                    </div>
                                </div>
                            </Route>
                            <Route path={`${ path }/:setting`}>
                                <Setting profile={ profile } />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    );
};