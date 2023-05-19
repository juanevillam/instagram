import { useState, useEffect } from "react";
import generateKey from "../Utils/generateKey";
import { handleDeleteAudioRecorded } from "../Helpers/handleDeleteAudioRecorded";

export default function useRecordingsList( audio ) {
    const [ recordings, setRecordings ] = useState( [] );

    useEffect(() => {
        if ( audio )
            setRecordings( ( prevState ) => {
            return [ ...prevState, { key: generateKey(), audio } ];
        });
    }, [ audio ]);

  return { recordings, deleteAudio: ( audioKey ) => handleDeleteAudioRecorded( audioKey, setRecordings ) };

};