import os
import requests
from flask import Flask, request, jsonify
import whisper
from fpdf import FPDF

# Initialize the Whisper model
model = whisper.load_model("tiny.en")

# Create the Flask app
app = Flask(__name__)

def download_file(url, local_filename):
    # Stream download to save memory
    with requests.get(url, stream=True) as r:
        r.raise_for_status()
        with open(local_filename, 'wb') as f:
            for chunk in r.iter_content(chunk_size=8192):
                f.write(chunk)
    return local_filename

@app.route('/transcribe', methods=['POST'])
def transcribe_audio():
    data = request.get_json()
    if 'url' not in data:
        return jsonify({'error': 'No URL provided'}), 400

    file_url = data['url']
    file_name = file_url.split("/")[-1]
    local_path = os.path.join('uploads', file_name)

    # Create the uploads directory if it doesn't exist
    os.makedirs(os.path.dirname(local_path), exist_ok=True)

    # Download the file from Cloudinary
    download_file(file_url, local_path)

    # Transcribe the audio file
    result = model.transcribe(local_path)

    os.remove(local_path)

    output_filename = os.path.splitext(file_name)[0] + '.pdf'
    output_path = os.path.join('output', output_filename)
    os.makedirs(os.path.dirname(output_path), exist_ok=True)

    pdf = FPDF()
    pdf.add_page()
    pdf.set_auto_page_break(auto=True, margin=15)
    pdf.set_font("Arial", size=12)
    pdf.multi_cell(0, 10, result["text"])

    pdf.output(output_path)

    return jsonify({'text': result["text"], 'pdf': output_path}), 200

if __name__ == '__main__':
    app.run(debug=True)
