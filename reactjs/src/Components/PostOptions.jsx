import React from "react";
import { rgba } from "polished";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { DialogDecoration } from "./DialogDecoration";

export const PostOptionsOverlay = styled.div`
    background: ${ rgba( "black", 0.50 ) };
    height: 100vh;
    left: 0;
    opacity: ${ props => props.openPostOptions ? 1 : 0 }; 
    position: fixed;
    top: 0;
    transition-duration: 0.3s; 
    transition-property: visibility opacity; 
    visibility: ${ props  => props.openPostOptions ? "visible" : "hidden" };
    width: 5000px;
    z-index: 31;
`;

export const PostOptionsDialog = styled.div`
    background-color: none; 
    bottom: 0; 
    border-top-left-radius: 20px; 
    border-top-right-radius: 20px; 
    height: max-content; 
    left: 0; 
    position: fixed; 
    right: 0; 
    transition: transform 0.3s; 
    transform: translateY( ${ p => p.openPostOptions ? 0 : "100%" } ); 
    z-index: 100000 !important;
`;

export const PostOptions = ({ createdBy, deletePostHandler, openPostOptions, openPostOptionsConfirmDelete, postId, profile, setOpenPostOptions, setOpenPostOptionsConfirmDelete, setOpenViewPost }) => {
    return (
        <>
            <PostOptionsOverlay openPostOptions={ openPostOptions } onClick={ () => { setOpenPostOptions( false ); setOpenPostOptionsConfirmDelete( false ) } } />
            <div className="md:hidden">
                <PostOptionsOverlay openPostOptions={ openPostOptionsConfirmDelete } onClick={ () => { setOpenPostOptions( false ); setOpenPostOptionsConfirmDelete( false ) } } />
                { openPostOptionsConfirmDelete && 
                    <div className="absolute animate__animated animate__fadeIn animate__faster bg-white dark:bg-dark-100 inset-0 max-h-72 my-auto mx-auto rounded-xl w-64 z-50">
                        <div className="pb-6 pt-6 mx-auto">
                            <p className="animate__animated animate__fadeIn animate__faster dark:text-white font-semibold mb-2 text-center text-xl">Delete this Post?</p>
                            <p className="animate__animated animate__fadeIn animate__faster dark:text-gray-400 font-normal mx-auto text-center text-gray-500 text-sm w-56">You'll be able to restore this post from Settings {'>'} Account {'>'} Recently Deleted within 30 days. After that, it will be permanently deleted.</p>
                        </div>
                        <div>
                            <p className="animate__animated animate__fadeIn border-b border-smoke-200 border-t cursor-pointer dark:border-dark-300 dark:hover:bg-opacity-10 duration-300 font-semibold hover:bg-gray-100 pb-3.5 pt-3 text-center text-red-500 transition w-full" onClick={ deletePostHandler }>Delete</p>
                            <p className="animate__animated animate__fadeIn cursor-pointer dark:text-white dark:hover:bg-opacity-10 duration-300 font-normal hover:bg-gray-100 pb-3.5 pt-3 rounded-b-xl text-center text-black transition w-full" onClick={ () => { setOpenPostOptionsConfirmDelete( false ); setOpenPostOptions( false ); } }>Cancel</p>
                        </div>
                    </div>
                }
                <PostOptionsDialog openPostOptions={ openPostOptions }>
                    <div className="bg-smoke-100 dark:bg-dark-100 pb-1 pt-4 rounded-tl-3xl rounded-tr-3xl">
                        <DialogDecoration />
                        <div className="dark:text-white mb-2 mt-4 text-lg">
                            { createdBy === profile?.id ?
                                <div className="cursor-pointer dark:bg-opacity-10 duration-300 hover:bg-gray-200 pb-2 pl-5 pr-5 pt-2 transition" onClick={ () => { setOpenPostOptions( false ); setOpenPostOptionsConfirmDelete( true ); }  }>
                                    <h1 className="text-red-500">Delete</h1>
                                </div>
                                :
                                <div className="cursor-pointer dark:bg-opacity-10 duration-300 hover:bg-gray-200 pb-2 pl-5 pr-5 pt-2 transition">
                                    <h1 className="text-red-500">Report</h1>
                                </div>
                            }
                            <NavLink to={{ pathname:`/p/:${ postId }` }}>
                                <div className="cursor-pointer dark:bg-opacity-10 duration-300 hover:bg-gray-200 pb-2 pl-5 pr-5 pt-2 transition">
                                    <h1>Go to post</h1>
                                </div>
                            </NavLink>
                            <div className="cursor-pointer dark:bg-opacity-10 duration-300 hover:bg-gray-200 pb-2 pl-5 pr-5 pt-2 transition" onClick={ () => setOpenPostOptions( false ) }>
                                <h1 className="">Cancel</h1>
                            </div>
                        </div>
                    </div>
                </PostOptionsDialog>
            </div>
            <div className="hidden md:block">
                { openPostOptions &&
                    <>
                        { openPostOptionsConfirmDelete ? 
                            <div className="absolute animate__animated animate__fadeIn animate__faster bg-white dark:bg-dark-300 inset-0 max-h-50 my-auto mx-auto rounded-xl w-96 z-40">
                                <div className="pb-6 pt-6 mx-auto">
                                    <p className="animate__animated animate__fadeIn animate__faster dark:text-white font-medium mb-2 text-center text-xl">Delete Post?</p>
                                    <p className="animate__animated animate__fadeIn animate__faster dark:text-gray-400 font-normal text-center text-gray-500 text-sm">Are you sure you want to delete this post?</p>
                                </div>
                                <div>
                                    <p className="animate__animated animate__fadeIn border-b border-gray-300 border-t cursor-pointer dark:bg-opacity-10 dark:border-dark-200 duration-300 font-semibold hover:bg-gray-100 pb-3 pt-3 text-center text-red-500 transition w-full" onClick={ deletePostHandler }>Delete</p>
                                    <p className="animate__animated animate__fadeIn cursor-pointer dark:bg-opacity-10 dark:text-white duration-300 font-normal hover:bg-gray-100 pb-3.5 pt-3 rounded-b-xl text-center text-black transition w-full" onClick={ () => { setOpenPostOptionsConfirmDelete( false ); setOpenPostOptions( false ); } }>Cancel</p>
                                </div>
                            </div>
                            :
                            <div className="absolute animate__animated animate__fadeIn animate__faster bg-white dark:bg-dark-300 inset-0 max-h-49 my-auto mx-auto rounded-xl w-96 z-40">
                                { createdBy === profile?.id ?
                                    <p className="animate__animated animate__fadeIn animate__faster border-b border-gray-300 cursor-pointer dark:bg-opacity-10 dark:border-dark-200 duration-300 font-semibold hover:bg-gray-100 pb-3 pt-3 rounded-t-xl text-center text-red-500 transition w-full" onClick={ () => setOpenPostOptionsConfirmDelete( true ) }>Delete</p>
                                    :
                                    <p className="animate__animated animate__fadeIn animate__faster border-b border-gray-300 cursor-pointer dark:border-dark-200 dark:bg-opacity-10 duration-300 font-semibold hover:bg-gray-100 pb-3 pt-3 rounded-t-xl text-center text-red-500 transition w-full">Report</p>
                                }
                                <NavLink to={{ pathname:`/p/:${ postId }` }}>
                                    <p className="animate__animated animate__fadeIn animate__faster border-b border-gray-300 cursor-pointer dark:bg-opacity-10 dark:border-dark-200 dark:text-white duration-300 font-normal hover:bg-gray-100 pb-3 pt-3 text-center text-black transition w-full">Go to post</p>
                                </NavLink>
                                <p className="animate__animated animate__fadeIn animate__faster border-b border-gray-300 cursor-pointer dark:bg-opacity-10 dark:border-dark-200  dark:text-white duration-300 font-normal hover:bg-gray-100 pb-3 pt-3 text-center text-black transition w-full" onClick={ () => { setOpenPostOptions( false ); setOpenViewPost( true ) } }>View Post</p>
                                <p className="animate__animated animate__fadeIn animate__faster cursor-pointer dark:bg-opacity-10 dark:text-white duration-300 font-normal hover:bg-gray-100 pb-3 pt-3 rounded-b-xl text-center text-black transition w-full" onClick={ () => setOpenPostOptions( false ) }>Cancel</p>
                            </div>
                        }
                    </>                       
                }
            </div>
        </>
    );
};
