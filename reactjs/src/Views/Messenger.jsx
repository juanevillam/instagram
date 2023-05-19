import { io } from "socket.io-client";
import { db } from "../Database/firebase";
import { Chat } from "../Components/Chat";
import { NavLink } from "react-router-dom";
import { setMessenger } from "../Actions/ui";
import { BackIconMobile } from "../Icons/Back";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChatSidebar } from "../Components/ChatSidebar";
import { Route, Switch, useRouteMatch } from "react-router";
import { useCollection } from "react-firebase-hooks/firestore";
import { NewMessageIcon, NewMessageIconMobile } from "../Icons/NewMessage";

const socket = io("http://localhost:7000");

export const Messenger = ({ profile }) => {
  const hidden = false;
  const dispatch = useDispatch();
  const [users, setUsers] = useState({});
  const isHidden = useSelector((state) => state.messenger);

  const onConsole = () => {
    socket.emit("new_user", profile?.username);
  };

  useEffect(() => {
    dispatch(setMessenger(hidden));
  }, [dispatch, hidden]);

  useEffect(() => {
    socket.on("new_user", (users) => {
      console.log({ users });
    });
  }, []);

  let { path, url } = useRouteMatch();
  document.title = `Messenger • ${profile.fullName} (@${profile.username})`;

  const chatsSnapshot = db
    .collection("chats")
    .where("users", "array-contains", profile?.id);
  const [chats] = useCollection(chatsSnapshot);

  return (
    <>
      {!isHidden.hidden && (
        <div className="animate__animated animate__fadeIn bg-white dark:bg-black duration-300 flex items-center max-w-4xl md:hidden mx-auto pb-1.5 pl-2 pr-3 pt-1.5 sticky top-0 transition z-20">
          <div className="flex flex-grow items-center space-x-4">
            <NavLink to="/feed">
              <BackIconMobile />
            </NavLink>
            <h1 className="dark:text-white font-medium text-xl">
              {profile?.username}
            </h1>
          </div>
          <div className="flex items-center space-x-5">
            <NewMessageIconMobile />
          </div>
        </div>
      )}
      {profile ? (
        <div className="overscroll-y-auto scrollbar-hide">
          <div className="block dark:bg-black md:hidden">
            {chats?.docs.map((chat) => (
              <ChatSidebar
                key={chat.id}
                id={chat.id}
                users={chat.data().users}
                to={`${url}/${chat.id}`}
              />
            ))}
            <div className="animate__animated animate__fadeIn h-screen w-full">
              <Switch>
                <Route path={`${path}/:chatId`}>
                  <Chat myProfile={profile} />
                </Route>
              </Switch>
            </div>
          </div>
          <div className="bg-smoke-100 dark:bg-dark-100 duration-300 flex-grow h-screen hidden md:flex overscroll-y-auto scrollbar-hide transition">
            <div className="bg-white border border-smoke-200 dark:bg-black dark:border-dark-400 duration-300 flex h-5/6 lg:max-w-4xl max-w-3xl mt-5 mx-auto rounded-md transition xl:max-w-5xl w-full">
              <div className="border-smoke-200 border-r dark:border-dark-400 h-full w-98">
                <div className="border-b border-smoke-200 dark:border-dark-400 flex items-center pb-4 pl-5 pr-5 pt-4 w-full">
                  <div className="flex-grow text-center">
                    <NavLink
                      className="animate__animated animate__fadeIn cursor-pointer dark:text-white font-medium hover:underline text-lg w-max"
                      to={`/:${profile?.username}`}
                    >
                      {profile.username}
                    </NavLink>
                  </div>
                  <NewMessageIcon />
                </div>
                <p className="text-white" onClick={onConsole}>
                  Click me
                </p>
                {chats?.empty ? (
                  <div className="bg-white dark:bg-black flex h-3/4 items-center justify-center">
                    <h1 className="dark:text-white font-light text-center text-xl">
                      There are no chats yet
                    </h1>
                  </div>
                ) : (
                  <div className="h-90 overflow-y-scroll w-full">
                    {chats?.docs.map((chat) => (
                      <ChatSidebar
                        key={chat.id}
                        id={chat.id}
                        users={chat.data().users}
                        to={`${url}/${chat.id}`}
                      />
                    ))}
                  </div>
                )}
              </div>
              <div className="animate__animated animate__fadeIn w-full">
                <Switch>
                  <Route exact path={path}>
                    <div className="bg-white dark:bg-black flex h-93 items-center justify-center rounded-br-xl rounded-tr-lg">
                      <div className="space-y-5">
                        <img
                          alt=""
                          className="h-26 mx-auto w-26"
                          src="https://upload.wikimedia.org/wikipedia/commons/b/be/Facebook_Messenger_logo_2020.svg"
                        />
                        <div className="font-light space-y-1">
                          <h1 className="dark:text-white text-center text-3xl">
                            Your Messages
                          </h1>
                          <p className="dark:text-gray-400 text-center text-gray-500 text-sm">
                            Send private photos and messages to a friend or
                            group.
                          </p>
                        </div>
                      </div>
                    </div>
                  </Route>
                  <Route path={`${path}/:chatId`}>
                    <Chat myProfile={profile} />
                  </Route>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1>Loading...dsadsa</h1>
      )}
    </>
  );
};
