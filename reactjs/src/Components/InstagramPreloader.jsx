import React from "react";
import "../Styles/InstagramPreloader.css";

export const InstagramPreloader = () => {
    return (
        <div className="bg-white dark:bg-black flex-grow h-screen md:bg-smoke-100 md:dark:bg-dark-100 transition">
            <div className="animate__animated animate__fadeIn Preloader">
                <img className="Preloader__Logo" src="https://media.idownloadblog.com/wp-content/uploads/2020/05/Instagram-glyph-icon-full-size.png" alt="" />
                <p className="Preloader__Text">from</p>
                <h1 className="Preloader__Title">JUAN VILLA</h1>
            </div>
        </div>
    );
};
