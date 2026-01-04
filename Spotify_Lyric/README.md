# 🎵 Spotify Lyric Search  
**Song & Artist Identification from Lyrics**

## 📌 Project Overview
This project implements a lyric-based song identification system using the Spotify Million Song Dataset.  
Given a small snippet of song lyrics, the model predicts the most likely song title and artist.

The project is designed as a text similarity / information retrieval system, not a traditional classification model.

---

## 🎯 Objective
- Input: A short snippet of lyrics  
- Output:
  - 🎵 Song Title  
  - 🎤 Artist Name  

---

## 📂 Dataset
- Source: Spotify Million Song Dataset (Lyrics version)
- Size: ~50,000 songs
- Columns Used:
  - track_name – Song title
  - artist_name – Artist
  - lyrics – Full song lyrics

The link column present in the dataset was not used, as it is irrelevant to lyric-based prediction.

---

## 🧠 Approach & Methodology
1. Text Preprocessing
   - Lowercasing
   - Removing punctuation and special characters
   - Stop-word removal

2. Feature Extraction
   - TF-IDF (Term Frequency–Inverse Document Frequency)
   - Unigrams and bigrams

3. Similarity Matching
   - Cosine similarity is used to compare the input lyric snippet with all songs in the dataset.

4. Prediction
   - The song(s) with the highest similarity score are returned as predictions.

---

## 📊 Model Performance
- Top-1 Accuracy: ~29%
- Top-5 Accuracy: 61%

Due to the repetitive and generic nature of song lyrics, exact Top-1 prediction is challenging.  
However, the Top-5 accuracy of 61% demonstrates strong retrieval performance.

---

## 🛠️ Technologies Used
- Python 3
- Pandas, NumPy
- NLTK
- Scikit-learn
- Jupyter Notebook / Google Colab

---

## 🔧 Installation & Execution

### 1. Clone the Repository
git clone https://github.com/your-username/spotify-lyric-search.git  
cd spotify-lyric-search

### 2. Create Virtual Environment (Optional)
python -m venv venv  
source venv/bin/activate  

### 3. Install Dependencies
pip install -r requirements.txt

### 4. Run the Project
jupyter notebook notebook/spotify_lyric_search.ipynb

Run all cells to reproduce results.

---

## ▶️ Example Usage
predict_song("hello from the other side I must have called a thousand times")

Output:
Song: Hello  
Artist: Adele

---

## ⏰ Deadline
03/01/2026

---

## 👤 Author
Shreyansh Yadav
