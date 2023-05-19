import { LockIcon } from "../Icons/Lock";
import { useDispatch } from "react-redux";
import { EmailIcon } from "../Icons/Email";
import { NavLink } from "react-router-dom";
import { useForm } from "../Hooks/useForm";
import React, { useEffect, useState } from "react";
import { handleLogin } from "../Helpers/handleLogin";
import { removeError, setError } from "../Actions/ui";
import { InstagramLogoAuth } from "../Icons/Instagram";

export const Login = () => {
    const dispatch = useDispatch();
    const [ rememberMe, setRememberMe ] = useState( false );
    document.title = "Login • The Instagram Clone • By Juan Villa";
    const [ formValues, handleInputChange ] = useForm({ email: "", password: "" });
    let { email, password } = formValues;

    useEffect(() => {
            setRememberMe( localStorage.getItem( "rememberMe" ) );
    }, [ ]);
   

    if ( localStorage.getItem( "email" ) ){
        email = localStorage.getItem( "email" );
    };

    if ( localStorage.getItem( "password" ) ){
        password = localStorage.getItem( "password" );
    };

    const rememberMeHandler = () => {
        setRememberMe( !rememberMe );

        if ( rememberMe ) {
            localStorage.removeItem( "email" );
            localStorage.removeItem( "password" );
            localStorage.removeItem( "rememberMe" );
        } else {
            localStorage.setItem( "email", email );
            localStorage.setItem( "rememberMe", true );
            localStorage.setItem( "password", password );
        };
    };

    const login = ( e ) => handleLogin( e, email, password, dispatch, setError, removeError );

    return (
        <div className="flex font-sans justify-between h-screen">
            <div className="bg-center bg-cover hidden lg:block relative w-1/2" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1974&q=80')" }}>
                <div className="absolute bottom-4 flex justify-center w-full">
                    <div className="max-w-md text-center">
                        <span className="font-light text-white text-2xl">
                            Capture and Share the World's Moments with The Instagram Clone.
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex-1 max-w-2xl mx-auto">
                <div className="flex flex-col lg:px-14 pt-5 px-8 xl:px-24">
                    <InstagramLogoAuth />
                    <div className="pb-6 pt-6">
                        <h1 className="animate__animated animate__fadeIn  font-bold tracking-wide text-3xl whitespace-nowrap">
                            Hi, Welcome back!
                        </h1>
                        <span className="animate__animated animate__fadeIn  font-light text-gray-500 text-sm">
                            Login now to share and enjoy more.
                        </span>
                        <form onSubmit={ login }>
                            <div className="pt-6">
                                <label className="animate__animated animate__fadeIn  font-light" htmlFor="email">Email address</label>
                                <div className="animate__animated animate__fadeIn border border-gray-400 duration-300 flex focus-within:border-orange-500 focus-within:shadow-lgOrange items-center mt-2 overflow-hidden rounded-lg transition w-full">
                                    <div className="flex items-center justify-center pl-6">
                                        <EmailIcon className="h-6 pointer-events-none w-6" />
                                    </div>
                                    <input autoComplete="current-email" className="border-0 focus:outline-none focus:ring-0 font-light px-4 py-4.5 w-full" id="email" minLength="4" name="email" onChange={ handleInputChange } placeholder="ex: juanestebanvillamemdoza@gmail.com" required type="email" value={ email } />
                                </div>
                            </div>
                            <div className="pt-6">
                                <label className="animate__animated animate__fadeIn font-light" htmlFor="password">Password</label>
                                <div className="animate__animated animate__fadeIn border border-gray-400 duration-300 flex focus-within:border-orange-500 focus-within:shadow-lgOrange items-center mt-2 overflow-hidden rounded-lg transition w-full" >
                                    <div className="flex items-center justify-center pl-6">
                                        <LockIcon className="h-6 pointer-events-none w-6" />
                                    </div>    
                                    <input autoComplete="current-password" className="border-0 focus:outline-none focus:ring-0 font-light px-4 py-4.5 w-full" id="password" minLength="8" name="password" onChange={ handleInputChange } placeholder="Enter your password" required type="password" value={ password } />
                                </div>
                            </div>
                            <div className="flex items-center justify-between pt-4">
                                <div className="animate__animated animate__fadeIn flex items-center">
                                    <input className="bg-white border border-gray-400 duration-300 focus:outline-none focus:ring-pink-200 h-5 rounded text-pink-500 transition w-5" defaultChecked={ localStorage.getItem( "rememberMe" ) } id="rememberMe" name="rememberMe" onClick={ rememberMeHandler } type="checkbox" />
                                    <label className="font-light pl-4 text-gray-900" htmlFor="remember">
                                        Remember me
                                    </label>
                                </div>
                                <p className="animate__animated animate__fadeIn cursor-pointer duration-300 hover:text-orange-600 hover:underline text-orange-500 transition"> Forgot password</p>
                            </div>
                            <div className="pt-8">
                                <button className="animate__animated animate__fadeIn bg-pink-500 duration-300 focus:outline-none focus:ring-4 focus:ring-red-100 hover:bg-pink-600 py-4 px-8 rounded-lg shadow-lgOrange text-white transition w-full" onClick={ login } type="submit">
                                    Login
                                </button>
                            </div>
                        </form>
                        <div className="pt-4">
                            <div className="animate__animated animate__fadeIn font-light text-center text-gray-500">
                                Not registered yet?
                                <NavLink className="animate__animated animate__fadeIn font-normal duration-300 hover:text-orange-600 hover:underline ml-2 text-orange-500 transition" to="/auth/register">
                                    Create an Account
                                </NavLink>
                            </div>
                            <div className="flex flex-wrap gap-y-2 items-center justify-between pt-0.5 text-center whitespace-nowrap">
                                <span className="animate__animated animate__fadeIn flex-1 text-gray-500">© 2021 Juan Villa. All rights reserved.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    );
};