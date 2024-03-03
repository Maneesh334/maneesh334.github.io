---
date: '2023-02-27'
title: 'Eye Disease Identifier'
github: ''
external: ''
cover: ./eye.png
tech:
  - Python
  - Keras
  - TensorFlow
company: ''
showInFeatured: true
---

• Model to classify eyes based on condition built using ML algorithms. Developed on Colab using public datasets.

• Keras CNN model with EfficientNetB3 model pre-trained on ImageNet data used for training. Global average
pooling layer used to reduce spatial dimensionality, ReLU activation for feature extraction and softmax activation
for producing probabilities. Model compiled using a Adam optimizer and returns an accuracy of 89%.
