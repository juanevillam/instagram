import ReactTimeago from "react-timeago";
import { LikeIcon } from "../Icons/Like";
import { db } from "../Database/firebase";
import { Post } from "../Components/Post";
import { NavLink } from "react-router-dom";
import { EmojiIcon } from "../Icons/Emoji";
import { ShareIcon } from "../Icons/Share";
import { SavedIcon } from "../Icons/Saved";
import { Video } from "../Components/Video";
import { useRouteMatch } from "react-router";
import Skeleton from '@mui/material/Skeleton';
import { BackIconMobile } from "../Icons/Back";
import { CommentIcon } from "../Icons/Comment";
import { CaptionId } from "../Components/Caption";
import { ViewPost } from "../Components/ViewPost";
import { LikesPostId } from "../Components/Likes";
import { InstagramLogo } from "../Icons/Instagram";
import React, { useEffect, useState } from "react";
import { ViewLikes } from "../Components/ViewLikes";
import { CommentsId } from "../Components/Comments";
import { MoreOptionsIcon } from "../Icons/MoreOptions";
import { PostOptions } from "../Components/PostOptions";
import { useCollection } from "react-firebase-hooks/firestore";
import { handleDeletePost } from "../Helpers/handleDeletePost";
import { handlePostComment } from "../Helpers/handlePostComment";

