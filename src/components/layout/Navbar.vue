<template>
  <div class="nav">
    <nav class="bg-gray-100 p-4 shadow">
      <ul class="flex gap-4">
        <li><a href="/" class="hover:underline">Home</a></li>
        <li><a href="/about" class="hover:underline">About</a></li>
        <li><a href="/contact" class="hover:underline">Contact</a></li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
// No need for router.push() here because you're using a hash-based router with <a href="#/...">
</script>
