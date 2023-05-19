import { db } from "../Database/firebase";
import React, { useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { SuggestionsForYouUser } from "../Components/SuggestionsForYouUser";

export const ExplorePeople = ({ profile }) => {
    const [ users, setUsers ] = useState( [] );
    document.title = "Explore People • The Instagram Clone";
    
    const userChat = db.collection( "chats" ).where( "users", "array-contains", profile?.id );
    const [ chatsSnapshot ] = useCollection( userChat );
    
    useEffect( () => {
        let unsubscribeUsers = db.collection( "users" ).where( "id", "!=", profile?.id ).onSnapshot( snapshot => setUsers( snapshot.docs.map( doc => ({ id: doc.id, user: doc.data() }))));

        return () => unsubscribeUsers();

    }, [ profile?.id ]);

    return (
        <div className="bg-white dark:bg-black duration-300 flex h-screen md:bg-smoke-100 md:dark:bg-dark-100 overscroll-y-auto scrollbar-hide transition">
            <div className="animate__animated animate__fadeIn max-w-xl mx-auto pt-6 w-full">
                <p className="dark:text-white font-medium">Suggested</p>
                <div className="bg-white border border-smoke-200 dark:border-dark-300 dark:bg-black h-3/4 mt-3 overflow-y-scroll pt-2 relative rounded-lg">
                    <div className="pb-3 pl-4 pr-4 space-y-2.5 h-full">
                        { users.map(({ id, user }) => <SuggestionsForYouUser chatsSnapshot={ chatsSnapshot } key={ id } profile={ profile } user={ user } userId={ id } /> )}
                    </div>
                </div>
            </div>
        </div>
    );
};