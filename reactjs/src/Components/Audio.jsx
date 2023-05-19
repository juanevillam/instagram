import ReactPlayer from "react-player";
import AudioControls from "./AudioControls";
import React, { useState, useRef } from "react";
import { formatDuration } from "../Helpers/handleFormatDuration";

export const Audio = ({ audio, audioImage }) => {
    const [ state, setState ] = useState({ pip: false, playing: false, controls: false, light: false, muted: false, played: 0, duration: 0, playbackRate: 1.0, volume: 0.2, loop: true, seeking: false });
    const playerRef = useRef( null );
    const controlsRef = useRef( null );
    const { playing, light, muted, playbackRate, pip, played, volume } = state;

    const handleProgress = ( changeState ) => {
        if ( !state.seeking ) setState({ ...state, ...changeState }) 
    };
    
    const hanldeMute = () => setState({ ...state, muted: !state.muted });
    const handleDuration = ( duration ) => setState({ ...state, duration });
    const handleSeekMouseDown = ( e ) => setState({ ...state, seeking: true });
    const handlePlayPause = () => setState({ ...state, playing: !state.playing });
    const handlePlaybackRate = ( rate ) => setState({ ...state, playbackRate: rate });
    const handleRewind = () => playerRef.current.seekTo(playerRef.current.getCurrentTime() - 10);  
    const handleFastForward = () => playerRef.current.seekTo( playerRef.current.getCurrentTime() + 10 );
    const handleSeekChange = ( e, newValue ) => setState({ ...state, played: parseFloat( newValue / 100 ) });
    const handleVolumeSeekDown = ( e, newValue ) => setState({ ...state, seeking: false, volume: parseFloat( newValue / 100 ) });
    const handleSeekMouseUp = ( e, newValue ) => { setState({ ...state, seeking: false }); playerRef.current.seekTo( newValue / 100, "fraction" ) };
    const handleVolumeChange = ( e, newValue ) => setState({ ...state, volume: parseFloat( newValue / 100 ), muted: newValue === 0 ? true : false, });
    
    const duration = playerRef && playerRef.current ? playerRef.current.getDuration() : "00:00";
    const currentTime = playerRef && playerRef.current ? playerRef.current.getCurrentTime() : "00:00";
        
    const totalDuration = formatDuration( duration );
    const elapsedTime = formatDuration( currentTime );
        
    return (
        <>
            <ReactPlayer controls={ false } light={ light } loop={ true } height="0%" muted={ muted } onProgress={ handleProgress } playbackRate={ playbackRate } playing={ playing } pip={ pip } ref={ playerRef } style={{ display: "hidden" }} url={ audio } volume={ volume } width="0%" />
            <AudioControls audioImage={ audioImage } elapsedTime={ elapsedTime } muted={ muted } onDuration={ handleDuration } onFastForward={ handleFastForward } onMute={ hanldeMute } onPlaybackRateChange={ handlePlaybackRate } onPlayPause={ handlePlayPause } onRewind={ handleRewind } onSeek={ handleSeekChange } onSeekMouseDown={ handleSeekMouseDown } onSeekMouseUp={ handleSeekMouseUp } onVolumeChange={ handleVolumeChange } onVolumeSeekDown={ handleVolumeSeekDown } playbackRate={ playbackRate } played={ played } playing={ playing } ref={ controlsRef } totalDuration={ totalDuration } volume={ volume } />  
        </>
    );
};
