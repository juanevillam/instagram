import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import React, { forwardRef } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({controlsWrapper: {  visibility: "visible",  position: "absolute",  top: 0,  left: 0,  right: 0,  bottom: 0,  height: "100%",  background: "rgba(0,0,0,0.6)",  display: "flex",  flexDirection: "column",  justifyContent: "space-between",  zIndex: 50}, button: {  margin: theme.spacing(1),},controlIcons: {  color: "#b80909", fontSize: 50,  transform: "scale(0.9)",  "&:hover": {    color: "#fff",    transform: "scale(1)",  },}, bottomIcons: {  color: "#999",  "&:hover": {    color: "#fff",  },}, volumeSlider: {  width: 100,}, }));

const AudioControls = forwardRef( ( { audioImage, onSeek, onSeekMouseDown, onSeekMouseUp, onDuration, onPlayPause, playing, played, playbackRate, totalDuration, elapsedTime, onPlaybackRateChange }, ref ) => {
    useStyles();  
    return (
        <Box sx={{ width: "100%" }}>
            <div className="flex items-center relative space-x-4 w-full">
                <div className="w-20">
                    { playing ?
                        <>
                            { playbackRate === 1 &&
                                <div className="bg-dark-200 cursor-pointer md:pt-3 pl-4.5 pr-4.5 pt-3.5 rounded-full h-12 w-12" onClick={ () => onPlaybackRateChange( 1.5 ) }>
                                    <p className="animate__animated animate__fadeIn">1X</p>
                                </div>
                            }
                            { playbackRate === 1.5 &&
                                <div className="bg-dark-200 cursor-pointer md:pt-3 pb-3 pl-3 pr-3 pt-3.5 rounded-full h-12 w-12" onClick={ () => onPlaybackRateChange( 2 ) }>
                                    <p className="animate__animated animate__fadeIn">1.5X</p>
                                </div>
                            }
                            { playbackRate === 2 &&
                                <div className="bg-dark-200 cursor-pointer md:pt-3 pb-3 pl-4 pr-4 pt-3.5 rounded-full h-12 w-12" onClick={ () => onPlaybackRateChange( 1 ) }>
                                    <p className="animate__animated animate__fadeIn">2X</p>
                                </div>
                            }
                        </>
                        :
                        <img alt="" className="animate__animated animate__fadeIn h-12 object-cover rounded-full w-12" src={ audioImage } />
                    }
                </div>
                <div className="cursor-pointer pr-2" onClick={ onPlayPause }>
                    { playing ?
                        <svg className="h-5" color="#ffffff" fill="#ffffff" role="img" viewBox="0 0 48 48">
                            <path d="M15 1c-3.3 0-6 1.3-6 3v40c0 1.7 2.7 3 6 3s6-1.3 6-3V4c0-1.7-2.7-3-6-3zm18 0c-3.3 0-6 1.3-6 3v40c0 1.7 2.7 3 6 3s6-1.3 6-3V4c0-1.7-2.7-3-6-3z" />
                        </svg>
                        :
                        <svg className="h-5 pl-px" color="#ffffff" fill="#ffffff" role="img" viewBox="0 0 48 48">
                            <path d="M9.6 46.5c-1 0-2-.3-2.9-.8-1.8-1.1-2.9-2.9-2.9-5.1V7.3c0-2.1 1.1-4 2.9-5.1 1.9-1.1 4.1-1.1 5.9 0l30.1 17.6c1.5.9 2.3 2.4 2.3 4.1 0 1.7-.9 3.2-2.3 4.1L12.6 45.7c-.9.5-2 .8-3 .8z"/ >
                        </svg>
                    }
                </div>
                <Slider aria-label="time-indicator" min={ 0 } max={ 90 } onChange={ onSeek } onChangeCommitted={ onSeekMouseUp } onDuration={ onDuration } onMouseDown={ onSeekMouseDown } sx={{ color: "#fff", height: 4, "& .MuiSlider-thumb": { height: 10, transition: "0.3s cubic-bezier(.47,1.64,.41,.8)", width: 10, "&:before": { boxShadow: "0 2px 12px 0 rgba(0,0,0,0.4)" }, "&:hover, &.Mui-focusVisible": { boxShadow: `0px 0px 0px 8px ${ "rgb(0 0 0 / 16%)" }` }, "&.Mui-active": { height: 20, width: 20 } }, "& .MuiSlider-rail": { opacity: 0.28 } }} value={ played * 100 } />
                <div className="absolute -bottom-1 right-0 text-xs">
                    { playing ?
                        <h1>{ elapsedTime }</h1>
                        :
                        <h1>{ totalDuration }</h1>
                    }
                </div>
            </div>
        </Box>
    )}
);

export default AudioControls;