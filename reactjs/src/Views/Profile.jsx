import { motion } from "framer-motion";
import { db } from "../Database/firebase";
import { useRouteMatch } from "react-router";
import { BackIconMobile } from "../Icons/Back";
import { MenuIconMobile } from "../Icons/Menu";
import React, { useEffect, useState } from "react";
import { NewPostIconMobile } from "../Icons/NewPost";
import { handleFollow } from "../Helpers/handleFollow";
import { MoreOptionsIcon } from "../Icons/MoreOptions";
import { ViewSettings } from "../Components/ViewSettings";
import { NotificationsIcon } from "../Icons/Notifications";
import { ViewFollowers } from "../Components/ViewFollowers";
import { ViewFollowing } from "../Components/ViewFollowing";
import { ProfileOptions } from "../Components/ProfileOptions";
import { useCollection } from "react-firebase-hooks/firestore";
import { ProfilePostsGrid } from "../Components/ProfilePostsGrid";
import { ViewProfilePicture } from "../Components/ViewProfilePicture";
import { ProfilePersonalInfo } from "../Components/ProfilePersonalInfo";

export const Profile = ({ myProfile }) => {
    const { url } = useRouteMatch();
    const [ posts, setPosts ] = useState( [] );
    const [ followed, setFollowed ] = useState( false );
    const [ following, setFollowing ] = useState( null );
    const [ followers, setFollowers ] = useState( null );
    const [ openCreatePost, setOpenCreatePost ] = useState( false );
    const [ openViewSettings, setOpenViewSettings ] = useState( false );
    const [ openNotifications, setOpenNotifications ] = useState( false );
    const [ openViewFollowers, setOpenViewFollowers ] = useState( false );
    const [ openViewFollowing, setOpenViewFollowing ] = useState( false );
    const [ openViewProfilePicture, setOpenViewProfilePicture ] = useState( false );
    const handleFollowProfile = () => handleFollow( chatsSnapshot, followed, myProfile, myProfile.fatherId, profile, profileFather?.id, setFollowed );
    
    const [ userSnapshot ] = useCollection( db.collection( "users" ).where( "username", "==", url.substring( 2 ) ) );
    const profile = userSnapshot?.docs?.[ 0 ]?.data();
    const profileFather = userSnapshot?.docs?.[ 0 ];
    
    document.title = `${ profile?.fullName && profile?.fullName } (@${ url.substring( 2 ) })`;
    
    const [ followedSnapshot ] = useCollection( db.collection( "users" ).doc( profileFather?.id ).collection( "followers" ).where( "id", "==", myProfile.id ) );
    const followedSnap = followedSnapshot?.docs?.[ 0 ]?.data();

    const userChat = db.collection( "chats" ).where( "users", "array-contains", myProfile?.id );
    const [ chatsSnapshot ] = useCollection( userChat );

    useEffect( () => {
        let unsubscribeFollowing = db.collection( "users" ).doc( profileFather?.id ).collection( "following" ).onSnapshot( snapshot => setFollowing( snapshot.docs.map( doc => ({ id: doc.id, following: doc.data() }))));
        let unsubscribeFollowers = db.collection( "users" ).doc( profileFather?.id ).collection( "followers" ).onSnapshot( snapshot => setFollowers( snapshot.docs.map( doc => ({ id: doc.id, follower: doc.data() }))));
        let unsubscribePosts = db.collection( "posts" ).where( "username", "==", url.substring( 2 ) ).orderBy( "dateCreated", "desc" ).onSnapshot( snapshot => setPosts( snapshot.docs.map( doc => ({ id: doc.id, post: doc.data() }))));
        
        return () => {
            unsubscribePosts();
            unsubscribeFollowing();
            unsubscribeFollowers();
        }; 
    }, [ profileFather?.id, url ]);

    return (
        <>
            <div className={`bg-white dark:bg-black duration-300 flex items-center max-w-4xl md:hidden mx-auto pb-1.5 pl-2 ${ profile?.id === myProfile?.id ? "pr-3.5" : "pr-1" } pt-1.5 sticky top-0 transition z-20`}>
                { profile?.id === myProfile?.id ?
                    <>
                        <div className="animate__animated animate__fadeIn flex flex-grow items-center space-x-2">
                            <BackIconMobile />
                            <h1 className="dark:text-white font-medium text-xl">{ myProfile?.username }</h1>
                        </div>
                        <div className="animate__animated animate__fadeIn flex items-center space-x-5">
                            <NewPostIconMobile openCreatePost={ openCreatePost } setOpenCreatePost={ setOpenCreatePost } />
                            <MenuIconMobile newState={ !openViewSettings } setState={ setOpenViewSettings } />
                        </div>
                    </>
                    :
                    <>
                        <div className="animate__animated animate__fadeIn flex flex-grow items-center space-x-2">
                            <BackIconMobile />
                            <h1 className="dark:text-white font-medium text-xl">{ profile?.username }</h1>
                        </div>
                        <div className="animate__animated animate__fadeIn flex items-center space-x-2">
                            <NotificationsIcon openNotifications={ openNotifications } setOpenNotifications={ setOpenNotifications } usedOnProfile={ true } />
                            <MoreOptionsIcon />
                        </div>
                    </>
                }
            </div>
            { profile && following !== null && followers !== null ?
                <div className="bg-white dark:bg-black duration-300 flex-grow h-screen md:bg-smoke-100 md:dark:bg-dark-100 overscroll-y-auto scrollbar-hide transition">
                    <div className="animate__animated animate__fadeIn">
                        <div className="duration-300 flex-grow h-screen md:bg-transparent overflow-y-auto pb-28 scrollbar-hide transition">
                            <div className="max-w-2xl mx-auto md:pl-0 md:pr-0 md:pt-7 pl-1 pr-1 pt-3 w-screen">
                                <div className="flex ml-1 md:ml-0">
                                    { profile?.profilePicture ?
                                        <div className="animate__animated animate__fadeIn">  
                                            <img alt="" className="cursor-pointer md:hidden h-24 object-cover rounded-full w-24" src={ profile?.profilePicture } />
                                            <motion.img alt="" className="cursor-pointer hidden h-44 md:block object-cover rounded-full w-44" onClick={ () => setOpenViewProfilePicture( true ) } src={ profile?.profilePicture } whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.9 }} />
                                        </div>
                                        :
                                        <div className="cursor-pointer">  
                                            <svg className="h-24 md:hidden object-cover rounded-full w-24" viewBox="0 0 212 212">
                                                <path fill="#b8b9b9" d="M106.251.5C164.653.5 212 47.846 212 106.25S164.653 212 106.25 212C47.846 212 .5 164.654.5 106.25S47.846.5 106.251.5z" />
                                                <path fill="#FFF" d="M173.561 171.615a62.767 62.767 0 0 0-2.065-2.955 67.7 67.7 0 0 0-2.608-3.299 70.112 70.112 0 0 0-3.184-3.527 71.097 71.097 0 0 0-5.924-5.47 72.458 72.458 0 0 0-10.204-7.026 75.2 75.2 0 0 0-5.98-3.055c-.062-.028-.118-.059-.18-.087-9.792-4.44-22.106-7.529-37.416-7.529s-27.624 3.089-37.416 7.529c-.338.153-.653.318-.985.474a75.37 75.37 0 0 0-6.229 3.298 72.589 72.589 0 0 0-9.15 6.395 71.243 71.243 0 0 0-5.924 5.47 70.064 70.064 0 0 0-3.184 3.527 67.142 67.142 0 0 0-2.609 3.299 63.292 63.292 0 0 0-2.065 2.955 56.33 56.33 0 0 0-1.447 2.324c-.033.056-.073.119-.104.174a47.92 47.92 0 0 0-1.07 1.926c-.559 1.068-.818 1.678-.818 1.678v.398c18.285 17.927 43.322 28.985 70.945 28.985 27.678 0 52.761-11.103 71.055-29.095v-.289s-.619-1.45-1.992-3.778a58.346 58.346 0 0 0-1.446-2.322zM106.002 125.5c2.645 0 5.212-.253 7.68-.737a38.272 38.272 0 0 0 3.624-.896 37.124 37.124 0 0 0 5.12-1.958 36.307 36.307 0 0 0 6.15-3.67 35.923 35.923 0 0 0 9.489-10.48 36.558 36.558 0 0 0 2.422-4.84 37.051 37.051 0 0 0 1.716-5.25c.299-1.208.542-2.443.725-3.701.275-1.887.417-3.827.417-5.811s-.142-3.925-.417-5.811a38.734 38.734 0 0 0-1.215-5.494 36.68 36.68 0 0 0-3.648-8.298 35.923 35.923 0 0 0-9.489-10.48 36.347 36.347 0 0 0-6.15-3.67 37.124 37.124 0 0 0-5.12-1.958 37.67 37.67 0 0 0-3.624-.896 39.875 39.875 0 0 0-7.68-.737c-21.162 0-37.345 16.183-37.345 37.345 0 21.159 16.183 37.342 37.345 37.342z" />
                                            </svg>
                                            <svg className="hidden h-44 md:block object-cover rounded-full w-44" viewBox="0 0 212 212">
                                                <path fill="#b8b9b9" d="M106.251.5C164.653.5 212 47.846 212 106.25S164.653 212 106.25 212C47.846 212 .5 164.654.5 106.25S47.846.5 106.251.5z" />
                                                <path fill="#FFF" d="M173.561 171.615a62.767 62.767 0 0 0-2.065-2.955 67.7 67.7 0 0 0-2.608-3.299 70.112 70.112 0 0 0-3.184-3.527 71.097 71.097 0 0 0-5.924-5.47 72.458 72.458 0 0 0-10.204-7.026 75.2 75.2 0 0 0-5.98-3.055c-.062-.028-.118-.059-.18-.087-9.792-4.44-22.106-7.529-37.416-7.529s-27.624 3.089-37.416 7.529c-.338.153-.653.318-.985.474a75.37 75.37 0 0 0-6.229 3.298 72.589 72.589 0 0 0-9.15 6.395 71.243 71.243 0 0 0-5.924 5.47 70.064 70.064 0 0 0-3.184 3.527 67.142 67.142 0 0 0-2.609 3.299 63.292 63.292 0 0 0-2.065 2.955 56.33 56.33 0 0 0-1.447 2.324c-.033.056-.073.119-.104.174a47.92 47.92 0 0 0-1.07 1.926c-.559 1.068-.818 1.678-.818 1.678v.398c18.285 17.927 43.322 28.985 70.945 28.985 27.678 0 52.761-11.103 71.055-29.095v-.289s-.619-1.45-1.992-3.778a58.346 58.346 0 0 0-1.446-2.322zM106.002 125.5c2.645 0 5.212-.253 7.68-.737a38.272 38.272 0 0 0 3.624-.896 37.124 37.124 0 0 0 5.12-1.958 36.307 36.307 0 0 0 6.15-3.67 35.923 35.923 0 0 0 9.489-10.48 36.558 36.558 0 0 0 2.422-4.84 37.051 37.051 0 0 0 1.716-5.25c.299-1.208.542-2.443.725-3.701.275-1.887.417-3.827.417-5.811s-.142-3.925-.417-5.811a38.734 38.734 0 0 0-1.215-5.494 36.68 36.68 0 0 0-3.648-8.298 35.923 35.923 0 0 0-9.489-10.48 36.347 36.347 0 0 0-6.15-3.67 37.124 37.124 0 0 0-5.12-1.958 37.67 37.67 0 0 0-3.624-.896 39.875 39.875 0 0 0-7.68-.737c-21.162 0-37.345 16.183-37.345 37.345 0 21.159 16.183 37.342 37.345 37.342z" />
                                            </svg>
                                        </div>
                                    }
                                    <div className="md:w-96 mx-auto pr-1 pt-4 w-max">
                                        <div className="hidden md:flex">
                                            <h1 className="animate__animated animate__fadeIn dark:text-white font-light mr-7 text-2xl">{ profile?.username }</h1>
                                            <ProfileOptions followedSnap={ followedSnap } handleFollowProfile={ handleFollowProfile } profile={ profile } userUid={ myProfile?.id } version="desktop" />
                                        </div>
                                        <div className="flex md:-ml-10 md:pt-7 md:pl-0 md:space-x-10 md:w-max pr-3 space-x-6 w-max">
                                            <>
                                                <div className="block dark:text-white md:hidden text-center w-8">
                                                    <strong className="font-medium text-lg">{ posts.length }</strong>
                                                    <p className="animate__animated animate__fadeIn font-light -mt-1.5 text-sm">{ posts.length === 1 ? "Post" : "Posts" }</p>
                                                </div>
                                                <div className="hidden md:flex">
                                                    <p className="animate__animated animate__fadeIn dark:text-white font-light"><strong className="font-semibold">{ posts.length }</strong> { posts.length === 1 ? "post" : "posts" }</p>   
                                                </div>
                                            </>
                                            <div onClick={ () => setOpenViewFollowers( true ) }>
                                                <div className="block cursor-pointer dark:text-white md:hidden text-center w-14">
                                                    <strong className="font-medium text-lg">{ followers.length }</strong>
                                                    <p className="animate__animated animate__fadeIn dark:text-white font-light -mt-1.5 text-sm">{ followers.length === 1 ? "Follower" : "Followers" }</p>
                                                </div>
                                                <div className="animate__animated animate__fadeIn cursor-pointer hidden md:flex">
                                                    <p className="cursor-pointer dark:text-white font-light hover:underline"><strong className="font-semibold">{ followers.length }</strong> { followers.length === 1 ? "follower" : "followers" }</p>
                                                </div>
                                            </div>
                                            <div onClick={ () => setOpenViewFollowing( true ) }>
                                                <div className="block cursor-pointer dark:text-white md:hidden text-center w-14">
                                                    <strong className="font-medium text-lg">{ following.length }</strong>
                                                    <p className="animate__animated animate__fadeIn dark:text-white font-light -mt-1.5 text-sm">Following</p>
                                                </div>
                                                <div className="animate__animated animate__fadeIn hidden md:flex">
                                                    <p className="cursor-pointer dark:text-white font-light hover:underline"><strong className="font-semibold">{ following.length }</strong> following</p>
                                                </div>
                                            </div>
                                        </div>
                                        <ProfilePersonalInfo description={ profile?.description } fullName={ profile?.fullName } version="desktop" />
                                    </div>
                                </div>
                                <ProfilePersonalInfo description={ profile?.description } fullName={ profile?.fullName } version="mobile" />
                                <ProfileOptions followedSnap={ followedSnap } handleFollowProfile={ handleFollowProfile } profile={ profile } userUid={ myProfile?.id } version="mobile" />
                            </div>
                            <ProfilePostsGrid fullName={ profile?.fullName } id={ profile?.id } posts={ posts } userUid={ myProfile?.id } />
                        </div>
                    </div>
                    <ViewProfilePicture openViewProfilePicture={ openViewProfilePicture } profilePicture={ profile?.profilePicture } setOpenViewProfilePicture={ setOpenViewProfilePicture } />
                    <ViewFollowers followers={ followers } openViewFollowers={ openViewFollowers } setOpenViewFollowers={ setOpenViewFollowers } />
                    <ViewFollowing following={ following } openViewFollowing={ openViewFollowing } setOpenViewFollowing={ setOpenViewFollowing } />
                    <ViewSettings openViewSettings={ openViewSettings } setOpenViewSettings={ setOpenViewSettings } />
                </div>
                :
                <h1>Loading...</h1>
            }
        </>
    );
};