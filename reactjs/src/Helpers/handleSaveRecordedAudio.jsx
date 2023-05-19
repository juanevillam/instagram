export function handleSaveRecordedAudio( recorder ) {
    if (recorder.state !== "inactive") recorder.stop();
};
  