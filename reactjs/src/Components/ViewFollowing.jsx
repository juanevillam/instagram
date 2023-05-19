import React from "react";
import { rgba } from "polished";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { CloseIconThin } from "../Icons/Close";
import { DialogDecoration } from "./DialogDecoration";

export const ViewFollowingOverlay = styled.div`
    background: ${ rgba( "black", 0.65 ) };
    height: 5000px;
    left: 0;
    opacity: ${ props => props.openViewFollowing ? 1 : 0 }; 
    position: fixed;
    top: 0;
    transition-duration: 0.3s; 
    transition-property: visibility opacity; 
    visibility: ${ props  => props.openViewFollowing ? "visible" : "hidden" };
    width: 5000px;
    z-index: 50;
`;

export const ViewFollowingDialog = styled.div`
    background-color: none; 
    bottom: 0; 
    border-top-left-radius: 20px; 
    border-top-right-radius: 20px; 
    height: max-content; 
    left: 0; 
    position: fixed; 
    right: 0; 
    transition: transform 0.3s; 
    transform: translateY( ${ p => p.openViewFollowing ? 0 : "100%" } ); 
    z-index: 100000 !important;
`;

export const ViewFollowing = ({ following, openViewFollowing, setOpenViewFollowing }) => {
    return (
        <>
            <ViewFollowingOverlay openViewFollowing={ openViewFollowing } onClick={ () => setOpenViewFollowing( false ) } />
            <div className="md:hidden">
                <ViewFollowingDialog openViewFollowing={ openViewFollowing }>
                    <div className="bg-smoke-100 dark:bg-dark-100 pb-1 pt-4 rounded-tl-3xl rounded-tr-3xl">
                        <DialogDecoration />
                        <div className="mb-2 mt-4 pl-3 pr-3 space-y-3">
                        { following.map(({ id, following }) => (
                            <div className="flex items-center w-full" key={ id }>
                                    <div className="flex flex-grow items-center space-x-3">
                                        <NavLink to={`/:${ following?.username }`}>
                                            { following?.profilePicture ? 
                                                <img alt="" className="h-12 object-cover rounded-full w-12" src={ following?.profilePicture } />
                                                :
                                                <svg className="h-12 object-cover rounded-full w-12" viewBox="0 0 212 212">
                                                    <path fill="#b8b9b9" d="M106.251.5C164.653.5 212 47.846 212 106.25S164.653 212 106.25 212C47.846 212 .5 164.654.5 106.25S47.846.5 106.251.5z" />
                                                    <path fill="#FFF" d="M173.561 171.615a62.767 62.767 0 0 0-2.065-2.955 67.7 67.7 0 0 0-2.608-3.299 70.112 70.112 0 0 0-3.184-3.527 71.097 71.097 0 0 0-5.924-5.47 72.458 72.458 0 0 0-10.204-7.026 75.2 75.2 0 0 0-5.98-3.055c-.062-.028-.118-.059-.18-.087-9.792-4.44-22.106-7.529-37.416-7.529s-27.624 3.089-37.416 7.529c-.338.153-.653.318-.985.474a75.37 75.37 0 0 0-6.229 3.298 72.589 72.589 0 0 0-9.15 6.395 71.243 71.243 0 0 0-5.924 5.47 70.064 70.064 0 0 0-3.184 3.527 67.142 67.142 0 0 0-2.609 3.299 63.292 63.292 0 0 0-2.065 2.955 56.33 56.33 0 0 0-1.447 2.324c-.033.056-.073.119-.104.174a47.92 47.92 0 0 0-1.07 1.926c-.559 1.068-.818 1.678-.818 1.678v.398c18.285 17.927 43.322 28.985 70.945 28.985 27.678 0 52.761-11.103 71.055-29.095v-.289s-.619-1.45-1.992-3.778a58.346 58.346 0 0 0-1.446-2.322zM106.002 125.5c2.645 0 5.212-.253 7.68-.737a38.272 38.272 0 0 0 3.624-.896 37.124 37.124 0 0 0 5.12-1.958 36.307 36.307 0 0 0 6.15-3.67 35.923 35.923 0 0 0 9.489-10.48 36.558 36.558 0 0 0 2.422-4.84 37.051 37.051 0 0 0 1.716-5.25c.299-1.208.542-2.443.725-3.701.275-1.887.417-3.827.417-5.811s-.142-3.925-.417-5.811a38.734 38.734 0 0 0-1.215-5.494 36.68 36.68 0 0 0-3.648-8.298 35.923 35.923 0 0 0-9.489-10.48 36.347 36.347 0 0 0-6.15-3.67 37.124 37.124 0 0 0-5.12-1.958 37.67 37.67 0 0 0-3.624-.896 39.875 39.875 0 0 0-7.68-.737c-21.162 0-37.345 16.183-37.345 37.345 0 21.159 16.183 37.342 37.345 37.342z" />
                                                </svg>
                                            }
                                        </NavLink>
                                        <div>
                                            <NavLink to={`/:${ following?.username }`}>
                                                <h1 className="dark:text-white font-medium hover:underline">{ following?.username }</h1>
                                            </NavLink>
                                            <h1 className="dark:text-gray-400 text-gray-500 text-xs">{ following?.name }</h1>
                                        </div>
                                    </div>
                                </div> 
                            ))}
                        </div>
                    </div>
                </ViewFollowingDialog>
            </div>
            <div className="hidden md:block">
                { openViewFollowing &&
                    <div className="absolute animate__animated animate__fadeIn animate__faster bg-white dark:bg-dark-300 h-96 inset-0 mx-auto rounded-xl top-20 w-96 z-50">
                        <div className="border-b border-smoke-200 dark:border-dark-200 pb-1.5 pt-2">
                            <h1 className="dark:text-white font-medium mt-0.5 text-center">Following</h1>
                            <CloseIconThin newState={ false } setState={ setOpenViewFollowing } />
                        </div>
                        <div className="h-80 overflow-y-scroll pl-3 pr-3 pt-3 space-y-4 w-full">
                            { following.length < 1 && <h1 className="dark:text-white text-center">This user does not follow anyone.</h1> }
                            { following.map(({ id, following }) => (
                                <div className="animate__animated animate__fadeIn flex items-center w-full" key={ id }>
                                    <div className="flex flex-grow items-center space-x-3">
                                        <NavLink to={`/:${ following?.username }`}>
                                            { following?.profilePicture ? 
                                                <img alt="" className="h-12 object-cover rounded-full w-12" src={ following?.profilePicture } />
                                                :
                                                <svg className="h-12 object-cover rounded-full w-12" viewBox="0 0 212 212">
                                                    <path fill="#b8b9b9" d="M106.251.5C164.653.5 212 47.846 212 106.25S164.653 212 106.25 212C47.846 212 .5 164.654.5 106.25S47.846.5 106.251.5z" />
                                                    <path fill="#FFF" d="M173.561 171.615a62.767 62.767 0 0 0-2.065-2.955 67.7 67.7 0 0 0-2.608-3.299 70.112 70.112 0 0 0-3.184-3.527 71.097 71.097 0 0 0-5.924-5.47 72.458 72.458 0 0 0-10.204-7.026 75.2 75.2 0 0 0-5.98-3.055c-.062-.028-.118-.059-.18-.087-9.792-4.44-22.106-7.529-37.416-7.529s-27.624 3.089-37.416 7.529c-.338.153-.653.318-.985.474a75.37 75.37 0 0 0-6.229 3.298 72.589 72.589 0 0 0-9.15 6.395 71.243 71.243 0 0 0-5.924 5.47 70.064 70.064 0 0 0-3.184 3.527 67.142 67.142 0 0 0-2.609 3.299 63.292 63.292 0 0 0-2.065 2.955 56.33 56.33 0 0 0-1.447 2.324c-.033.056-.073.119-.104.174a47.92 47.92 0 0 0-1.07 1.926c-.559 1.068-.818 1.678-.818 1.678v.398c18.285 17.927 43.322 28.985 70.945 28.985 27.678 0 52.761-11.103 71.055-29.095v-.289s-.619-1.45-1.992-3.778a58.346 58.346 0 0 0-1.446-2.322zM106.002 125.5c2.645 0 5.212-.253 7.68-.737a38.272 38.272 0 0 0 3.624-.896 37.124 37.124 0 0 0 5.12-1.958 36.307 36.307 0 0 0 6.15-3.67 35.923 35.923 0 0 0 9.489-10.48 36.558 36.558 0 0 0 2.422-4.84 37.051 37.051 0 0 0 1.716-5.25c.299-1.208.542-2.443.725-3.701.275-1.887.417-3.827.417-5.811s-.142-3.925-.417-5.811a38.734 38.734 0 0 0-1.215-5.494 36.68 36.68 0 0 0-3.648-8.298 35.923 35.923 0 0 0-9.489-10.48 36.347 36.347 0 0 0-6.15-3.67 37.124 37.124 0 0 0-5.12-1.958 37.67 37.67 0 0 0-3.624-.896 39.875 39.875 0 0 0-7.68-.737c-21.162 0-37.345 16.183-37.345 37.345 0 21.159 16.183 37.342 37.345 37.342z" />
                                                </svg>
                                            }
                                        </NavLink>
                                        <div>
                                            <NavLink to={`/:${ following?.username }`}>
                                                <h1 className="dark:text-white font-medium hover:underline">{ following?.username }</h1>
                                            </NavLink>
                                            <h1 className="dark:text-gray-400 text-gray-500 text-xs">{ following?.name }</h1>
                                        </div>
                                    </div>
                                </div> 
                            ))}
                        </div>
                    </div>
                }
            </div>
        </>
    );
};
