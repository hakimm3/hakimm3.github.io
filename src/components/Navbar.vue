<script setup>
  import Resume from '../assets/Resume.pdf'
</script>

<template>
  <nav id="navbar" class="navbar navbar-expand-lg sticky-top bg-dark">
    <div class="container">
      <a class="navbar-brand ms-2" href="#">Trisa Abdul Hakim</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav me-auto ms-auto">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">About Me</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#experience">Experience</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#skils">Skills</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#projects">Project</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#get-in-touch">Contact Me</a>
          </li>
        </ul>
        <a :href="Resume" target="_blank" class="btn me-3 btn-dark" id="btn-resume">
          Resume <i class="fa-solid fa-download ms-2"></i>
        </a>
      </div>
    </div>
  </nav>
</template>
