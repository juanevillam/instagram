import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export const ProfilePostsGridPost = ({ image, postId }) => {
    return (
        <NavLink to={{ pathname:`/p/:${ postId }` }}>
            <motion.div className="animate__animated animate__fadeIn img-wrap" layout>
                { image[ image.length - 1 ] === "4" ? 
                    <>  
                        <motion.video alt="" className="image" src={ image } whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.9 }} />
                        <svg className="absolute animate__animated animate__fadeIn animate__faster right-2 top-2 z-10" color="#ffffff" fill="#ffffff" height="20" role="img" viewBox="0 0 48 48" width="20">
                            <path d="M9.6 46.5c-1 0-2-.3-2.9-.8-1.8-1.1-2.9-2.9-2.9-5.1V7.3c0-2.1 1.1-4 2.9-5.1 1.9-1.1 4.1-1.1 5.9 0l30.1 17.6c1.5.9 2.3 2.4 2.3 4.1 0 1.7-.9 3.2-2.3 4.1L12.6 45.7c-.9.5-2 .8-3 .8z"/ >
                        </svg>
                    </>
                    :
                    <motion.img alt="" className="image" src={ image } whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.9 }} />
                }
            </motion.div>
        </NavLink>
    );
};