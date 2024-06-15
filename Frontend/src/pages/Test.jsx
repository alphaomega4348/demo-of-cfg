import { AudioRecorder } from "react-audio-voice-recorder";
import axios from "axios";
import { useState } from "react";

const Test = () => {
  const [targetText, setTargetText] = useState('');

  const addAudioElement = async (blob) => {
    const formData = new FormData();
    formData.append("wavfile", blob, "recording.wav");
    formData.append("target", targetText); // Add target text to formData

    try {
      const config = {
        headers: { "content-type": "multipart/form-data" },
      };

      const response = await axios.post("http://localhost:5000/transcribe", formData, config);
      console.log('Transcription:', response.data.text);
      console.log('Comparison Result:', response.data.comparison);
    } catch (error) {
      console.error("Error uploading audio to server:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-[92vh]">
      <div className="flex flex-col items-center justify-center bg-white p-4 rounded-lg shadow-md w-2/3">
        <textarea
          className="mb-4 w-full p-2 border border-gray-300 rounded"
          placeholder="Enter the target text here..."
          value={targetText}
          onChange={(e) => setTargetText(e.target.value)}
        />
        <AudioRecorder
          onRecordingComplete={addAudioElement}
          audioTrackConstraints={{
            noiseSuppression: true,
            echoCancellation: true,
          }}
          downloadOnSavePress={false}
        />
      </div>
    </div>
  );
};

export default Test;
