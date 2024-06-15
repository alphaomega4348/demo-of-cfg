import AudioRecorderComponent from "./AudioRecorder"

const Test = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <img className="w-full max-w-md h-auto rounded-lg shadow-md mb-4" src="https://teachmint.storage.googleapis.com/public/901469041/Assignment/c4612f5f-8e6c-4add-98b9-21b502c0831b.jpg" alt="Assignment"></img>
      <div className="w-full max-w-md">
        <p className="text-lg text-center font-semibold mb-4">
          Read the following in 30 seconds
        </p>
        <div className="w-full">
          <AudioRecorderComponent/>
        </div>
      </div>
    </div>
  )
}

export default Test