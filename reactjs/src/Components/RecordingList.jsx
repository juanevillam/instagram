import useRecordingsList from "../Hooks/useRecordingList";

export default function RecordingsList({ sendAudio, audio }) {
  const { recordings, deleteAudio } = useRecordingsList(audio);

  return (
    <div className="text-white recordings-container">
      {recordings.length > 0 && (
        <>
          <h1 onClick={ sendAudio }>Send Audio</h1>
          <div className="recordings-list">
            {recordings.map((record) => (
              <div className="record" key={record.key}>
                <audio controls src={record.audio} />
                <div className="delete-button-container">
                  <button
                    className="delete-button"
                    title="Delete this audio"
                    onClick={() => deleteAudio(record.key)}
                  >
                    Delete audio
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
