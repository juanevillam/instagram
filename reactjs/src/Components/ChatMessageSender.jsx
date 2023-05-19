import React from "react";
import Recorder from "./Recorder";
import { EmojiIcon } from "../Icons/Emoji";
import { PhotoIcon } from "../Icons/Photo";
import { LikeIconMessenger } from "../Icons/Like";

export const ChatMessageSender = ({ chatId, filePicker, message, myProfile, sendImageToReader, sendLike, sendMessage, setMessage }) => {
    return (
        <>
            <div className="bg-dark-300 bottom-1 fixed md:hidden p-2 mx-auto inset-x-0 rounded-full w-11.5/12 z-20">
                <form className="flex justify-between pb-1.5 pl-1 pr-2 pt-1.5 rounded-lg w-full" onSubmit={ sendMessage }>
                    <div className="flex flex-grow items-center pr-6">
                        <EmojiIcon height="24" width="24" />
                        <input className="bg-transparent dark:placeholder-gray-300 dark:text-white font-light focus:outline-none h-full placeholder-gray-500 text-black w-full" onChange={ ( e ) => setMessage( e.target.value ) } placeholder="Message..." value={ message } />
                        { message.replace(/ /g,'').length !== 0 && <button hidden type="submit" onClick={ sendMessage }>Hidden Submit</button> }
                    </div>
                    <div className="flex items-center space-x-4">
                        { message ?
                            <div className="pr-1">
                                { message.replace(/ /g,'').length === 0 ?
                                    <button className="animate__animated animate__fadeIn animate__faster cursor-not-allowed font-semibold text-instagram-100 text-opacity-50" disabled={ message.replace(/ /g,'').length === 0 }>Send</button>
                                    :
                                    <button className="animate__animated animate__fadeIn font-semibold text-instagram-100" disabled={ message.replace(/ /g,'').length === 0 } onClick={ sendMessage } type="submit">Send</button>
                                }
                            </div>
                            :
                            <>
                                <Recorder chatId={ chatId } myProfileUsername={ myProfile.username } myProfileProfilePicture={ myProfile.profilePicture } myProfileId={ myProfile.id } />
                                <PhotoIcon filePicker={ filePicker } />
                                <input hidden type="file" ref={ filePicker } onChange={ sendImageToReader } />
                                <LikeIconMessenger isItMessage={ false } handleSendLike={ sendLike } />
                            </>
                        }
                    </div>
                </form>
            </div>
            <div className="absolute animate__animated animate__fadeIn bg-white bottom-0 dark:bg-black hidden items-center md:flex pb-4 pl-3 pr-3 pt-4 rounded-br-lg w-full">
                <form className="border border-smoke-200 dark:border-dark-200 flex justify-between p-3 rounded-lg w-full" onSubmit={ sendMessage }>
                    <div className="flex flex-grow items-center pr-6">
                        <EmojiIcon height="24" width="24" />
                        <input className="dark:bg-black dark:placeholder-gray-400 dark:text-white font-light focus:outline-none h-full placeholder-gray-500 text-black w-full" onChange={ ( e ) => setMessage( e.target.value ) } placeholder="Message..." value={ message } />
                        { message.replace(/ /g,'').length !== 0 && <button hidden type="submit" onClick={ sendMessage }>Hidden Submit</button> }
                    </div>
                    <div className="flex items-center space-x-4">
                        { message ?
                            <>
                                { message.replace(/ /g,'').length === 0 ?
                                    <button className="animate__animated animate__fadeIn animate__faster cursor-not-allowed text-instagram-100 text-opacity-50" disabled={ message.replace(/ /g,'').length === 0 }>Send</button>
                                    :
                                    <button className="animate__animated animate__fadeIn font-medium text-instagram-100" disabled={ message.replace(/ /g,'').length === 0 } onClick={ sendMessage } type="submit">Send</button>
                                }
                            </>
                            :
                            <>
                                <Recorder chatId={ chatId } myProfileUsername={ myProfile.username } myProfileProfilePicture={ myProfile.profilePicture } myProfileId={ myProfile.id } />
                                <PhotoIcon filePicker={ filePicker } />
                                <input hidden type="file" ref={ filePicker } onChange={ sendImageToReader } />
                                <LikeIconMessenger isItMessage={ false } handleSendLike={ sendLike } />
                            </>
                        }
                    </div>
                </form>
            </div>
        </>
    )
}