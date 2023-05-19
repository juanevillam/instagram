import React from "react";
import ReactTimeago from "react-timeago";
import { EmojiIcon } from "../Icons/Emoji";
import { Comment, CommentId } from "./Comment";

export const Comments = ({ comment, comments, dateCreated, likes, postCommentHandler, profile, setComment, setOpenViewComments, setOpenViewPost }) => {
    return (
        <>
            <div className={`md:pl-2.5 ${ comments.length > 1 && "md:pb-2 pb-3" } pl-2`}>
                { comments.length > 1 && 
                    <div className={`${ likes.length > 0 && "pt-2.5" } ${ likes.length === 0 && "pt-1" }`}>
                        <p className="hidden cursor-pointer dark:text-gray-400 font-normal hover:underline md:block pb-px pl-1.5 text-gray-500 text-sm w-max" onClick={ () => setOpenViewPost( true ) }>View all { comments.length } comments</p>
                        <p className="block cursor-pointer dark:text-gray-400 font-normal hover:underline md:hidden pb-px pl-1.5 text-gray-500 text-sm w-max" onClick={ () => setOpenViewComments( true ) }>View all { comments.length } comments</p>
                    </div>
                }
                <div className={`${ comments.length === 1 && likes.length > 0 && "pt-2" }`}>
                    { comments.slice( Math.max( comments.length - 2, 0 ) ).map(({ id, comment }) => <Comment key={ id } username={ comment.username } message={ comment.message } width="max-w-sm" />  ) }
                </div>
                <ReactTimeago className={`cursor-pointer font-normal hidden md:block ${ likes.length > 0 && comments.length === 0 && "mt-2" } pl-2 pt-1 text-gray-400 text-xs uppercase w-max`} date={ new Date( dateCreated?.toDate() ) } />
            </div>
            <div className={`md:hidden -mt-1 ${ likes.length > 0 && comments.length === 0 && "pt-3.5" } ${ likes.length === 0 && comments.length === 0 && "pt-2" } ${ comments.length === 1 && "pt-3" } ${ comments.length > 1 && "pt-px" } w-full`}>
                <div className="flex items-center pl-2.5 space-x-1">
                    <div className="w-7">
                        <img alt="" className="h-6 object-cover rounded-full w-6" src={ profile?.profilePicture } />
                    </div>
                    <form className="flex-grow">
                        <div className={`flex flex-grow items-center ${ comment.length > 0 && "pr-3.5" } w-full`}>
                            <input className="bg-transparent dark:text-white outline-none pl-0.5 pr-8 w-full" type="text" placeholder="Add a comment..." value={ comment } onChange={ (e) => setComment( e.target.value ) } />
                            { comment.length === 0 ?
                                <EmojiIcon height="18" width="18" />
                                :
                                <>  
                                    { comment.replace(/ /g,'').length === 0 ?
                                        <button className="animate__animated animate__fadeIn animate__faster cursor-not-allowed text-instagram-100 text-opacity-50">Post</button>
                                        :
                                        <button className="animate__animated animate__fadeIn animate__faster text-instagram-100" onClick={ postCommentHandler }>Post</button>
                                    }
                                </>
                            }
                        </div>
                    </form>
                </div>
            </div>
            <ReactTimeago className="block cursor-pointer font-light md:hidden pl-4 pt-2.5 text-gray-500 text-xxs uppercase w-max" date={ new Date( dateCreated?.toDate() ) } />
            <div className="bg-white border-t dark:bg-black dark:border-dark-200 hidden items-center justify-between md:flex mt-2 pb-3 pl-4 pr-5 pt-3 rounded-b-xl w-full">
                <div className="flex flex-grow items-center pr-6">
                    <EmojiIcon height="24" width="24" />
                    <input className="dark:bg-black dark:placeholder-gray-400 dark:text-white font-light focus:outline-none h-full placeholder-gray-500 text-black w-full" onChange={ ( e ) => setComment( e.target.value ) } placeholder="Add a comment..." value={ comment } />
                </div>
                <button className="text-instagram-100 text-lg disabled:cursor-not-allowed disabled:opacity-50" disabled={ !comment } onClick={ postCommentHandler }>Post</button>
            </div>   
        </>
    );
};

export const CommentsId = ({ comments }) => {
    return (
        <div className="mt-4 pb-8 space-y-4">
            { comments.map(({ id, comment }) => <CommentId key={ id } username={ comment.username } profilePicture={ comment.profilePicture } message={ comment.message } dateCreated={ comment?.dateCreated } />  ) }
        </div>
    );
};