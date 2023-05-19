import React from "react";
import { rgba } from "polished";
import styled from "styled-components";
import { CloseIcon } from "../Icons/Close";

export const ViewProfilePictureOverlay = styled.div`
    background: ${ rgba( "black", 0.65 ) };
    height: 5000px;
    left: 0;
    opacity: ${ props => props.openViewProfilePicture ? 1 : 0 }; 
    position: fixed;
    top: 0;
    transition-duration: 0.3s; 
    transition-property: visibility opacity; 
    visibility: ${ props  => props.openViewProfilePicture ? "visible" : "hidden" };
    width: 5000px;
    z-index: 29;
`;

export const ViewProfilePicture = ({ openViewProfilePicture, profilePicture, setOpenViewProfilePicture }) => {
    return (
        <div className="hidden md:block">
            <ViewProfilePictureOverlay openViewProfilePicture={ openViewProfilePicture } onClick={ () => setOpenViewProfilePicture( false ) } />
            { openViewProfilePicture &&
                <div className="absolute animate__animated animate__fadeIn animate__faster h-screen inset-0 mx-auto rounded-lg z-30">
                    <img alt="" className="h-full object-contain rounded-bl-lg rounded-tl-lg w-full" src={ profilePicture } />
                    <div className="absolute right-0 top-0">
                        <CloseIcon newState={ false } setState={ setOpenViewProfilePicture } />
                    </div>
                </div>
            }
        </div>
    );
};
