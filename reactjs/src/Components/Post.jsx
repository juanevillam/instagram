import { Likes } from "./Likes";
import { Video } from "./Video";
import { Caption } from "./Caption";
import { Comments } from "./Comments";
import { ViewPost } from "./ViewPost";
import { ViewLikes } from "./ViewLikes";
import { PostSaved } from "./PostSaved";
import { LikeIcon } from "../Icons/Like";
import { db } from "../Database/firebase";
import { ShareIcon } from "../Icons/Share";
import { NavLink } from "react-router-dom";
import { SavedIcon } from "../Icons/Saved";
import { PostOptions } from "./PostOptions";
import { ViewComments } from "./ViewComments";
import { CommentIcon } from "../Icons/Comment";
import React, { useState, useEffect } from "react";
import { MoreOptionsIcon } from "../Icons/MoreOptions";
import { handleDeletePost } from "../Helpers/handleDeletePost";
import { useCollection } from "react-firebase-hooks/firestore";
import { handlePostComment } from "../Helpers/handlePostComment";

export const Post = ({ caption, createdBy, dateCreated, image, postId, profile, profileFatherId, profilePicture, username }) => {
    const [ likes, setLikes ] = useState( [] );
    const [ liked, setLiked ] = useState( false );
    const [ saved, setSaved ] = useState( false );
    const [ comment, setComment ] = useState( "" );
    const [ comments, setComments ] = useState( [] );
    const [ openViewPost, setOpenViewPost ] = useState( false );
    const [ openViewLikes, setOpenViewLikes ] = useState( false );
    const [ openPostOptions, setOpenPostOptions ] = useState( false );
    const [ openViewComments, setOpenViewComments ] = useState( false );
    const [ openPostOptionsConfirmDelete, setOpenPostOptionsConfirmDelete ] = useState( false );
    const [ likeSnapshot ] = useCollection( db.collection( "posts" ).doc( postId ).collection( "likes" ).where( "id", "==", profile.id ) );
    const [ saveSnapshot ] = useCollection( db.collection( "posts" ).doc( postId ).collection( "saves" ).where( "id", "==", profile.id ) );
    
    const [ followedSnapshot ] = useCollection( db.collection( "users" ).doc( profileFatherId ).collection( "followers" ).where( "id", "==", profile.id ) );
    const followedSnap = followedSnapshot?.docs?.[ 0 ]?.data();

    const like = likeSnapshot?.docs?.[ 0 ]?.data();
    const postSaved = saveSnapshot?.docs?.[ 0 ]?.data();

    const deletePostHandler = () => handleDeletePost( postId );
    const postCommentHandler = () => handlePostComment( comment, postId, profile, setComment );

    useEffect( () => {
        let unsubscribeLikes; 
        let unsubscribeComments; 
        
        if ( postId ) { 
            unsubscribeLikes = db.collection( "posts" ).doc( postId ).collection( "likes" ).onSnapshot( snapshot => setLikes( snapshot.docs.map( doc => ( { id: doc.id, likedBy: doc.data() })))); 
            unsubscribeComments = db.collection( "posts" ).doc( postId ).collection( "comments" ).orderBy( "dateCreated", "asc" ).onSnapshot( snapshot => setComments( snapshot.docs.map( doc => ({ id: doc.id, comment: doc.data() }))));
        }; 
        
        return () => {
            unsubscribeLikes();
            unsubscribeComments();
        }; 
    }, [ postId ] );
    
    
    return (
        <>
            <div className="animate__animated animate__fadeIn bg-white max-w-xl md:rounded-xl mx-auto rounded-none">
                <div className="dark:bg-black md:border-smoke-200 md:dark:border-dark-200 max-w-xl mb-3 md:border md:mb-6 md:mt-6 md:rounded-lg mx-auto rounded-none">
                    <div className="flex items-center justify-between md:pr-4 pr-2">
                        <div className="flex flex-grow items-center md:pb-3 md:pl-3 md:pt-3 pl-2 pb-2.5 pr-2.5 pt-1.5 space-x-2.5">
                            <img className="h-8 object-cover rounded-full w-8" src={ profilePicture } alt="" />
                            <NavLink to={`/:${ username }`}>
                                <h1 className="cursor-pointer dark:text-white font-medium hover:underline text-black ">{ username }</h1> 
                            </NavLink> 
                        </div>
                        <MoreOptionsIcon openPostOptions={ openPostOptions } setOpenPostOptions={ setOpenPostOptions } />
                    </div>
                    { image &&
                        <>
                            { image[ image.length - 1 ] === "4" ? 
                                <Video height="h-full max-h-100" image={ image } objectFit="object-cover" setOpenViewPost={ setOpenViewPost } svgHeight="h-14 md:h-16" svgWidth="w-14 md:w-20" />
                                :
                                <>
                                    <NavLink to={{ pathname:`/p/:${ postId }` }}>
                                        <img alt="" className="animate__animated animate__fadeIn cursor-pointer block lg:hidden w-full" src={ image } />
                                    </NavLink>
                                    <img alt="" className="animate__animated animate__fadeIn cursor-pointer hidden w-full lg:block" src={ image } onClick={ () => setOpenViewPost( true ) } />
                                </>
                            }
                        </>
                    }
                    <PostSaved postSaved={ postSaved } />
                    <div className="flex justify-between md:pl-3 md:pr-5 md:pt-3 pl-2 pr-3 pt-2.5">
                        <div className="flex flex-grow items-center space-x-4">
                            <LikeIcon liked={ liked } postId={ postId } id={ profile?.id } username={ profile?.username } name={ profile?.fullName } profilePicture={ profile?.profilePicture } setLiked={ setLiked } like={ like } />
                            <div className="hidden md:block" onClick={ () => setOpenViewPost( true ) }>
                                <CommentIcon />
                            </div>
                            <div className="block md:hidden" onClick={ () => setOpenViewComments( true ) }>
                                <CommentIcon />
                            </div>
                            <ShareIcon />
                        </div>
                        <SavedIcon postId={ postId } postSaved={ postSaved } profile={ profile } saved={ saved } setSaved={ setSaved } />
                    </div>
                    <Likes likes={ likes } openViewLikes={ openViewLikes } setOpenViewLikes={ setOpenViewLikes } />
                    <Caption caption={ caption } username={ username } />
                    { likes.length === 0 && <div className="mb-1.5 md:mb-2" /> }
                    <Comments comment={ comment } comments={ comments } dateCreated={ dateCreated } likes={ likes } postCommentHandler={ postCommentHandler } profile={ profile } setComment={ setComment } setOpenViewComments={ setOpenViewComments } setOpenViewPost={ setOpenViewPost } />
                </div>
            </div>
            <ViewComments caption={ caption } comment={ comment } comments={ comments } dateCreated={ dateCreated } openViewComments={ openViewComments } postCommentHandler={ postCommentHandler } profile={ profile } profilePicture={ profilePicture } setComment={ setComment } setOpenViewComments={ setOpenViewComments } username={ username } />
            <ViewLikes likes={ likes } openViewLikes={ openViewLikes } setOpenViewLikes={ setOpenViewLikes } />
            <PostOptions createdBy={ createdBy } deletePostHandler={ deletePostHandler } openPostOptions={ openPostOptions } openPostOptionsConfirmDelete={ openPostOptionsConfirmDelete } postId={ postId } profile={ profile } setOpenPostOptions={ setOpenPostOptions } setOpenPostOptionsConfirmDelete={ setOpenPostOptionsConfirmDelete } setOpenViewPost={ setOpenViewPost } />
            <ViewPost caption={ caption } comments={ comments } createdBy={ createdBy } dateCreated={ dateCreated } deletePostHandler={ deletePostHandler } followedSnap={ followedSnap } like={ like } liked={ liked } likes={ likes } image={ image } openPostOptions={ openPostOptions } openPostOptionsConfirmDelete={ openPostOptionsConfirmDelete } openViewLikes={ openViewLikes } openViewPost={ openViewPost } postId={ postId } postSaved={ postSaved } profile={ profile } profilePicture={ profilePicture } saved={ saved } setLiked={ setLiked } setOpenPostOptions={ setOpenPostOptions } setOpenViewLikes={ setOpenViewLikes } setOpenViewPost={ setOpenViewPost } setSaved={ setSaved } username={ username } />
        </>
    );
};


