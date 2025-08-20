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
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/#about">About Me</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/#experience">Experience</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/#skils">Skills</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/#projects">Project</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/#get-in-touch">Contact Me</a>
          </li>
        </ul>
        <router-link to="/gallery" class="btn me-3 btn-outline-light" id="btn-gallery">
          Gallery <i class="fa-solid fa-images ms-2"></i>
        </router-link>
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

.btn-outline-light:hover {
  background-color: #7b63db;
  border-color: #7b63db;
}
</style>
