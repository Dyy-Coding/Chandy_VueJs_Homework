<template>
  <header class="fixed w-full z-50 shadow-xl backdrop-blur bg-white/70">
    <Navbar />
  </header>

  <div>
    <!-- Home Section -->
    <section
      id="home"
      class="min-h-screen flex items-center justify-center text-center bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-300"
    >
      <h1 class="text-6xl font-extrabold text-white drop-shadow-lg animate-fade-in">
        Welcome Home ✨
      </h1>
    </section>

    <!-- About Section -->
    <section
      id="about"
      class="min-h-screen flex items-center justify-center text-center bg-gradient-to-br from-green-200 via-blue-200 to-purple-200"
    >
      <h1 class="text-5xl font-semibold text-gray-900 animate-slide-in">
        About Us 💡
      </h1>
    </section>

    <!-- Contact Section -->
    <section
      id="contact"
      class="min-h-screen flex items-center justify-center text-center bg-gradient-to-br from-yellow-200 via-pink-200 to-red-200"
    >
      <h1 class="text-5xl font-semibold text-gray-800 animate-bounce-slow">
        Contact Us 📞
      </h1>
    </section>
  </div>

  <footer class="bg-black text-white py-8 text-center font-light tracking-widest">
    <Footer />
  </footer>
</template>


<script setup>
import Navbar from "@/components/layout/Navbar.vue"
import Footer from "@/components/layout/Footer.vue"
</script>



