import Box from"@mui/material/Box";
import Slider from"@mui/material/Slider";
import React, { forwardRef } from "react";

const VideoControls = forwardRef( ( { onChangeDispayFormat, onSeek, onSeekMouseDown, onSeekMouseUp, onDuration, onPlayPause, playing, played, elapsedTime }, ref ) => {
    return (
        <Box sx={{ width: "100%", position: "absolute", bottom: "0", left: "0", paddingLeft: "18px", paddingRight: "5px", paddingTop: "3px", zIndex: "20" }}>
            <div className="flex items-center justify-between w-full">
                <div className="flex mr-5">
                    <div className="cursor-pointer -ml-1 -mt-0.5" onClick={ onPlayPause }>
                        { playing ? 
                            <svg className="animate__animated animate__fadeIn h-4" color="#ffffff" fill="#ffffff" role="img" viewBox="0 0 48 48">
                                <path d="M15 1c-3.3 0-6 1.3-6 3v40c0 1.7 2.7 3 6 3s6-1.3 6-3V4c0-1.7-2.7-3-6-3zm18 0c-3.3 0-6 1.3-6 3v40c0 1.7 2.7 3 6 3s6-1.3 6-3V4c0-1.7-2.7-3-6-3z" />
                            </svg>
                            :
                            <svg className="animate__animated animate__fadeIn h-4" color="#ffffff" fill="#ffffff" role="img" viewBox="0 0 48 48">
                                <path d="M9.6 46.5c-1 0-2-.3-2.9-.8-1.8-1.1-2.9-2.9-2.9-5.1V7.3c0-2.1 1.1-4 2.9-5.1 1.9-1.1 4.1-1.1 5.9 0l30.1 17.6c1.5.9 2.3 2.4 2.3 4.1 0 1.7-.9 3.2-2.3 4.1L12.6 45.7c-.9.5-2 .8-3 .8z"/ >
                            </svg>
                        }
                    </div>
                </div>
                <Slider aria-label="time-indicator" max={ 100 } min={ 0 } onChange={ onSeek } onChangeCommitted={ onSeekMouseUp } onMouseDown={ onSeekMouseDown } size="small" sx={{ color: "#fff", height: 4, "& .MuiSlider-thumb": { height: 8, transition: "0.3s cubic-bezier(.47,1.64,.41,.8)", width: 8, "&:before": { boxShadow: "0 2px 12px 0 rgba(0,0,0,0.4)" }, "&:hover, &.Mui-focusVisible": { boxShadow: `0px 0px 0px 8px ${ "rgb(0 0 0 / 16%)" }` }, "&.Mui-active": { height: 20, width: 20 } }, "& .MuiSlider-rail": { opacity: 0.28 } }} value={ played * 100 } />
                <p className="cursor-pointer font-medium ml-4 mr-1 mt-px text-xs text-white w-12"onClick={ onChangeDispayFormat }>{ elapsedTime }</p>
            </div>
        </Box>
    )}
);
  
export default VideoControls;