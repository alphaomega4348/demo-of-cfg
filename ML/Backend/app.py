import os
import requests
from flask import Flask, request, jsonify
import whisper
from fpdf import FPDF
from flask_cors import CORS
import google.generativeai as genai

# Initialize the Whisper model
model = whisper.load_model("tiny.en")

# Configure the Google Generative AI model
genai.configure(api_key="AIzaSyAbnXHMGE5DaZlpMa9i4ReriBSGgQq5cUE")
genai_model = genai.GenerativeModel('gemini-1.5-flash')

# Create the Flask app
app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})  # Enable CORS for all routes

@app.route('/transcribe', methods=['POST'])
def transcribe_audio():
    if 'wavfile' not in request.files or 'target' not in request.form:
        return jsonify({'error': 'No file or target text provided'}), 400

    audio_file = request.files['wavfile']
    target_text = request.form['target']

    # Save the audio file to disk
    save_path = os.path.join('uploads', 'recording.wav')
    audio_file.save(save_path)

    # Transcribe the audio file
    result = model.transcribe(save_path)

    # Clean up the saved audio file
    os.remove(save_path)

    # Get the transcribed text
    transcribed_text = result["text"]

    # Compare the transcribed text with the target text using Google Generative AI
    response = genai_model.generate_content(f"Here are two sentences indicated by [], Target and Prediction. Prediction is the transcribed text obtained from a child speaking the Target. You must respond with a single word 'Pass' if the Target is somewhat close to the Prediction in meaning and grammar, else 'Fail'. Target: [{target_text}] , Prediction: [{transcribed_text}] ")
    comparison_result = response.text.strip()

    return jsonify({'text': transcribed_text, 'comparison': comparison_result}), 200

if __name__ == '__main__':
    app.run(debug=True)
