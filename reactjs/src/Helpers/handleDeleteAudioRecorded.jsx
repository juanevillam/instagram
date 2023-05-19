export function handleDeleteAudioRecorded( audioKey, setRecordings ) {
    setRecordings( ( prevState ) => prevState.filter( ( record ) => record.key !== audioKey ) );
};