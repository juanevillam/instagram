import { rgba } from "polished";
import { Video } from "./Video";
import styled from "styled-components";
import { BackIcon } from "../Icons/Back";
import { useLocation } from "react-router";
import { MediaIcon } from "../Icons/Media";
import { CloseIcon } from "../Icons/Close";
import React, { useRef, useState } from "react";
import { LocationIcon } from "../Icons/Location";
import { handleSubmitPost } from "../Helpers/handleSubmitPost";
import { handleCloseCreatePost } from "../Helpers/handleCloseCreatePost";
import { handleSetImageFromFilePicker } from "../Helpers/handleSetImageFromFilePicker";

export const NewPostOverlay = styled.div`
    background: ${ rgba( "black", 0.75 ) };
    height: 5000px;
    left: 0;
    opacity: ${ props => props.openCreatePost ? 1 : 0 }; 
    position: fixed;
    top: 0;
    transition-duration: 0.3s; 
    transition-property: visibility opacity; 
    visibility: ${ props  => props.openCreatePost ? "visible" : "hidden" };
    width: 5000px;
    z-index: 30;
`;

export const NewPost = ({ openCreatePost, profile, setOpenCreatePost }) => {
    const location = useLocation();
    const filePicker = useRef( null );
    const [ caption, setCaption ] = useState( "" );
    const [ openCreateCaption, setOpenCreateCaption ] = useState( false );
    const [ imageFromFilePicker, setImageFromFilePicker ] = useState( null );
    const closeCreatePostHandler = () => handleCloseCreatePost( location, profile, setOpenCreatePost );
    const setImageFromFilePickerHandler = ( e ) => handleSetImageFromFilePicker( e, setImageFromFilePicker );
    const submitPostHandler = () => handleSubmitPost( caption, imageFromFilePicker, profile, setCaption, setImageFromFilePicker, setOpenCreatePost );

    return (
        <>
           <div className="md:hidden">
                <div className="block dark:hidden"></div>
                <div className="hidden dark:block"></div>
            </div>
            <div className="hidden md:block">
                <NewPostOverlay onClick={ closeCreatePostHandler } openCreatePost={ openCreatePost } />
                { openCreatePost &&
                    <>
                        <div className="absolute bg-white dark:bg-dark-300 h-96 inset-0 mx-auto rounded-xl top-20 w-96 z-50">
                            { imageFromFilePicker ?
                                <div className="flex items-center justify-between pl-3 pr-3 w-full">
                                    { openCreateCaption ?
                                        <>
                                            <BackIcon newState={ false } setState={ setOpenCreateCaption } />
                                            <div className="animate__animated animate__fadeIn">
                                                <h1 className="dark:text-white font-medium mb-2 mt-2.5 text-center">Create New Post</h1>
                                            </div>
                                            <div className="animate__animated animate__fadeIn">
                                                <h1 className="cursor-pointer font-medium mb-2 mt-2.5 text-instagram-100 text-center" onClick={ submitPostHandler }>Share</h1>
                                            </div>
                                        </>
                                        :
                                        <>
                                            <BackIcon newState={ null } setState={ setImageFromFilePicker } />
                                            <h1 className="animate__animated animate__fadeIn dark:text-white font-medium mb-2 mt-2.5 text-center">Crop</h1>
                                            <h1 className="animate__animated animate__fadeIn cursor-pointer font-medium mb-2 mt-2.5 text-instagram-100 text-center" onClick={ () => setOpenCreateCaption( true ) }>Next</h1>
                                        </>
                                    }
                                </div>
                                :
                                <h1 className="animate__animated animate__fadeIn border-b border-smoke-200 dark:border-dark-200 dark:text-white font-medium mb-2 mt-2.5 pb-2 text-center">Create New Post</h1>
                            }
                            { imageFromFilePicker ?
                                <>
                                    { openCreateCaption ?
                                        <div className="bg-transparent w-96">
                                            <div className="flex items-center p-3 space-x-3">
                                                <img className="animate__animated animate__fadeIn cursor-pointer h-9 object-cover rounded-full w-9" src={ profile?.profilePicture } alt="" />
                                                <p className="animate__animated animate__fadeIn dark:text-white font-medium text-lg">{ profile?.username }</p>
                                            </div>
                                            <textarea className="animate__animated animate__fadeIn bg-transparent dark:placeholder-gray-300 dark:text-white font-light mt-2 outline-none pb-14 pl-3 pr-3 resize-none text-xl w-full" placeholder="Write a caption..." rows="5" value={ caption } onChange={ ( e ) => setCaption( e.target.value ) } />
                                            <div className="absolute bottom-0 border-gray-300 border-t dark:border-dark-200 flex items-center p-3 w-full">
                                                <input className="animate__animated animate__fadeIn bg-transparent dark:text-white flex-grow focus:outline-none font-light pr-3 text-xl" placeholder="Add location..." />
                                                <LocationIcon />
                                            </div>
                                        </div>
                                        :
                                        <>
                                            { imageFromFilePicker[ 13 ] === "4" ? 
                                                <Video height="h-full max-h-96" image={ imageFromFilePicker } objectFit="object-cover rounded-b-xl" svgHeight="h-14 md:h-16" svgWidth="w-14 md:w-20" />
                                                :
                                                <img alt="" className="animate__animated animate__fadeIn h-84 object-cover rounded-b-xl w-full" src={ imageFromFilePicker } />
                                            }
                                        </>
                                    }
                                </>
                                :
                                <div className="flex flex-col h-full items-center justify-center">
                                    <MediaIcon />
                                    <h1 className="animate__animated animate__fadeIn dark:text-white font-thin mb-6 text-center text-xl">Drag photos and <br /> videos here</h1>
                                    <button className="animate__animated animate__fadeIn bg-instagram-100 duration-300 font-medium hover:bg-blue-500 pb-2 pl-2.5 pr-2.5 pt-2 rounded-md text-sm text-white transition w-max" onClick={ () => filePicker.current.click() }>Select from computer</button>
                                    <input hidden type="file" ref={ filePicker } onChange={ setImageFromFilePickerHandler } />
                                </div>
                            }
                        </div>
                        <CloseIcon newState={ false } setState={ setOpenCreatePost } />
                    </>
                }
            </div>
        </>
    );
};