import { AudioRecorder } from "react-audio-voice-recorder";
import axios from "axios";

const Test = () => {
  const addAudioElement = async (blob) => {
    const formData = new FormData();
    formData.append("file", blob);
    try {
    let data = new FormData();
    data.append("wavfile", blob, "recording.wav");
    const config = {
      headers: { "content-type": "multipart/form-data" },
    };
    await axios.post("http://localhost:5000/", data, config);
    } catch (error) {
      console.error("Error uploading audio to Cloudinary:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-[92vh]">
      <div className="flex flex-col items-center justify-center bg-white p-4 rounded-lg shadow-md w-2/3">
        <p className="mb-4 h-[50vh] overflow-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore qui
          illo sequi assumenda obcaecati magni, rem dolores adipisci iste,
          reprehenderit non vero eligendi omnis veniam asperiores iusto
          doloribus fugit? Cumque suscipit a fugit rem explicabo odit nam eaque
          blanditiis cupiditate totam non impedit repudiandae ab deleniti quae
          eius, quasi aut! Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Voluptate unde dignissimos enim tenetur, quidem eveniet incidunt
          architecto quod cupiditate commodi voluptas laboriosam odit nisi velit
          quae eos omnis magni! Et eius aspernatur fugit molestias laboriosam
          consectetur eos! Nobis vitae molestiae sed dolore sequi iure
          architecto! Nisi cum nobis nam pariatur!
        </p>
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
