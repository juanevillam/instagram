import { Message } from "./Message";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import { ShareIcon } from "../Icons/Share";
import { setMessenger } from "../Actions/ui";
import { DetailsIcon } from "../Icons/Details";
import { BackIconMobile } from "../Icons/Back";
import { auth, db } from "../Database/firebase";
import { LoadingIconMini } from "../Icons/Loading";
import { CloseIconMessenger } from "../Icons/Close";
import { handleGetId } from "../Helpers/handleGetId";
import { useDispatch, useSelector } from "react-redux";
import { ChatMessageSender } from "./ChatMessageSender";
import { useAuthState } from "react-firebase-hooks/auth";
import React, { useRef, useState, useEffect } from "react";
import { handleSendLike, handleSendMessage, handleSendImage, handleSendImageToReader } from "../Helpers/handleSend";
import { ChatProfileInfo } from "./ChatProfileInfo";

export const Chat = ({ myProfile }) => {
    const hidden = true;
    let { chatId } = useParams();
    const dispatch = useDispatch();
    const reader = new FileReader();
    const filePicker = useRef( null );
    const [ user ] = useAuthState( auth );
    const [ chat, setChat ] = useState( [] );
    const [ message, setMessage ] = useState( "" );
    const [ messages, setMessages ] = useState( [] );
    const [ profile, setProfile ] = useState( null );
    const [ recipientId, setRecipientId ] = useState( "" );
    const isHidden = useSelector( state => state.messenger );
    const [ chatDetails, setChatDetails ] = useState( false );
    const [ postingImage, setPostingImage ] = useState( false );
    const [ imagefromFilePicker, setImagefromFilePicker ] = useState( null );
    const sendImageToReader = ( e ) => handleSendImageToReader( e, reader, setImagefromFilePicker );
    const sendLike = ( e ) => handleSendLike( e, chatId, myProfile.username, myProfile.id, setMessage );
    const sendMessage = ( e ) => handleSendMessage( e, chatId, message, myProfile.username, myProfile.id, setMessage );
    const sendImage = ( ) => handleSendImage( chatId, myProfile.username, myProfile.id, imagefromFilePicker, setImagefromFilePicker, setPostingImage );
    
    if ( recipientId && !profile ) {
        db.collection( "users" ).where( "id", "==", recipientId ).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                setProfile( doc.data() );
            });
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    };

    if ( !isHidden.hidden ) {
        dispatch( setMessenger( hidden ) )
    }

    useEffect( () => {
        let unsubscribeChat; 
        let unsubscribeMessages; 
        // let unsubscribeRecipient; 
        
        if ( chatId ) { 
            // unsubscribeRecipient = () => setRecipientId( handleGetId( chat?.users, user ) );
            unsubscribeChat = db.collection( "chats" ).doc( chatId ).onSnapshot( snapshot => setChat( snapshot.data() ) ); 
            unsubscribeMessages = db.collection( "chats" ).doc( chatId ).collection( "messages" ).orderBy( "dateCreated", "asc" ).onSnapshot( snapshot => setMessages( snapshot.docs.map( doc => ({ id: doc.id, message: doc.data() }))));
        }; 
        
        return () => {
            unsubscribeChat();
            unsubscribeMessages();
            // unsubscribeRecipient();
        }; 
    }, [ /* chat?.users, user, */ chatId ] );
    
    
    return (
        <div className="h-full dark:bg-black relative w-full">
            <div className="flex border-b border-smoke-200 dark:bg-black dark:border-dark-400 items-center md:pl-6 md:pr-6 pt-3 pb-3 pl-3 pr-3">
                <div className="flex flex-grow items-center space-x-3">
                    { chatDetails ?
                        <h1 className="animate__animated animate__fadeIn cursor-pointer dark:text-white font-medium hover:underline pb-1 pt-1 text-xl w-max" onClick={ () => setChatDetails( !chatDetails ) }>Details</h1>
                        :
                        <>
                            { recipientId && <ChatProfileInfo recipientId={ recipientId } /> }
                        </>
                    }
                </div>
                <DetailsIcon chatDetails={ chatDetails } setChatDetails={ setChatDetails } />
            </div>
            { chatDetails ?
                <div className="animate__animated animate__fadeIn bg-white dark:bg-black h-5/6 flex flex-col items-center justify-center md:h-4/6 space-y-3 w-full">
                    <h1 className="animate__animated animate__fadeIn cursor-pointer hover:underline text-red-500 text-2xl w-max">Delete Chat</h1>
                    <h1 className="animate__animated animate__fadeIn cursor-pointer hover:underline text-red-500 text-2xl w-max">Block @</h1>
                    <h1 className="animate__animated animate__fadeIn cursor-pointer hover:underline text-red-500 text-2xl w-max">Report @</h1>
                </div>
                :
                <>
                    <div className={`dark:bg-black ${ messages.length === 0 && !imagefromFilePicker ? "flex h-2/3 items-center justify-center" : "h-5/6 overflow-y-scroll md:pl-6 md:pr-6 pl-3 pr-3 pt-4 pb-56 space-y-4 w-full" }`}>
                        { messages.length === 0 && !imagefromFilePicker && 
                            <div className="animate__animated animate__fadeIn font-light space-y-1">
                                <h1 className="dark:text-white text-center text-3xl">No messages yet</h1>
                                <p className="dark:text-gray-400 text-center text-gray-500 text-sm">Send private photos and messages to @.</p>
                            </div>
                        }
                        { messages.map(({ id, message }) => <Message audio={ message?.audio } audioImage={ message?.audioImage } id={ message?.id } image={ message?.image } key={ id } like={ message?.like } message= { message?.message } profile={ myProfile } /> )}    
                        { imagefromFilePicker && 
                            <div className="relative ml-auto mr-3 w-max">
                                <div className={`absolute flex right-2 space-x-3 ${ postingImage ? "-top-2.5" : "top-2" } z-50`}>
                                    { postingImage ?
                                        <LoadingIconMini />
                                        :
                                        <>
                                            <div className="bg-gray-100 bg-opacity-80 dark:bg-dark-200 dark:hover:bg-dark-300 duration-300 hover:bg-opacity-90 p-1.5 rounded-full transition" onClick={ sendImage }>
                                                <ShareIcon />
                                            </div>
                                            <div className="bg-gray-100 bg-opacity-80 dark:bg-dark-200 dark:hover:bg-dark-300 duration-300 hover:bg-opacity-90 p-1.5 rounded-full transition" onClick={ () => setImagefromFilePicker( null ) }>
                                                <CloseIconMessenger />
                                            </div>
                                        </>
                                    }
                                </div>
                                <img alt="" className="animate__animated animate__fadeIn max-h-52 rounded-2xl" src={ imagefromFilePicker } />
                            </div>
                        }
                    </div>
                    <ChatMessageSender chatId={ chatId } filePicker={ filePicker } message={ message } myProfile={ myProfile } sendImageToReader={ sendImageToReader } sendLike={ sendLike } sendMessage={ sendMessage } setMessage={ setMessage } />
                </>
            }            
        </div>
    );
};