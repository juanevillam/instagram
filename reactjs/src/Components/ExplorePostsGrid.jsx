import React from "react";
import "../Styles/ExplorePostsGrid.css";
import { ExplorePostsGridPost } from "./ExplorePostsGridPost";

export const ExplorePostsGrid = ({ posts }) => {
    return (
        <div className="max-w-3xl mx-auto md:mt-6 mt-0 pb-60 w-screen">
            <div className="block md:hidden">
                    <div className="image-gallery-mobile">
                        { posts.map(({ id, post }) => <ExplorePostsGridPost key={ id } postId={ id } image={ post.image } /> )}
                    </div>
                </div>
                <div className="hidden md:block">
                    <div className="image-gallery">
                        { posts.map(({ id, post }) => <ExplorePostsGridPost key={ id } postId={ id } image={ post.image } /> )}
                    </div>
                </div>
        </div>
    );
};