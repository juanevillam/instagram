import React from "react";
import "../Styles/ProfilePostsGrid.css";
import { MediaIcon } from "../Icons/Media";
import { ProfilePostsGridPost } from "./ProfilePostsGridPost";

export const ProfilePostsGrid = ({ fullName, id, posts, userUid }) => {
    return (
        <>
            <div className="border-b dark:border-dark-200 md:max-w-3xl md:mb-6 md:mt-12 mt-4 mx-auto xl:max-w-4xl xl:mb-8" />
            <div className="mx-auto md:max-w-3xl xl:max-w-4xl">
                { posts.length < 1 &&
                    <>
                        <div className="flex flex-col md:hidden mt-28 mx-auto h-full items-center justify-center w-max">
                            <MediaIcon />
                            <div className="dark:text-white font-light max-w-xs text-center text-sm">
                                { userUid === id ?
                                    <h1>Start capturing and sharing your moments, { fullName.split( " " ).slice( 0, 1 ).join( " " ) }.</h1>
                                    :
                                    <>dsa</>
                                }
                            </div>
                        </div>
                        <div className="bg-white dark:bg-dark-300 hidden md:flex mx-auto">
                            <div className="max-w-sm">
                                <img alt="" className="h-full object-cover w-full" src="https://www.instagram.com/static/images/mediaUpsell.jpg/6efc710a1d5a.jpg"/>
                            </div>
                            <div className="flex-grow my-auto">
                                <div className="dark:text-white mx-auto w-max">
                                    { userUid === id ?
                                        <h1 className="font-light max-w-md text-center text-2xl">Start capturing and sharing your moments, { fullName.split( " " ).slice( 0, 1 ).join( " " ) }.</h1>
                                        :
                                        <h1 className="font-light max-w-sm text-2xl text-center xl:max-w-md">This user haven't posted anything yet.</h1>
                                    }
                                </div>
                            </div>
                        </div>
                    </>
                }
                <div className="block md:hidden">
                    <div className="img-grid-mobile">
                        { posts.map(({ id, post }) => <ProfilePostsGridPost key={ id } postId={ id } image={ post.image } /> )}
                    </div>
                </div>
                <div className="hidden md:block">
                    <div className="img-grid">
                        { posts.map(({ id, post }) => <ProfilePostsGridPost key={ id } postId={ id } image={ post.image } /> )}
                    </div>
                </div>
            </div>
        </>
    );
};