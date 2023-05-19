import ReactTimeago from "react-time-ago";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { auth, db } from "../Database/firebase";
import React, { useEffect, useState } from "react";
import { CameraIconMobile } from "../Icons/Camera";
import { handleGetId } from "../Helpers/handleGetId";
import { LikeIconMessengerMini } from "../Icons/Like";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";

export const ChatSidebar = ({ id, users, to }) => {
    const [ user ] = useAuthState( auth );
    const [ messages, setMessages ] = useState( "" );
    const { hidden } = useSelector( state => state.messenger );

    const [ userSnapshot ] = useCollection( db.collection( "users" ).where( "id", "==", handleGetId( users, user ) ) );
    const profile = userSnapshot?.docs?.[ 0 ]?.data();
    
    useEffect( () => db.collection( "chats" ).doc( id ).collection( "messages" ).orderBy( "dateCreated", "desc" ).onSnapshot( ( snapshot ) => setMessages( snapshot.docs.map( ( doc ) => doc.data() ))), [ id ]);

    return (
        <div className={`${ hidden && "hidden md:block" }`}>
            { profile ? 
                <NavLink className="animate__animated animate__fadeIn cursor-pointer duration-300 dark:hover:bg-opacity-10 flex hover:bg-gray-100 hover:no-underline hover:text-black items-center justify-between pb-2 pl-3 pr-3 pt-2 transition w-full" activeClassName="bg-instagram-100 bg-opacity-10 hidden md:block" to={ to }>
                    <div className="flex flex-grow items-center space-x-3">
                        { profile?.profilePicture ? 
                            <img alt="" className="h-14 md:h-16 md:w-16 object-cover rounded-full w-14" src={ profile?.profilePicture } />
                            :
                            <svg className="h-14 md:h-16 md:w-16 object-cover rounded-full w-14" viewBox="0 0 212 212">
                                <path fill="#b8b9b9" d="M106.251.5C164.653.5 212 47.846 212 106.25S164.653 212 106.25 212C47.846 212 .5 164.654.5 106.25S47.846.5 106.251.5z" />
                                <path fill="#FFF" d="M173.561 171.615a62.767 62.767 0 0 0-2.065-2.955 67.7 67.7 0 0 0-2.608-3.299 70.112 70.112 0 0 0-3.184-3.527 71.097 71.097 0 0 0-5.924-5.47 72.458 72.458 0 0 0-10.204-7.026 75.2 75.2 0 0 0-5.98-3.055c-.062-.028-.118-.059-.18-.087-9.792-4.44-22.106-7.529-37.416-7.529s-27.624 3.089-37.416 7.529c-.338.153-.653.318-.985.474a75.37 75.37 0 0 0-6.229 3.298 72.589 72.589 0 0 0-9.15 6.395 71.243 71.243 0 0 0-5.924 5.47 70.064 70.064 0 0 0-3.184 3.527 67.142 67.142 0 0 0-2.609 3.299 63.292 63.292 0 0 0-2.065 2.955 56.33 56.33 0 0 0-1.447 2.324c-.033.056-.073.119-.104.174a47.92 47.92 0 0 0-1.07 1.926c-.559 1.068-.818 1.678-.818 1.678v.398c18.285 17.927 43.322 28.985 70.945 28.985 27.678 0 52.761-11.103 71.055-29.095v-.289s-.619-1.45-1.992-3.778a58.346 58.346 0 0 0-1.446-2.322zM106.002 125.5c2.645 0 5.212-.253 7.68-.737a38.272 38.272 0 0 0 3.624-.896 37.124 37.124 0 0 0 5.12-1.958 36.307 36.307 0 0 0 6.15-3.67 35.923 35.923 0 0 0 9.489-10.48 36.558 36.558 0 0 0 2.422-4.84 37.051 37.051 0 0 0 1.716-5.25c.299-1.208.542-2.443.725-3.701.275-1.887.417-3.827.417-5.811s-.142-3.925-.417-5.811a38.734 38.734 0 0 0-1.215-5.494 36.68 36.68 0 0 0-3.648-8.298 35.923 35.923 0 0 0-9.489-10.48 36.347 36.347 0 0 0-6.15-3.67 37.124 37.124 0 0 0-5.12-1.958 37.67 37.67 0 0 0-3.624-.896 39.875 39.875 0 0 0-7.68-.737c-21.162 0-37.345 16.183-37.345 37.345 0 21.159 16.183 37.342 37.345 37.342z" />
                            </svg>
                        }
                        <div className="animate__animated animate__fadeIn">
                            <h1 className="animate__animated animate__fadeIn dark:text-white">{ profile?.username }</h1>
                            <div className="dark:text-gray-400 font-light text-gray-700 text-sm">
                                { messages.length === 0 ? 
                                    "No messages Yet" 
                                    : 
                                    <>
                                        { messages[ 0 ]?.id === user.uid && <strong>You:</strong> } 
                                        { messages[0]?.message &&
                                            <p className="inline-flex ml-1 mr-1">
                                                { messages[0]?.message.length > 16 ? 
                                                    <>
                                                        { messages[0]?.message.slice( 0, 16 ) }...
                                                    </> 
                                                    : 
                                                    messages[0]?.message 
                                                } 
                                            </p> 
                                        }
                                        { messages[0]?.image && <p className="inline-flex ml-1 mr-1">Photo</p> }
                                        { messages[0]?.audio && <p className="inline-flex ml-1 mr-1">Audio</p> }
                                        { messages[0]?.like && <LikeIconMessengerMini /> }
                                        <p className="inline-flex mr-1">•</p>
                                        { messages[0]?.dateCreated && <ReactTimeago className="animate__animated animate__fadeIn dark:text-gray-400 font-light text-gray-700 w-max" date={ new Date( messages[ 0 ]?.dateCreated?.toDate() ) } locale="en-US" timeStyle="twitter" /> }
                                    </> 
                                }
                            </div>
                        </div>
                    </div>
                    <CameraIconMobile />
                </NavLink>
                :
                <h1>Loading...</h1>
            }
        </div>
    );
};