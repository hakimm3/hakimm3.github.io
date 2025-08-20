<script setup>
import { ref, onMounted } from 'vue'
import GalleryNavbar from '../components/GalleryNavbar.vue'
import galleryImages from '../data/gallery.js'

// Use images from the data file
const images = ref(galleryImages)

const categories = ref(['All', 'Bismo', 'Pakuwaja', 'Prau'])
const selectedCategory = ref('All')
const selectedImage = ref(null)
const isModalOpen = ref(false)

const filteredImages = ref([])

const filterImages = () => {
  if (selectedCategory.value === 'All') {
    filteredImages.value = images.value
  } else {
    filteredImages.value = images.value.filter(img => img.category === selectedCategory.value)
  }
}

const openModal = (image) => {
  selectedImage.value = image
  isModalOpen.value = true
  document.body.style.overflow = 'hidden'
  
  // Add keyboard event listener to prevent common shortcuts
  document.addEventListener('keydown', preventKeyboardShortcuts)
}

const closeModal = () => {
  isModalOpen.value = false
  selectedImage.value = null
  document.body.style.overflow = 'auto'
  
  // Remove keyboard event listener
  document.removeEventListener('keydown', preventKeyboardShortcuts)
}

const preventKeyboardShortcuts = (e) => {
  // Prevent Ctrl+S (Save), Ctrl+A (Select All), Ctrl+P (Print), Ctrl+U (View Source)
  if (e.ctrlKey && (e.key === 's' || e.key === 'a' || e.key === 'p' || e.key === 'u')) {
    e.preventDefault()
    return false
  }
  
  // Prevent F12 (Developer Tools)
  if (e.key === 'F12') {
    e.preventDefault()
    return false
  }
  
  // Prevent Ctrl+Shift+I (Developer Tools)
  if (e.ctrlKey && e.shiftKey && e.key === 'I') {
    e.preventDefault()
    return false
  }
  
  // Prevent Ctrl+Shift+C (Inspect Element)
  if (e.ctrlKey && e.shiftKey && e.key === 'C') {
    e.preventDefault()
    return false
  }
  
  // Prevent Ctrl+Shift+J (Console)
  if (e.ctrlKey && e.shiftKey && e.key === 'J') {
    e.preventDefault()
    return false
  }
}

onMounted(() => {
  filterImages()
  
  // Disable right-click context menu on the entire gallery
  document.addEventListener('contextmenu', (e) => {
    if (e.target.closest('.gallery-container')) {
      e.preventDefault()
    }
  })
  
  // Disable drag and drop
  document.addEventListener('dragstart', (e) => {
    if (e.target.closest('.gallery-container')) {
      e.preventDefault()
    }
  })
  
  // Disable text selection
  document.addEventListener('selectstart', (e) => {
    if (e.target.closest('.gallery-container img')) {
      e.preventDefault()
    }
  })
})
</script>

<template>
  <GalleryNavbar />
  <div class="gallery-container">
    <!-- Hero Section -->
    <section class="gallery-hero">
      <div class="container">
        <div class="row justify-content-center text-center">
          <div class="col-lg-8">
            <h1 class="hero-title fs-2">Gallery</h1>
            <p class="hero-subtitle">Here you can find a collection of my work.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Filter Section -->
    <section class="filter-section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="filter-buttons">
              <button
                v-for="category in categories"
                :key="category"
                @click="selectedCategory = category; filterImages()"
                :class="['filter-btn', { active: selectedCategory === category }]"
              >
                {{ category }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Gallery Grid -->
    <section class="gallery-grid-section">
      <div class="container">
        <div class="gallery-grid">
          <div
            v-for="image in filteredImages"
            :key="image.id"
            class="gallery-item my-card"
            @click="openModal(image)"
          >
            <div class="image-wrapper">
              <img 
                :src="image.url" 
                :alt="image.title" 
                loading="lazy"
                @contextmenu.prevent
                @dragstart.prevent
                @selectstart.prevent
                ondragstart="return false;"
                onselectstart="return false;"
                oncontextmenu="return false;"
                style="user-select: none; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; pointer-events: auto;"
              >
              <div class="image-overlay">
                <div class="image-info">
                  <h3>{{ image.title }}</h3>
                  <p>{{ image.category }}</p>
                </div>
                <div class="zoom-icon">
                  <i class="fas fa-search-plus"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Modal -->
    <div v-if="isModalOpen" class="modal-overlay" @click="closeModal">
      <div class="modal-content my-card" @click.stop>
        <button class="modal-close" @click="closeModal">
          <i class="fas fa-times"></i>
        </button>
        <img 
          :src="selectedImage?.url" 
          :alt="selectedImage?.title"
          @contextmenu.prevent
          @dragstart.prevent
          @selectstart.prevent
          ondragstart="return false;"
          onselectstart="return false;"
          oncontextmenu="return false;"
          style="user-select: none; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none;"
        >
        <div class="modal-info">
          <h3>{{ selectedImage?.title }}</h3>
          <p>{{ selectedImage?.category }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.gallery-container {
  background-color: var(--bs-dark);
  min-height: 100vh;
  font-family: "Space Mono", monospace;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}

/* Disable image dragging and selection globally */
.gallery-container img {
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  pointer-events: none;
}

/* Prevent screenshot tools from working properly */
.gallery-container::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: transparent;
  z-index: -1;
  pointer-events: none;
}

.gallery-hero {
  padding: 120px 0 80px;
  background-color: var(--bs-dark);
  color: white;
  text-align: center;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: white;
  font-family: "Space Mono", monospace;
}

.hero-subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
  margin-bottom: 0;
  font-family: "Space Mono", monospace;
}

