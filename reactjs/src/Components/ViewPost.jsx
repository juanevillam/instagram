import { rgba } from "polished";
import { Video } from "./Video";
import { LikesPostId } from "./Likes";
import { CaptionId } from "./Caption";
import ReactPlayer from "react-player";
import styled from "styled-components";
import { CommentsId } from "./Comments";
import ReactTimeago from "react-timeago";
import { NavLink } from "react-router-dom";
import { SavedIcon } from "../Icons/Saved";
import { EmojiIcon } from "../Icons/Emoji";
import { CloseIcon } from "../Icons/Close";
import VideoControls from "./VideoControls";
import React, { useRef, useState } from "react";
import { BackIconMobileVideo } from "../Icons/Back";
import { LikeIcon, LikeIconMobileVideo } from "../Icons/Like";
import { formatDuration } from "../Helpers/handleFormatDuration";
import { ShareIcon, ShareIconMobileVideo } from "../Icons/Share";
import { AudioIconMobile, MutedAudioIconMobile } from "../Icons/Audio";
import { CommentIcon, CommentIconMobileVideo } from "../Icons/Comment";
import { MoreOptionsIcon, MoreOptionsIconVideo } from "../Icons/MoreOptions";

export const ViewPostOverlay = styled.div`
    background: ${ rgba( "black", 0.65 ) };
    height: 5000px;
    left: 0;
    opacity: ${ props => props.openViewPost ? 1 : 0 }; 
    position: fixed;
    top: 0;
    transition-duration: 0.3s; 
    transition-property: visibility opacity; 
    visibility: ${ props  => props.openViewPost ? "visible" : "hidden" };
    width: 5000px;
    z-index: 29;
`;

export const ViewPostDialog = styled.div`
    background-color: none; 
    bottom: 0; 
    border-top-left-radius: 20px; 
    border-top-right-radius: 20px; 
    height: 100%; 
    left: 0; 
    position: fixed; 
    right: 0; 
    transition: transform 0.3s; 
    transform: translateX( ${ p => p.openViewPost ? 0 : "100%" } ); 
    z-index: 100000 !important;
`;


