// src/utils/lightbox.js
let imageData = [];
let currentImageIndex = 0;
let lightbox;
let lightboxImg;
let lightboxTitle;
let lightboxDescription;

document.addEventListener('DOMContentLoaded', () => {
  imageData = JSON.parse(document.getElementById('image-data').textContent);
  lightbox = document.getElementById('lightbox');
  lightboxImg = document.getElementById('lightbox-img');
  lightboxTitle = document.getElementById('lightbox-title');
  lightboxDescription = document.getElementById('lightbox-description');
});

export function getImageData() {
  return imageData;
}

export function openLightbox(index) {
  currentImageIndex = index;
  updateLightbox();
  lightbox.style.display = 'flex';
}

export function closeLightbox() {
  lightbox.style.display = 'none';
}

export function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + imageData.length) % imageData.length;
  updateLightbox();
}

export function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % imageData.length;
  updateLightbox();
}

function updateLightbox() {
  lightboxImg.src = imageData[currentImageIndex].url;
  lightboxTitle.textContent = imageData[currentImageIndex].name;
  lightboxDescription.textContent = imageData[currentImageIndex].description;
}