.filter-section {
  padding: 60px 0;
  background-color: var(--bs-dark);
}

.filter-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 12px 24px;
  border: 2px solid #7b63db;
  background: transparent;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
  font-family: "Space Mono", monospace;
}

.filter-btn:hover,
.filter-btn.active {
  background-color: #7b63db;
  color: black;
  border-color: #7b63db;
  transform: translateY(-2px);
}

.gallery-grid-section {
  padding: 80px 0 120px;
  background-color: var(--bs-dark);
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  padding: 0;
}

.gallery-item {
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;
  background-color: var(--bs-dark);
  border: 2px solid #7b63db;
  transition: all 0.4s ease;
  font-family: "Space Mono", monospace;
  height: fit-content;
}

.gallery-item:hover {
  transform: translateY(-10px);
  background-color: #7b63db;
  border-color: white;
  box-shadow: 0 10px 30px rgba(123, 99, 219, 0.3);
}

.image-wrapper {
  position: relative;
  overflow: hidden;
}

.gallery-item img {
  width: 100%;
  height: auto;
  min-height: 200px;
  max-height: 400px;
  object-fit: cover;
  object-position: center;
  transition: transform 0.4s ease;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  pointer-events: none;
}

.image-wrapper::before {
  content: 'Trisa Abdul Hakim';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-45deg);
  font-size: 1.5rem;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.1);
  font-family: "Space Mono", monospace;
  z-index: 1;
  pointer-events: none;
  white-space: nowrap;
}

.gallery-item:hover img {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(123, 99, 219, 0.9);
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: black;
  text-align: center;
  font-family: "Space Mono", monospace;
  z-index: 2;
  pointer-events: none;
}

.gallery-item:hover .image-overlay {
  opacity: 1;
}

.image-info h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
  font-family: "Space Mono", monospace;
}

.image-info p {
  font-size: 0.9rem;
  margin-bottom: 1rem;
  font-family: "Space Mono", monospace;
}

.zoom-icon {
  font-size: 2rem;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 2rem;
}

.modal-content {
  position: relative;
  max-width: 95vw;
  max-height: 95vh;
  background: var(--bs-dark);
  border: 2px solid #7b63db;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
}

.modal-content::before {
  content: 'Trisa Abdul Hakim Portfolio';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-45deg);
  font-size: 1.5rem;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.08);
  font-family: "Space Mono", monospace;
  z-index: 2;
  pointer-events: none;
  white-space: nowrap;
}

.modal-content img {
  width: 100%;
  height: auto;
  max-height: 80vh;
  object-fit: contain;
  object-position: center;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  pointer-events: none;
  display: block;
}

.modal-close {
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(123, 99, 219, 0.9);
  color: black;
  border: none;
  border-radius: 10px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.2rem;
  z-index: 10;
  transition: all 0.3s ease;
  font-family: "Space Mono", monospace;
}

.modal-close:hover {
  background: #7b63db;
  transform: scale(1.1);
}

.modal-info {
  padding: 2rem;
  text-align: center;
  background: var(--bs-dark);
  color: white;
  border-top: 2px solid #7b63db;
  font-family: "Space Mono", monospace;
}

.modal-info h3 {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
  color: #7b63db;
}

.modal-info p {
  font-size: 1rem;
  margin: 0;
  color: white;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .gallery-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
  }
  
  .gallery-item img {
    min-height: 180px;
    max-height: 300px;
  }
  
  .filter-buttons {
    gap: 0.5rem;
  }
  
  .filter-btn {
    padding: 10px 20px;
    font-size: 0.9rem;
  }
  
  .modal-content {
    margin: 1rem;
    max-width: calc(100vw - 2rem);
    max-height: calc(100vh - 2rem);
  }
  
  .modal-content img {
    max-height: 70vh;
  }
  
  .modal-content::before {
    font-size: 1.2rem;
  }
}

@media (max-width: 480px) {
  .gallery-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .gallery-item img {
    min-height: 200px;
    max-height: 350px;
  }
  
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: 1rem;
  }
  
  .modal-content {
    margin: 0.5rem;
    max-width: calc(100vw - 1rem);
    max-height: calc(100vh - 1rem);
  }
  
  .modal-content img {
    max-height: 60vh;
  }
  
  .modal-info {
    padding: 1rem;
  }
}
</style>
