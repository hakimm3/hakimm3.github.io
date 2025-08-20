<script setup>
import { ref, watch } from 'vue';

const isShow = ref(false);
const showClass = ref('');

watch(isShow, (value) => {
    showClass.value = value ? 'show' : '';
});

const toggle = () => {
  isShow.value = !isShow.value;
};
</script>

<template>
  <nav class="navbar navbar-expand-lg sticky-top bg-dark">
    <div class="container">
      <router-link class="navbar-brand ms-2" to="/">Trisa Abdul Hakim</router-link>
      <button
        class="navbar-toggler" :class="{ collapsed: !isShow }"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        :aria-expanded="isShow"
        aria-label="Toggle navigation"
        @click="toggle"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navbar-collapse collapse" :class="showClass" id="navbarNavDropdown">
        <ul class="navbar-nav me-auto ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">
              <i class="fas fa-home me-2"></i>Back to Portfolio
            </router-link>
          </li>
          <li class="nav-item">
            <span class="nav-link active">
              <i class="fas fa-images me-2"></i>Gallery
            </span>
          </li>
        </ul>
        <div class="d-flex gap-2">
          <a 
            href="https://github.com/hakimm3" 
            target="_blank" 
            class="btn btn-outline-light btn-sm"
          >
            <i class="fab fa-github me-1"></i>GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/trisa-abdul-hakim/" 
            target="_blank" 
            class="btn btn-outline-light btn-sm"
          >
            <i class="fab fa-linkedin me-1"></i>LinkedIn
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.router-link-active {
  color: #7b63db !important;
  font-weight: 600;
}

.router-link-exact-active {
  color: #7b63db !important;
  font-weight: 600;
}

.navbar-brand {
  text-decoration: none !important;
  color: #7b63db !important;
  font-weight: 700;
}

.nav-link:hover {
  color: #7b63db !important;
  transition: color 0.3s ease;
}

.nav-link.active {
  color: #7b63db !important;
  font-weight: 600;
  pointer-events: none;
}

.btn-outline-light:hover {
  background-color: #7b63db;
  border-color: #7b63db;
}

.btn-sm {
  padding: 0.25rem 0.75rem;
  font-size: 0.875rem;
}
</style>
