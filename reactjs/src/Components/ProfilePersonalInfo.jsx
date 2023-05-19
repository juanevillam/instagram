import React from "react";

export const ProfilePersonalInfo = ({ description, fullName, version }) => {
    return (
        <>  
            { version === "mobile" &&
                <div className="block mt-2 md:hidden pl-2">
                    <h1 className="dark:text-white font-medium">{ fullName }</h1>
                    <h1 className="dark:text-gray-300 font-light text-gray-500 text-sm">{ description }</h1>
                </div>
            }
            { version === "desktop" &&
                <div className="dark:text-white hidden md:block pt-7 w-max">
                    <p className="animate__animated animate__fadeIn font-semibold">{ fullName }</p> 
                    <p className="animate__animated animate__fadeIn font-light max-w-xs -mt-px">{ description }</p> 
                </div>
            }
        </>
    );
};