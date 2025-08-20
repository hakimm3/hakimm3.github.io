<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();
const showNavbar = computed(() => route.path === '/');
</script>

<template>
  <Navbar v-if="showNavbar" />
  <router-view />
  <Footer />
</template>