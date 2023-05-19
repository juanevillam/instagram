import { db } from "../Database/firebase";
import { Post } from "../Components/Post";
import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { SuggestedForYou } from "../Components/SuggestedForYou";
import { SuggestionsForYou } from "../Components/SuggestionsForYou";

export const Feed = ({ profile }) => { 
    const dispatch = useDispatch()
    const [ posts, setPosts ] = useState( [] );
    const [ users, setUsers ] = useState( [] );
    const [ following, setFollowing ] = useState( null );
    document.title = "The Instagram Clone • By Juan Villa";
    
    const userChat = db.collection( "chats" ).where( "users", "array-contains", profile?.id );
    const [ chatsSnapshot ] = useCollection( userChat );
    
    useEffect( () => {
        let unsubscribePosts = db.collection( "posts" ).orderBy( "dateCreated", "desc" ).onSnapshot( snapshot => setPosts( snapshot.docs.map( doc => ({ id: doc.id, post: doc.data() }))));
        let unsubscribeUsers = db.collection( "users" ).where( "id", "!=", profile?.id ).onSnapshot( snapshot => setUsers( snapshot.docs.map( doc => ({ id: doc.id, user: doc.data() }))));
        let unsubscribeFollowing = db.collection( "users" ).doc( profile?.fatherId ).collection( "following" ).onSnapshot( snapshot => setFollowing( snapshot.docs.map( doc => ({ id: doc.id, following: doc.data() }))));
        
        return () => {
            unsubscribePosts();
            unsubscribeUsers();
            unsubscribeFollowing()
        };
    }, [ profile?.id, profile?.fatherId ]);

    return (
        <div className="bg-white dark:bg-black duration-300 flex h-screen md:bg-smoke-100 md:dark:bg-dark-100 overscroll-y-auto scrollbar-hide transition">
            { following?.length === 0 || !profile.getStarted ?
                <SuggestionsForYou chatsSnapshot={ chatsSnapshot } dispatch={ dispatch } following={ following } profile={ profile } users={ users } />
                :
                <div className="max-w-4.5xl mx-auto overscroll-y-auto scrollbar-hide w-full xl:flex">
                    <div className="duration-300 flex-grow h-screen md:bg-transparent md:pb-20 overflow-y-auto pb-36 scrollbar-hide transition">
                        <div className="lg:max-w-2xl md:pt-0 mx-auto max-w-md md:max-w-lg">
                            { posts.map(({ id, post }) => <Post caption={ post.caption } createdBy={ post.id } dateCreated={ post.dateCreated } image={ post.image } key={ id } postId={ id } profile={ profile } profileFatherId={ post.profileFatherId } profilePicture= { post.profilePicture } username={ post.username } /> ) }
                        </div>
                    </div>
                    <SuggestedForYou chatsSnapshot={ chatsSnapshot } dispatch={ dispatch } profile={ profile } users={ users } />
                </div>
            }
        </div>
    );
};