export const ViewPost = ({ caption, comments, createdBy, dateCreated, followedSnap, like, liked, likes, image, openPostOptions, openPostOptionsConfirmDelete, openViewLikes, openViewPost, postId, postSaved, profile, profilePicture, saved, setLiked, setOpenPostOptions, setOpenViewLikes, setOpenViewPost, setSaved, username }) => {    
    const playerRef = useRef( null );
    const controlsRef = useRef( null );
    const [ timeDisplayFormat, setTimeDisplayFormat ] = useState( "normal" );
    const [ state, setState ] = useState({ pip: false, playing: false, light: false, muted: false, played: 0, playbackRate: 1.0, volume: 1, loop: true, seeking: false });
    const { playing, light, muted, loop, playbackRate, pip, played, volume, } = state;

    const handleProgress = ( changeState ) => {
      if ( !state.seeking ) setState({ ...state, ...changeState }) 
    };
  
    const handleMute = () => setState({ ...state, muted: !state.muted });
    const handleDuration = ( duration ) => setState({ ...state, duration });
    const handleSeekMouseDown = ( e ) => setState({ ...state, seeking: true });
    const handlePlayPause = () => setState({ ...state, playing: !state.playing });
    const handleSeekChange = ( e, newValue ) => setState({ ...state, played: parseFloat( newValue / 100 ) });
    const handleDisplayFormat = () => setTimeDisplayFormat( timeDisplayFormat === "normal" ? "remaining" : "normal" );
    const handleVolumeSeekDown = ( e, newValue ) => setState({ ...state, seeking: false, volume: parseFloat( newValue / 100 ) });
    const handleSeekMouseUp = ( e, newValue ) => { setState({ ...state, seeking: false }); playerRef.current.seekTo( newValue / 100, "fraction" ) };
    const handleVolumeChange = ( e, newValue ) => setState({ ...state, volume: parseFloat( newValue / 100 ), muted: newValue === 0 ? true : false, });

    const duration = playerRef && playerRef.current ? playerRef.current.getDuration() : "00:00";
    const currentTime = playerRef && playerRef.current ? playerRef.current.getCurrentTime() : "00:00";
    
    const totalDuration = formatDuration( duration );
    const elapsedTime = timeDisplayFormat !== "normal" ? formatDuration( currentTime ) : `-${ formatDuration( duration - currentTime ) }`;


    return (
        <>
            <ViewPostOverlay openViewPost={ openViewPost } onClick={ () => setOpenViewPost( false ) } />
            { image && image[ image.length - 1 ] === "4" && 
                <div className="block md:hidden">
                    <ViewPostDialog openViewPost={ openViewPost }>
                        <div className="bg-black flex items-center justify-center h-full md:hidden relative w-full">
                            <div className="absolute flex items-center justify-between left-0 pb-2 pl-3 pr-3 pt-2 top-0 w-full z-20">
                                <div onClick={ () => { setOpenViewPost( false ); setState({ ...state, playing: false }); } }>
                                    <BackIconMobileVideo />
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div onClick={ handleMute }>
                                        { state.muted ?
                                            <MutedAudioIconMobile />
                                            :
                                            <AudioIconMobile />
                                        }
                                    </div>
                                    <MoreOptionsIconVideo />
                                </div>
                            </div>
                            <div className="absolute cursor-pointer h-full text-transparent top-0 w-full z-10" onClick={ handlePlayPause }>s</div>    
                            <ReactPlayer height="100%" controls={ false } light={ light } loop={ loop } muted={ muted } onProgress={ handleProgress } playbackRate={ playbackRate } playing={ playing } pip={ pip } ref={ playerRef } url={ image } volume={ volume } width="100%" />
                            <div className="absolute bottom-16 flex items-center left-4 space-x-2 z-30">
                                <NavLink to={`/:${ username }`}>
                                    <img alt="" className="h-7 rounded-full object-cover w-7" src={ profilePicture } />
                                </NavLink>
                                <NavLink to={`/:${ username }`}>
                                    <p className="font-semibold text-sm text-white">{ username }</p>
                                </NavLink>
                            </div>
                            <div className="absolute bottom-16 flex flex-col right-4 space-y-9 z-30">
                                <LikeIconMobileVideo id={ profile?.id } like={ like } liked={ liked } name={ profile?.fullName } postId={ postId } profilePicture={ profile?.profilePicture } setLiked={ setLiked } username={ profile?.username } />
                                <CommentIconMobileVideo />
                                <ShareIconMobileVideo />
                            </div>
                            <VideoControls elapsedTime={ elapsedTime } muted={ muted } onChangeDispayFormat={ handleDisplayFormat } onDuration={ handleDuration } onPlayPause={ handlePlayPause } onSeek={ handleSeekChange } onSeekMouseDown={ handleSeekMouseDown } onSeekMouseUp={ handleSeekMouseUp }onVolumeChange={ handleVolumeChange } onVolumeSeekDown={ handleVolumeSeekDown } playbackRate={ playbackRate } played={ played } playing={ playing } ref={ controlsRef } totalDuration={ totalDuration } volume={ volume } />
                        </div>
                    </ViewPostDialog>
            </div>
            }
            <div className="hidden md:block">
                { openViewPost &&
                    <>
                        <div className="absolute animate__animated animate__fadeIn animate__faster bg-white dark:bg-dark-100 flex h-5/6 inset-0 max-w-5xl mx-auto rounded-lg top-14 w-full z-30">
                            <div className="animate__animated animate__fadeIn animate__faster bg-black dark:bg-dark-300 dark:bg-opacity-50 rounded-bl-lg rounded-tl-lg w-full">
                                { image &&
                                    <>
                                        { image[ image.length - 1 ] === "4" ?
                                            <Video height="h-full bg-black" image={ image } objectFit="object-contain" rounded="rounded-bl-lg rounded-tl-lg" svgHeight="h-14" svgWidth="w-14 md:w-32" />
                                            :
                                            <img alt="" className="h-full object-contain rounded-bl-lg rounded-tl-lg w-full" src={ image } />
                                        }
                                    </>
                                }
                            </div>
                            <div className="border-gray-300 flex flex-col border-l dark:border-dark-400 dark:bg-black h-full relative rounded-br-lg rounded-tr-lg w-100">
                                <div className="flex-grow">
                                    <div className="border-b dark:border-dark-400 flex items-center p-3">
                                        <div className="flex flex-grow space-x-3">
                                            <img className="animate__animated animate__fadeIn h-10 object-cover rounded-full w-10" src={ profilePicture } alt="" />
                                            <div className="flex items-center space-x-1">
                                                <NavLink className="animate__animated animate__fadeIn cursor-pointer font-medium dark:text-white hover:underline text-sm text-black" to={ { pathname:`/:${ username }`, props:{ username } } }>{ username }</NavLink>
                                                { createdBy === profile?.id ?
                                                    <div className="flex dark:text-white items-center">
                                                        • 
                                                        <NavLink to="/settings/edit-profile">
                                                            <p className="animate__animated animate__fadeIn cursor-pointer dark:text-white font-medium hover:underline ml-1 text-black text-sm">Edit Profile</p>
                                                        </NavLink>
                                                    </div>      
                                                    :
                                                    <div className="flex dark:text-white items-center">
                                                        • 
                                                        <p className="animate__animated animate__fadeIn cursor-pointer dark:text-white font-medium hover:underline ml-1 text-black text-sm">{ followedSnap ? "Unfollow" : "Follow" }</p>
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                        <MoreOptionsIcon openPostOptions={ openPostOptions } setOpenPostOptions={ setOpenPostOptions } />
                                    </div>
                                    <div className="flex-grow h-64 pl-3 pr-3 overflow-hidden overflow-y-auto">
                                        <CaptionId caption={ caption } profilePicture={ profilePicture } username={ username } />
                                        <CommentsId comments={ comments } />
                                    </div>
                                </div>
                                <div className="absolute bg-white bottom-0 dark:bg-black rounded-b-lg w-full z-50">
                                    <div className="flex border-t dark:border-dark-200 justify-between md:pl-3 md:pr-5 md:pt-3 pb-2 pl-2 pr-3 pt-2">
                                        <div className="flex flex-grow items-center space-x-4">
                                            <LikeIcon id={ profile?.id } like={ like } liked={ liked } name={ profile?.fullName } postId={ postId } profilePicture={ profile?.profilePicture } setLiked={ setLiked } username={ profile?.username } />
                                            <CommentIcon />
                                            <ShareIcon />
                                        </div>
                                        <SavedIcon saved={ saved } postId={ postId } profile={ profile } setSaved={ setSaved } postSaved={ postSaved } />
                                    </div>
                                    <LikesPostId likes={ likes } openViewLikes={ openViewLikes } setOpenViewLikes={ setOpenViewLikes } />
                                    <ReactTimeago className="cursor-pointer font-normal pl-4 text-gray-400 text-xs uppercase w-max" date={ new Date( dateCreated.toDate() ) } />
                                    <div className="bg-white border-t dark:bg-black dark:border-dark-200 hidden items-center justify-between md:flex mt-2.5 pb-4 pl-4 pr-5 pt-4 rounded-br-lg w-full">
                                        <div className="flex flex-grow items-center pr-5">
                                            <EmojiIcon height="24" width="24" />
                                            <input className="bg-transparent dark:placeholder-gray-400 dark:text-white font-light focus:outline-none h-full placeholder-gray-400 text-black w-full" placeholder="Add a comment..." />
                                        </div>
                                        <button className="text-instagram-100 text-lg disabled:cursor-not-allowed disabled:opacity-50">Post</button>
                                    </div>   
                                </div>
                            </div>
                        </div>
                        <div className="absolute right-0 top-0">
                            <CloseIcon newState={ false } setState={ setOpenViewPost } />
                        </div>
                    </>
                }
            </div> 
        </>
    );
};