import { AudioRecorder } from 'react-audio-voice-recorder';

const AudioRecorderComponent = () => {
  const addAudioElement = (blob) => {
    const url = URL.createObjectURL(blob);
    const audio = document.createElement("audio");
    audio.src = url;
    audio.controls = true;
    document.body.appendChild(audio);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-white p-4 rounded-lg shadow-md">
      <AudioRecorder 
        onRecordingComplete={addAudioElement}
        audioTrackConstraints={{
          noiseSuppression: true,
          echoCancellation: true,
        }} 
        downloadOnSavePress={true}
        downloadFileExtension="webm"
      />
    </div>
  );
}

export default AudioRecorderComponent;