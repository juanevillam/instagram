import React from 'react';
import MicRecorder from 'mic-recorder-to-mp3';
import { handleSendAudio } from '../Helpers/handleSend';
import { RecordAudioIconMobile } from '../Icons/Audio';

const Mp3Recorder = new MicRecorder({ bitRate: 128 });

class Recorder extends React.Component {
  constructor(props){
    super(props);
    this.NewProps = props;
    this.state = {
      isRecording: false,
      blobURL: '',
      isBlocked: false,
    };
  }

  start = () => {
    if ( this.state.isBlocked ) {
      console.log('Permission Denied');
    } else {
      
      this.setState({ isRecording: true });
      Mp3Recorder.start();
    }
  };

  stop = () => {
    this.setState({ isRecording: false });
    Mp3Recorder
    .stop()
    .getMp3()
    .then(([buffer, blob]) => {
      handleSendAudio( this.NewProps?.chatId, this.NewProps?.myProfileUsername, this.NewProps?.myProfileProfilePicture, this.NewProps?.myProfileId, blob );
      }).catch((e) => console.log(e));
  };

  render(){
    return (
      <div className="text-white">
        <header className="App-header">
        { this.state.isRecording ?  
            <svg className="animate__animated animate__fadeIn cursor-pointer h-4" color="#ffffff" fill="#ffffff" onClick={ this.stop } role="img" viewBox="0 0 48 48">
                <path d="M15 1c-3.3 0-6 1.3-6 3v40c0 1.7 2.7 3 6 3s6-1.3 6-3V4c0-1.7-2.7-3-6-3zm18 0c-3.3 0-6 1.3-6 3v40c0 1.7 2.7 3 6 3s6-1.3 6-3V4c0-1.7-2.7-3-6-3z" />
            </svg>
            :
            <div onClick={ this.start }>
                <RecordAudioIconMobile />
            </div>
        }
        </header>
      </div>
    );
  }
}

export default Recorder;