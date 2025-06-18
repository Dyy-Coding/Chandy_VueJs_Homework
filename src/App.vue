<template>
  <div class="min-h-screen flex flex-col">
    <!-- Navigation Bar -->
    <header class="shadow-sm">
      <Navbar />
    </header>

    <!-- Page Content Rendered by Vue Router -->
    <main class="flex-grow flex justify-center">
      <section class="w-full max-w-6xl px-4 py-6">
        <RouterView />
      </section>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-100">
      <Footer />
    </footer>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import Navbar from "@/components/layout/Navbar.vue"
import Footer from "@/components/layout/Footer.vue"
</script>
