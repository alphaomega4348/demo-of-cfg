import os
import requests
from flask import Flask, request, jsonify
import whisper
from fpdf import FPDF

# Initialize the Whisper model
model = whisper.load_model("tiny.en")

# Create the Flask app
app = Flask(__name__)

# def download_file(url, local_filename):
#     # Stream download to save memory
#     with requests.get(url, stream=True) as r:
#         r.raise_for_status()
#         with open(local_filename, 'wb') as f:
#             for chunk in r.iter_content(chunk_size=8192):
#                 f.write(chunk)
#     return local_filename

@app.route('/transcribe', methods=['POST'])
def transcribe_audio():
    audio_file = request.files['wavfile']
    # Save the audio file to disk
    audio_file.save(os.path.join('uploads', 'recording.wav'))

    # Transcribe the audio file
    result = model.transcribe('uploads/recording')

    os.remove("uploads/recording")


    return jsonify({'text': result["text"]}), 200

if __name__ == '__main__':
    app.run(debug=True)
