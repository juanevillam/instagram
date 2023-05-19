import { db } from "../Database/firebase";
import React, { useEffect, useState } from "react";
import { BackIconMobileVideo } from "../Icons/Back";
import { ExploreIconMobileMini } from "../Icons/Explore";
import { ExploreSearch } from "../Components/ExploreSearch";
import { ExplorePostsGrid } from "../Components/ExplorePostsGrid";

export const Explore = ({ profile }) => {
    const [ posts, setPosts ] = useState( [] );
    const [ query, setQuery ] = useState( "" );
    document.title = "Explore • The Instagram Clone";

    useEffect( () => {
        let unsubscribePosts = db.collection( "posts" ).orderBy( "dateCreated", "desc" ).onSnapshot( snapshot => setPosts( snapshot.docs.map( doc => ({ id: doc.id, post: doc.data() }))));
        
        return () => unsubscribePosts();
    }, [ profile?.id ]);

    return (
        <div className="bg-white dark:bg-black duration-300 flex h-screen md:bg-smoke-100 md:dark:bg-dark-100 overflow-y-auto scrollbar-hide transition w-screen">
            <div className="duration-300 h-screen md:bg-transparent max-w-4xl mx-auto transition w-screen">
                <div className="flex items-center md:hidden pb-2 pl-2 pr-2 pt-2.5 space-x-4">
                    { query.length > 0 && 
                        <div className="pl-1" onClick={ () => setQuery( "" ) }>
                            <BackIconMobileVideo /> 
                        </div>
                    }
                    <div className="bg-smoke-200 dark:bg-dark-300 flex items-center mx-auto pb-1.5 pl-2.5 pt-1.5 rounded-lg w-full">
                        { query.length === 0 &&
                            <ExploreIconMobileMini />
                        }
                        <input className="bg-transparent dark:text-white dark:placeholder-gray-400 focus:outline-none font-light placeholder-gray-500 pl-0.5 text-black text-lg w-full" onChange={ ( e ) => setQuery( e.target.value ) } placeholder="Search" value={ query } />
                    </div>
                </div>
                <div className="block md:hidden">
                    { query.length === 0 ?
                        <ExplorePostsGrid fullName={ profile?.fullName } id={ profile?.id } posts={ posts } userUid={ profile?.id } />
                        :
                        <ExploreSearch />
                    }
                </div>
                <div className="hidden md:block">
                    <ExplorePostsGrid fullName={ profile?.fullName } id={ profile?.id } posts={ posts } userUid={ profile?.id } />
                </div>
            </div>
        </div>
    );
};