export const PostId = ({ profile }) => {
    const { url } = useRouteMatch();
    const postId = url.substring( 4 );
    const [ likes, setLikes ] = useState( [] );
    const [ post, setPost ] = useState( null );
    const [ saved, setSaved ] = useState( false );
    const [ liked, setLiked ] = useState( false );
    const [ comment, setComment ] = useState( "" );
    const [ comments, setComments ] = useState( [] );
    const [ openViewPost, setOpenViewPost ] = useState( false );
    const [ openViewLikes, setOpenViewLikes ] = useState( false );
    const [ openPostOptions, setOpenPostOptions ] = useState( false );
    const [ openPostOptionsConfirmDelete, setOpenPostOptionsConfirmDelete ] = useState( false );
    const [ likeSnapshot ] = useCollection( db.collection( "posts" ).doc( postId ).collection( "likes" ).where( "id", "==", profile?.id ) );
    const [ saveSnapshot ] = useCollection( db.collection( "posts" ).doc( postId ).collection( "saves" ).where( "id", "==", profile?.id ) );
    
    const like = likeSnapshot?.docs?.[ 0 ]?.data();
    const postSaved = saveSnapshot?.docs?.[ 0 ]?.data();

    const [ followedSnapshot ] = useCollection( db.collection( "users" ).doc( post?.id ).collection( "followers" ).where( "id", "==", profile?.id ) );
    const followedSnap = followedSnapshot?.docs?.[ 0 ]?.data();
    
    const deletePostHandler = () => handleDeletePost( postId );
    const postCommentHandler = () => handlePostComment( comment, postId, profile, setComment );

    useEffect(() => {
        db.collection( "posts" ).doc( url.substring( 4 ) ).get().then( ( doc ) => {
            if ( doc.exists ) {
                setPost( doc.data() );
            };
        }).catch( ( error ) => {
            console.log( "Error getting document:", error );
        }); 
            
    }, [ url ]);

    useEffect( () => {
        let unsubscribeLikes = db.collection( "posts" ).doc( postId ).collection( "likes" ).onSnapshot( snapshot => setLikes( snapshot.docs.map( doc => ({ id: doc.id, likedBy: doc.data() })))); ; 
        let unsubscribeComments = db.collection( "posts" ).doc( postId ).collection( "comments" ).orderBy( "dateCreated", "asc" ).onSnapshot( snapshot => setComments( snapshot.docs.map( doc => ({ id: doc.id, comment: doc.data() }))));; 
    
        return () => {
            unsubscribeLikes();
            unsubscribeComments();
        }; 
    }, [ postId ]);
    
    return (
        <div className="md:bg-smoke-100 md:dark:bg-dark-100">
            <div className="flex overscroll-y-auto scrollbar-hide">
                <div className="bg-white block dark:bg-black duration-300 flex-grow h-screen md:hidden overscroll-y-auto scrollbar-hide transition">
                    <div className="duration-300 flex-grow h-screen overflow-y-auto pb-20 scrollbar-hide transition">
                        <div className="bg-white dark:bg-black -mb-1.5 pb-1.5 pl-2 pr-2 pt-1.5 sticky top-0 z-20">
                            <div className="flex flex-grow items-center space-x-1.5">
                                <BackIconMobile />
                                <InstagramLogo />
                            </div>
                        </div>
                        { post && <Post caption={ post?.caption } createdBy={ post?.id } dateCreated={ post?.dateCreated } image={ post?.image } postId={ postId } profile={ profile } profileFatherId={ post?.profileFatherId } profilePicture={ post?.profilePicture } username={ post?.username } /> }
                    </div>
                </div>
            </div>
            <div className="bg-smoke-100 dark:bg-dark-100 duration-300 flex-grow h-screen hidden md:block overscroll-y-auto scrollbar-hide transition">
                <div className="animate__animated animate__fadeIn bg-white border border-gray-300 dark:bg-black dark:border-dark-400 duration-300 flex h-5/6 lg:max-w-4xl max-w-3xl mt-5 mx-auto rounded-lg transition xl:max-w-5xl w-max">
                    <div className="animate__animated animate__fadeIn bg-black rounded-bl-lg rounded-tl-lg w-max">
                        { post ? 
                            <>
                                { post?.image[ post?.image.length - 1 ] === "4" ? 
                                    <Video height="h-full" image={ post?.image } objectFit="object-cover" rounded="rounded-bl-lg rounded-tl-lg" svgHeight="h-14" svgWidth="w-14 md:w-16" />
                                    :
                                    <img alt="" className="h-full object-contain rounded-bl-lg rounded-tl-lg w-full" src={ post?.image } /> 
                                }
                            </>
                            :
                            <Skeleton animation="wave" sx={{ bgcolor: 'grey.300', height: 485 }} variant="rectangular" />
                        }
                    </div>
                    <div className="border-gray-300 flex flex-col border-l dark:border-dark-400 h-full relative w-100">
                        <div className="dark:bg-black flex-grow rounded-br-lg rounded-tr-lg">
                            <div className="border-b dark:border-dark-400 flex items-center p-3">
                                <div className="flex flex-grow space-x-3">
                                    { post ? 
                                        <img className="animate__animated animate__fadeIn h-10 object-cover rounded-full w-10" src={ post?.profilePicture } alt="" />
                                        :
                                        <Skeleton animation="wave" sx={{ bgcolor: 'grey.300' }}  variant="circular" height={ 40 } width={ 40 } />
                                    }
                                    <div className="flex items-center space-x-1">
                                        { post ?
                                            <NavLink className="animate__animated animate__fadeIn cursor-pointer font-medium dark:text-white hover:underline text-sm text-black" to={ { pathname:`/:${ post?.username }`, props:{ username: post?.username } } }>{ post?.username }</NavLink>
                                            :
                                            <Skeleton animation="wave" height={ 15 } width={ 100 } />
                                        }
                                        { post?.id === profile?.id ?
                                            <div className="flex dark:text-white items-center">
                                                • 
                                                <NavLink to="/settings/edit-profile">
                                                    <p className="animate__animated animate__fadeIn cursor-pointer dark:text-white font-medium hover:underline ml-1 text-black text-sm">Edit Profile</p>
                                                </NavLink>
                                            </div>
                                            
                                            :
                                            <div className={`flex dark:text-white items-center ${ post?.username?.length < 16 && "xl:flex md:hidden" }`}>
                                                • 
                                                <p className="animate__animated animate__fadeIn cursor-pointer dark:text-white font-medium hover:underline ml-1 text-black text-sm">{ followedSnap ? "Unfollow" : "Follow" }</p>
                                            </div>
                                        }
                                    </div>
                                </div>
                                <MoreOptionsIcon openPostOptions={ openPostOptions } setOpenPostOptions={ setOpenPostOptions } />
                            </div>
                            <div className="flex-grow h-64 pl-3 pr-3 overflow-hidden overflow-y-auto">
                                <CaptionId caption={ post?.caption } profilePicture={ post?.profilePicture } username={ post?.username } />
                                <CommentsId comments={ comments } />
                            </div>
                        </div>
                        <div className="absolute bg-white bottom-0 dark:bg-black rounded-b-lg w-full z-50">
                            <div className="flex border-t dark:border-dark-200 justify-between md:pl-3 md:pr-5 md:pt-2.5 pb-2 pl-2 pr-3 pt-2">
                                <div className="flex flex-grow items-center space-x-4">
                                    <LikeIcon liked={ liked } postId={ postId } id={ profile?.id } username={ profile?.username } name={ profile?.fullName } profilePicture={ profile?.profilePicture } setLiked={ setLiked } like={ like } />
                                    <CommentIcon />
                                    <ShareIcon />
                                </div>
                                <SavedIcon postId={ postId } postSaved={ postSaved } profile={ profile } saved={ saved } setSaved={ setSaved } />
                            </div>
                            <LikesPostId likes={ likes } openViewLikes={ openViewLikes } setOpenViewLikes={ setOpenViewLikes } />
                            { post?.dateCreated && <ReactTimeago className="cursor-pointer font-normal pl-4 text-gray-400 text-xs uppercase w-max" date={ new Date( post?.dateCreated?.toDate() ) } /> }
                            <div className="bg-white border-t dark:bg-black dark:border-dark-200 hidden items-center justify-between md:flex mt-2.5 pb-4 pl-4 pr-5 pt-4 rounded-b-lg w-full">
                                <div className="flex flex-grow items-center pr-5">
                                    <EmojiIcon height="24" width="24" />
                                    <input className="dark:bg-black dark:placeholder-gray-400 dark:text-white font-light focus:outline-none h-full placeholder-gray-400 text-black w-full" onChange={ ( e ) => setComment( e.target.value ) } placeholder="Add a comment..." value={ comment } />
                                </div>
                                <button className="text-instagram-100 text-lg disabled:cursor-not-allowed disabled:opacity-50" disabled={ !comment } onClick={ postCommentHandler }>Post</button>
                            </div>   
                        </div>
                    </div>
                </div>
            </div>
            <PostOptions createdBy={ post?.createdBy } deletePostHandler={ deletePostHandler } openPostOptions={ openPostOptions } openPostOptionsConfirmDelete={ openPostOptionsConfirmDelete } postId={ postId } profile={ profile } setOpenPostOptions={ setOpenPostOptions } setOpenPostOptionsConfirmDelete={ setOpenPostOptionsConfirmDelete } setOpenViewPost={ setOpenViewPost } />
            <ViewLikes likes={ likes } openViewLikes={ openViewLikes } setOpenViewLikes={ setOpenViewLikes } />
            <ViewPost caption={ post?.caption } comments={ comments } createdBy={ post?.id } dateCreated={ post?.dateCreated } deletePostHandler={ deletePostHandler } followedSnap={ followedSnap } like={ like } liked={ liked } likes={ likes } image={ post?.image } openPostOptions={ openPostOptions } openPostOptionsConfirmDelete={ openPostOptionsConfirmDelete } openViewLikes={ openViewLikes } openViewPost={ openViewPost } postId={ postId } postSaved={ postSaved } profile={ profile } profilePicture={ post?.profilePicture } saved={ saved } setLiked={ setLiked } setOpenPostOptions={ setOpenPostOptions } setOpenViewLikes={ setOpenViewLikes } setOpenViewPost={ setOpenViewPost } setSaved={ setSaved } username={ post?.username } />
        </div>
    );
};