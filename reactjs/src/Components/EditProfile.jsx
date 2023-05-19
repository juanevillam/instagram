import { useDispatch } from "react-redux";
import React, { useState, useEffect, useRef } from "react";
import { handleEditProfile } from "../Helpers/handleEditProfile";
import { handleSetImageFromFilePicker } from "../Helpers/handleSetImageFromFilePicker";
import { handleChangeProfilePicture } from "../Helpers/handleChangeProfilePicture";
import { ChangeProfilePicture } from "./ChangeProfilePicture";

export const EditProfile = ({ profile }) => {
    const dispatch = useDispatch();
    const filePicker = useRef( null );
    document.title = "Edit Profile • Settings";
    const [ username, setUsername ] = useState( "" );
    const [ fullName, setFullName ] = useState( "" );
    const [ description, setDescription ] = useState( "" );
    const [ imageFromFilePicker, setImageFromFilePicker ] = useState( null );
    const [ openChangeProfilePicture, setOpenChangeProfilePicture ] = useState( false );
    
    const setImageHandler = ( e ) => handleSetImageFromFilePicker( e, setImageFromFilePicker );
    const changeProfilePictureHandler = () => handleChangeProfilePicture( filePicker, imageFromFilePicker, profile?.profilePicture, setOpenChangeProfilePicture );
    const editProfileHandler = ( e ) => handleEditProfile( e, username, setUsername, profile, imageFromFilePicker, description, profile?.fatherId, fullName, dispatch );
    
    useEffect(() => {
        setUsername( profile?.username );
        setFullName( profile?.fullName );
        setDescription( profile?.description );
    }, [ profile ]);
    
    return (
        <>
            <div className="animate__animated animate__fadeIn pl-5">
                <div className="duration-300 flex items-center mt-3 pb-1 pl-2 pt-1 space-x-8">
                    <div onClick={ changeProfilePictureHandler }>
                        { profile?.profilePicture === null ?
                            <>
                                { imageFromFilePicker  ?
                                    <img alt="" className="animate__animated animate__fadeIn cursor-pointer h-20 object-cover rounded-full w-20" src={ imageFromFilePicker } />
                                    :    
                                    <svg className="animate__animated animate__fadeIn cursor-pointer h-20 object-cover rounded-full w-20" height="64" viewBox="0 0 212 212" width="64">
                                        <path fill="#b8b9b9" d="M106.251.5C164.653.5 212 47.846 212 106.25S164.653 212 106.25 212C47.846 212 .5 164.654.5 106.25S47.846.5 106.251.5z" />
                                        <path fill="#FFF" d="M173.561 171.615a62.767 62.767 0 0 0-2.065-2.955 67.7 67.7 0 0 0-2.608-3.299 70.112 70.112 0 0 0-3.184-3.527 71.097 71.097 0 0 0-5.924-5.47 72.458 72.458 0 0 0-10.204-7.026 75.2 75.2 0 0 0-5.98-3.055c-.062-.028-.118-.059-.18-.087-9.792-4.44-22.106-7.529-37.416-7.529s-27.624 3.089-37.416 7.529c-.338.153-.653.318-.985.474a75.37 75.37 0 0 0-6.229 3.298 72.589 72.589 0 0 0-9.15 6.395 71.243 71.243 0 0 0-5.924 5.47 70.064 70.064 0 0 0-3.184 3.527 67.142 67.142 0 0 0-2.609 3.299 63.292 63.292 0 0 0-2.065 2.955 56.33 56.33 0 0 0-1.447 2.324c-.033.056-.073.119-.104.174a47.92 47.92 0 0 0-1.07 1.926c-.559 1.068-.818 1.678-.818 1.678v.398c18.285 17.927 43.322 28.985 70.945 28.985 27.678 0 52.761-11.103 71.055-29.095v-.289s-.619-1.45-1.992-3.778a58.346 58.346 0 0 0-1.446-2.322zM106.002 125.5c2.645 0 5.212-.253 7.68-.737a38.272 38.272 0 0 0 3.624-.896 37.124 37.124 0 0 0 5.12-1.958 36.307 36.307 0 0 0 6.15-3.67 35.923 35.923 0 0 0 9.489-10.48 36.558 36.558 0 0 0 2.422-4.84 37.051 37.051 0 0 0 1.716-5.25c.299-1.208.542-2.443.725-3.701.275-1.887.417-3.827.417-5.811s-.142-3.925-.417-5.811a38.734 38.734 0 0 0-1.215-5.494 36.68 36.68 0 0 0-3.648-8.298 35.923 35.923 0 0 0-9.489-10.48 36.347 36.347 0 0 0-6.15-3.67 37.124 37.124 0 0 0-5.12-1.958 37.67 37.67 0 0 0-3.624-.896 39.875 39.875 0 0 0-7.68-.737c-21.162 0-37.345 16.183-37.345 37.345 0 21.159 16.183 37.342 37.345 37.342z" />
                                    </svg>
                                }
                            </>
                            :
                            <>
                                { imageFromFilePicker  ?
                                    <img alt="" className="animate__animated animate__fadeIn cursor-pointer h-20 object-cover rounded-full w-20" src={ imageFromFilePicker } />
                                    :    
                                    <img alt="" className="animate__animated animate__fadeIn cursor-pointer h-20 object-cover rounded-full w-20" src={ profile.profilePicture } />        
                                }
                            </>
                        }
                        <input hidden type="file" ref={ filePicker } onChange={ setImageHandler } />
                    </div>
                    <div>
                        <h1 className="font-normal dark:text-white ml-2.5 text-black text-2xl">{ username }</h1>
                        <p className="cursor-pointer font-medium hover:underline ml-2.5 mt-px text-instagram-100 text-md" onClick={ changeProfilePictureHandler }>Change Profile Photo</p>
                    </div>
                </div>
                <form onSubmit={ editProfileHandler }>
                    <div className="max-w-md pl-6 pt-2">
                        <div className="flex items-center space-x-12">
                            <h1 className="dark:text-white font-medium">Name</h1>
                            <input className="border dark:bg-dark-300 dark:border-dark-100 dark:text-white flex-grow focus:outline-none font-light pb-1 pl-2 pr-3 pt-1 rounded-md" name="fullName" maxLength="20" onChange={ ( e ) => setFullName( e.target.value ) } placeholder="Name" value={ fullName } />
                        </div>
                        <p className="dark:text-gray-400 pl-26 pt-1.5 text-gray-500 text-xs">Help people discover your account by using the name you"re known by: either your full name, nickname, or business name.</p>
                    </div>
                    <div className="max-w-md pl-3 pt-5">
                        <div className="flex items-center space-x-7">
                            <h1 className="dark:text-white font-medium">Username</h1>
                            <input className="border dark:bg-dark-300 dark:border-dark-100 dark:text-white flex-grow focus:outline-none font-light pb-1 pl-2 pr-3 pt-1 rounded-md" name="username" maxLength="20" onChange={ ( e ) => setUsername( e.target.value ) } placeholder="@username" value={ username } />
                        </div>
                        <p className="dark:text-gray-400 pl-30 pt-1.5 text-gray-500 text-xs">In most cases, you"ll be able to change your username back to { profile?.username } for another 14 days.</p>
                    </div>
                    <div className="max-w-md pl-3 pt-5">
                        <div className="flex space-x-6">
                            <h1 className="dark:text-white font-medium">Description</h1>
                            <textarea className="border dark:bg-dark-300 dark:border-dark-100 dark:text-white flex-grow focus:outline-none font-light pb-1 pl-2 pr-3 pt-1 resize-none rounded-md" name="description" onChange={ ( e ) => setDescription( e.target.value ) } placeholder={ description } rows="3" value={ description } />
                        </div>
                    </div> 
                    <button className="bg-instagram-100 disabled:cursor-not-allowed disabled:hover:bg-instagram-100 disabled:opacity-50 duration-300 font-medium hover:bg-instagram-200 lg:w-6/12 md:w-7/12 ml-32 mt-4 pb-1.5 pt-1.5 rounded-lg text-white transition" disabled={ fullName.replace(/ /g,'').length < 1 || username.replace(/ /g,'').length < 1 } type="submit" onClick={ editProfileHandler }>Submit</button>
                </form>
            </div>
            <ChangeProfilePicture filePicker={ filePicker } openChangeProfilePicture={ openChangeProfilePicture } setImageFromFilePicker={ setImageFromFilePicker } setOpenChangeProfilePicture={ setOpenChangeProfilePicture } />
        </>
    );
};