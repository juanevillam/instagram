import { Audio } from "./Audio";
import React, { useState } from "react";
import { LikeIconMessenger } from "../Icons/Like";
import { MoreOptionsIconMessenger } from "../Icons/MoreOptions";

export const Message = ({ audio, audioImage, id, image, like, message, profile }) => {
    const [ moreOptions, setMoreOptions ] = useState( false );
        console.log( " ghooas")
    return (
        <div className="flex group items-center">
            { audio && 
                <div className={`flex items-center ${ id === profile?.id && "ml-auto" }`}>
                    { id === profile?.id  && <MoreOptionsIconMessenger moreOptions={ moreOptions } setMoreOptions={ setMoreOptions } /> }    
                    <div className={`animate__animated animate__fadeIn flex items-center lg:text-base pb-2.5 pl-2 pr-3 pt-2.5 ${ id === profile?.id ? "bg-smoke-300 dark:bg-dark-300 dark:text-white ml-auto" : "bg-transparent border border-smoke-200 dark:border-dark-400 dark:text-white" } rounded-lg text-justify text-sm w-72` }>
                        <Audio audio={ audio } audioImage={ audioImage } />
                    </div> 
                </div> 
            }
            { image &&
                <div className={`flex items-center ${ id === profile?.id && "ml-auto" }`}>
                    { id === profile?.id  && <MoreOptionsIconMessenger moreOptions={ moreOptions } setMoreOptions={ setMoreOptions } /> }    
                    <img alt="" className="animate__animated animate__fadeIn max-h-52 ml-auto rounded-2xl" src={ image } />
                </div>
            }
            { like && 
                <div className={`flex items-center ${ id === profile?.id && "ml-auto" }`}>
                    { id === profile?.id  && <MoreOptionsIconMessenger moreOptions={ moreOptions } setMoreOptions={ setMoreOptions } /> }    
                    <LikeIconMessenger isItMessage={ true } />
                </div> 
            }
            { message &&
                <div className={`flex items-center ${ id === profile?.id && "ml-auto" }`}>
                    { id === profile?.id  && <MoreOptionsIconMessenger moreOptions={ moreOptions } setMoreOptions={ setMoreOptions } /> }
                    <div className={`animate__animated animate__fadeIn lg:text-base max-w-xs pb-3 pl-4 pr-4 ${ message.length > 30 && "pl-6 pr-6" } pt-3.5 ${ id === profile?.id ? "bg-smoke-300 dark:bg-dark-300 dark:text-white ml-auto" : "bg-transparent border border-smoke-200 dark:border-dark-400 dark:text-white" } rounded-full text-justify text-sm w-max xl:max-w-lg` }>
                        <p>{ message }</p>
                    </div>
                </div>
            }
        </div>
    );
};