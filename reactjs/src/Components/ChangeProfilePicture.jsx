import React from "react";
import { rgba } from "polished";
import styled from "styled-components";

export const ChangeProfilePictureOverlay = styled.div`
    background: ${ rgba( "black", 0.50 ) };
    height: 5000px;
    left: 0;
    opacity: ${ props => props.openChangeProfilePicture ? 1 : 0 }; 
    position: fixed;
    top: 0;
    transition-duration: 0.3s; 
    transition-property: visibility opacity; 
    visibility: ${ props  => props.openChangeProfilePicture ? "visible" : "hidden" };
    width: 5000px;
    z-index: 31;
`;

export const ChangeProfilePicture = ({ filePicker, openChangeProfilePicture, setImageFromFilePicker, setOpenChangeProfilePicture }) => {
    return (
        <>
            <ChangeProfilePictureOverlay openChangeProfilePicture={ openChangeProfilePicture } onClick={ () => setOpenChangeProfilePicture( false ) } />
            <div className="hidden md:block">
                { openChangeProfilePicture &&
                    <div className="absolute animate__animated animate__fadeIn animate__faster bg-white dark:bg-dark-300 inset-0 max-h-60 my-auto mx-auto rounded-xl w-96 z-40">
                        <div className="pb-6 pt-7 mx-auto">
                            <p className="animate__animated animate__fadeIn animate__faster dark:text-white mb-2 text-center text-xl">Change Profile Photo</p>
                        </div>
                        <div>
                            <p className="animate__animated animate__fadeIn border-b border-gray-300 border-t cursor-pointer dark:bg-opacity-10 dark:border-dark-200 duration-300 font-semibold hover:bg-gray-100 pb-3 pt-3 text-center text-instagram-100 transition w-full" onClick={ () => filePicker.current.click() }>Upload Photo</p>
                            <p className="animate__animated animate__fadeIn border-b border-gray-300 cursor-pointer dark:bg-opacity-10 dark:border-dark-200 dark:text-white duration-300 font-semibold hover:bg-gray-100 pb-3.5 pt-3 text-center text-red-500 transition w-full" onClick={ () => { setImageFromFilePicker( null ); setOpenChangeProfilePicture( false ); } }>Remove Current Photo</p>
                            <p className="animate__animated animate__fadeIn cursor-pointer dark:bg-opacity-10 dark:text-white duration-300 font-normal hover:bg-gray-100 pb-3.5 pt-3 rounded-b-xl text-black text-center transition w-full" onClick={ () => setOpenChangeProfilePicture( false ) }>Cancel</p>
                        </div>
                    </div>
                }
            </div>
        </>
    );
};