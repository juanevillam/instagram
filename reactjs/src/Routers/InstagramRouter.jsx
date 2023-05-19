import React from "react";
import { Feed } from "../Views/Feed";
import { PostId } from "../Views/PostId";
import { useSelector } from "react-redux";
import { Profile } from "../Views/Profile";
import { Explore } from "../Views/Explore";
import { Settings } from "../Views/Settings";
import { Header } from "../Components/Header";
import { Navbar } from "../Components/Navbar";
import { Messenger } from "../Views/Messenger";
import { useDarkMode } from "../Hooks/useDarkMode";
import { ExplorePeople } from "../Views/ExplorePeople";
import { Switch, Route, Redirect } from "react-router-dom";

export const InstagramRouter = ( props ) => {
    useDarkMode();
    const profile = useSelector( state => state.profile );
    
    return (
        <div className="max-w-screen-2xl mx-auto" id="instagram-clone">
            <div className={`${ props.location.pathname === "/profile" && "hidden md:block" } ${ props.location.pathname.startsWith( "/p/:" ) && "hidden md:block"  } ${ props.location.pathname.startsWith( "/:" ) && "hidden md:block"  } ${ props.location.pathname === "/settings" && "hidden md:block" } ${ props.location.pathname === "/explore" && "hidden md:block" } ${ props.location.pathname.startsWith( "/messenger" ) && "hidden md:block" }`}>
                <Header profile={ profile } />
            </div>
            <Switch>
                <Route path="/feed" component={ () => <Feed profile={ profile } /> } exact />
                <Route path="/settings" component={ () => <Settings profile={ profile } /> } />
                <Route path="/messenger" component={ () => <Messenger profile={ profile } /> } />
                <Route path="/explore" component={ () => <Explore profile={ profile } /> } exact />
                <Route path="/p/:postId" component={ () => <PostId profile={ profile } /> } exact />
                <Route path="/:username" component={ () => <Profile myProfile={ profile } /> } exact />                <Route path="/messenger" component={ () => <Messenger profile={ profile } /> } />
                <Route path="/explore/people" component={ () => <ExplorePeople profile={ profile } /> } exact />
                <Redirect to="/feed" />
            </Switch>
            <div className={`${ props.location.pathname.startsWith( "/messenger" ) && "hidden" }`}>
                <Navbar username={ profile.username } profilePicture={ profile.profilePicture } />
            </div>
        </div>
    );
};