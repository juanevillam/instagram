import screenful from "screenfull";
import React, { useState } from "react";
import "../Styles/DisplayAccesibility.css";
import { useDarkMode } from "../Hooks/useDarkMode";

export const DisplayAccesibility = () => {
    const [ darkMode, setDarkMode ] = useDarkMode();
    document.title = "Display & Accesibility • Settings";
    const [ screenFull, setScreenFull ] = useState( false );

    const toggleFullScreen = () =>  {
        if ( screenFull ) {
            setScreenFull( false );
            screenful.toggle( document.getElementById( "instagram-clone" ).ariaCurrent );
        } if ( !screenFull ) {
            setScreenFull( true );
        };

    };

    return (
        <div className="animate__animated animate__fadeIn pl-3">
            <div className="max-w-md pl-6 pt-6">
                <>
                    <h1 className="dark:text-white font-normal text-xl">Dark Mode</h1>
                    <p className="dark:text-gray-400 max-w-xs pt-px text-gray-500 text-sm">Adjust the appearance of The Instagram Clone to reduce glare and look cooler.</p>
                </>
                <label className="container dark:bg-opacity-10 duration-300 hover:bg-gray-100 mt-2 max-w-xs rounded-lg transition" onClick={ () => setDarkMode( false ) }>
                    <input defaultChecked={ !darkMode } name="darkMode" type="radio" />
                    <span className="checkmark"></span>
                    <p className="dark:text-white">Off</p>
                </label>
                <label className="container dark:bg-opacity-10 duration-300 hover:bg-gray-100 mt-2 max-w-xs rounded-lg transition" onClick={ () => setDarkMode( true ) }>
                    <input defaultChecked={ darkMode } name="darkMode" type="radio" />
                    <span className="checkmark"></span>
                    <p className="dark:text-white">On</p>
                </label>
            </div>
            <div className="max-w-md pl-6 pt-6">
                <>
                    <h1 className="dark:text-white font-normal text-xl">Full Screen</h1>
                    <p className="dark:text-gray-400 max-w-xs pt-px text-gray-500 text-sm">Adjust the screen size of The Instagram Clone to maximise the screen and share more.</p>
                </>
                <label className="container dark:bg-opacity-10 duration-300 hover:bg-gray-100 mt-2 max-w-xs rounded-lg transition" onClick={ toggleFullScreen }>
                    <input defaultChecked={ !screenful.isFullscreen } name="screenful.isFullscreen" type="radio" />
                    <span className="checkmark"></span>
                    <p className="dark:text-white">Off</p>
                </label>
                <label className="container dark:bg-opacity-10 duration-300 hover:bg-gray-100 mt-2 max-w-xs rounded-lg transition" onClick={ toggleFullScreen }>
                    <input defaultChecked={ screenful.isFullscreen } name="screenful.isFullscreen" type="radio" />
                    <span className="checkmark"></span>
                    <p className="dark:text-white">On</p>
                </label>
            </div>
        </div>
    );
};