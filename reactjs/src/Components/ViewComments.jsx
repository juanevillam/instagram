import React from "react";
import { rgba } from "polished";
import { CommentId } from "./Comment";
import styled from "styled-components";
import { ShareIcon } from "../Icons/Share";
import { BackIconMobileVideo } from "../Icons/Back";

export const ViewCommentsOverlay = styled.div`
    background: ${ rgba( "black", 0.65 ) };
    height: 5000px;
    left: 0;
    opacity: ${ props => props.openViewComments ? 1 : 0 }; 
    position: fixed;
    top: 0;
    transition-duration: 0.3s; 
    transition-property: visibility opacity; 
    visibility: ${ props  => props.openViewComments ? "visible" : "hidden" };
    width: 5000px;
    z-index: 29;
`;

export const ViewCommentsDialog = styled.div`
    background-color: none; 
    bottom: 0; 
    border-top-left-radius: 20px; 
    border-top-right-radius: 20px; 
    height: 100%; 
    left: 0; 
    position: fixed; 
    right: 0; 
    transition: transform 0.3s; 
    transform: translateX( ${ p => p.openViewComments ? 0 : "100%" } ); 
    z-index: 100000 !important;
`;


export const ViewComments = ({ caption, comment, comments, dateCreated, openViewComments, postCommentHandler, profile, profilePicture, setComment, setOpenViewComments, username }) => {    
    return (
        <div className="block md:hidden">
            <ViewCommentsOverlay openViewComments={ openViewComments } onClick={ () => setOpenViewComments( false ) } />
            <ViewCommentsDialog openViewComments={ openViewComments }>
                <div className="bg-black h-full md:hidden relative w-full">
                    <div className="flex items-center justify-between left-0 p-3 top-0 w-full z-20">
                        <div className="flex items-center space-x-6">
                            <div onClick={ () => setOpenViewComments( false ) }>
                                <BackIconMobileVideo />
                            </div>
                            <h1 className="dark:text-white font-medium text-xl">Comments</h1>
                        </div>
                        <ShareIcon />
                    </div>
                    <div className="h-full overflow-y-auto pb-44 pl-2 pr-2 pt-2 space-y-3">
                        { comments.map(({ id, comment }) => <CommentId dateCreated={ comment.dateCreated } key={ id } message={ comment.message } profilePicture={ comment.profilePicture } username={ comment.username } />  ) }
                    </div>
                    <div className="bg-white dark:bg-dark-300 border-t bottom-0 dark:border-dark-100 fixed z-20 w-full">
                        <div className="flex items-center p-1.5 space-x-3">
                            <div className="w-12">
                                <img alt="" className="h-10 object-cover rounded-full w-10" src={ profilePicture } />
                            </div>
                            <form className="flex-grow">
                                <div className="flex items-center pr-1 w-full flex-grow">
                                    <input className="w-full bg-transparent outline-none dark:text-white" type="text" placeholder="Add a comment..." value={ comment } onChange={ (e) => setComment( e.target.value ) } />
                                    <>  
                                        { comment.replace(/ /g,'').length === 0 ?
                                            <button className="animate__animated animate__fadeIn animate__faster cursor-not-allowed text-instagram-100 text-opacity-50">Post</button>
                                            :
                                            <button className="animate__animated animate__fadeIn disabled:cursor-not-allowed disabled:opacity-50 text-instagram-100" disabled={ !comment } onClick={ postCommentHandler }>Post</button>
                                        }
                                    </>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
        </ViewCommentsDialog>
        </div>
    );
};