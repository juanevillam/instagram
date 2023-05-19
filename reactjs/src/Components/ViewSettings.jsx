import React from "react";
import { rgba } from "polished";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { SettingsIcon } from "../Icons/Settings";
import { SavedIconSettings } from "../Icons/Saved";
import { DialogDecoration } from "./DialogDecoration";

export const ViewSettingsOverlay = styled.div`
    background: ${ rgba( "black", 0.65 ) };
    height: 5000px;
    left: 0;
    opacity: ${ props => props.openViewSettings ? 1 : 0 }; 
    position: fixed;
    top: 0;
    transition-duration: 0.3s; 
    transition-property: visibility opacity; 
    visibility: ${ props  => props.openViewSettings ? "visible" : "hidden" };
    width: 5000px;
    z-index: 50;
`;

export const ViewSettingsDialog = styled.div`
    background-color: none; 
    bottom: 0; 
    border-top-left-radius: 20px; 
    border-top-right-radius: 20px; 
    height: max-content; 
    left: 0; 
    position: fixed; 
    right: 0; 
    transition: transform 0.3s; 
    transform: translateY( ${ p => p.openViewSettings ? 0 : "100%" } ); 
    z-index: 100000 !important;
`;

export const ViewSettings = ({ openViewSettings, setOpenViewSettings }) => {
    return (
        <div className="md:hidden">
            <ViewSettingsOverlay openViewSettings={ openViewSettings } onClick={ () => setOpenViewSettings( false ) } />
            <ViewSettingsDialog openViewSettings={ openViewSettings }>
                <div className="bg-smoke-100 dark:bg-dark-100 pt-4 rounded-tl-3xl rounded-tr-3xl">
                    <DialogDecoration />
                    <div className="mt-4">
                        <NavLink to="/settings">
                            <div className="cursor-pointer dark:bg-opacity-10 duration-300 flex hover:bg-gray-200 items-center pb-2.5 pl-1 pr-1 pt-2.5 space-x-3 transition">
                                <SettingsIcon height="24" width="24" />
                                <h1 className="dark:text-white text-lg">Settings</h1>
                            </div>
                        </NavLink>
                        <div className="cursor-pointer dark:bg-opacity-10 duration-300 flex hover:bg-gray-200 items-center pb-5 pl-1 pr-1 pt-2.5 space-x-3 transition">
                            <SavedIconSettings  />
                            <h1 className="dark:text-white text-lg">Saved</h1>
                        </div>
                    </div>
                </div>
            </ViewSettingsDialog>
        </div>
    );
};