export const handlePlayVideo = ( playing, videoRef, setPlaying ) => {
    if ( playing ) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    };

    setPlaying( !playing );
};