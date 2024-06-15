import { AudioRecorder } from "react-audio-voice-recorder";
import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
const Test = () => {
  const { type, id } = useParams();
  const [targetText, setTargetText] = useState("");
  const navigate = useNavigate();
  const addAudioElement = async (blob) => {
    const formData = new FormData();
    formData.append("wavfile", blob, "recording.wav");
    formData.append("target", targetText); // Add target text to formData
    try {
      const config = {
        headers: { "content-type": "multipart/form-data" },
      };
      const response = await axios.post(
        "http://localhost:5000/transcribe",
        formData,
        config
      );
      if (response.data.comparison == "Pass") {
        toast.success(`${type} Test Passed`);
        await axios.post(
          `http://localhost:5000/api/student/updateStudentLevel`,
          {studentId: id, level: type},
        );
        navigate(`/studentList`);
      } else {
        toast.error(`${type} Test Failed`);
        if (type === "Story") navigate(`/test/Paragraph/${id}`);
        else if (type === "Paragraph") navigate(`/test/Sentence/${id}`);
        else if (type === "Sentence") navigate(`/test/Word/${id}`);
        else navigate(`/studentList`);
      }
    } catch (error) {
      console.error("Error uploading audio to server:", error);
    }
  };

  return (
    <div className="flex flex-col gap-5 justify-center items-center h-[92vh]">
      <div className="text-black text-3xl font-semibold">{type} Test</div>
      <div className="flex flex-col items-center justify-center bg-white p-4 rounded-lg shadow-md w-2/3">
        <textarea
          className="mb-4 w-full p-2 border border-gray-300 rounded h-[50vh]"
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
