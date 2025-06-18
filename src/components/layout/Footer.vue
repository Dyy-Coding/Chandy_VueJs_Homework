<template>
  <footer class="bg-gray-100 text-center text-sm text-gray-600 py-4 mt-8 shadow-inner">
    <p>&copy; {{ year }} MyVueApp. All rights reserved.</p>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

// Get current year dynamically
const year = ref(new Date().getFullYear())
</script>
