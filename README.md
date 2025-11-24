🪪 ID Card Boundary Detection – Classical Computer Vision (OpenCV)

This project implements a generalized ID-card–like object detection algorithm using OpenCV and classical image processing, without any machine learning or training data.

It is built according to the Document Detection Assignment requirements provided by the company. The system detects ID cards that may be:

Rotated

Skewed

Partially occluded

Overlapping

Of variable size

In different lighting conditions

The algorithm extracts card-like quadrilateral shapes, marks them with bounding boundaries, and saves the output.

📂 Project Structure
ID-Card-Detector/
│
├── Refurbedge.ipynb              # Main notebook containing detection code
├── detect_cards.py               # (Optional) Script version (if added later)
├── sample1.jpg                   # Sample input images
├── sample2.jpg
├── sample3.jpg
│
├── outputs/                      # Auto-generated output images
│   ├── multiple_cards_detected_1.jpg
│   ├── multiple_cards_detected_2.jpg
│   └── ...
│
├── README.md                     # Documentation (this file)
└── requirements.txt              # Python library dependencies

🛠️ Installation
1️⃣ Clone the repository
git clone https://github.com/<your-username>/ID-Card-Detector.git
cd ID-Card-Detector

2️⃣ Install dependencies
pip install -r requirements.txt

📦 Dependencies

Listed in requirements.txt:

opencv-python
numpy
matplotlib

🧠 Algorithm Overview

This detection algorithm uses pure classical computer vision, no ML model.
Here is the complete processing pipeline:

🔍 1. Load Image

Reads the input using OpenCV.

🎨 2. Preprocessing

Convert to grayscale

Apply Gaussian blur
This removes noise and makes edges smoother.

🔪 3. Edge Detection (Canny)

Canny is used to extract sharp edges.

edges = cv2.Canny(gray, 70, 200)

➕ 4. Dilate Edges

Strengthens weak edges so contours are connected.

🧩 5. Contour Detection

findContours() identifies edge-based shapes.

📐 6. Quadrilateral Approximation

Contours are approximated using:

approx = cv2.approxPolyDP(c, 0.03 * peri, True)


We keep only 4-sided shapes.

📏 7. Shape Filtering

Applied based on:

Area range

Aspect ratio

Contour nesting removal

These eliminate false positives (books, paper sheets, shadows).

🎯 8. Drawing Results

Detected ID-card shapes are:

Drawn in unique colors

Labeled (Card 1, Card 2…)

Saved into output images

▶️ How to Run the Notebook

Open Jupyter and run:

jupyter notebook Refurbedge.ipynb


Inside the notebook:

Update image names if needed

Run all cells

Outputs appear automatically in your working directory
