<template>
  <!-- Outer sun wrapper that follows mouse -->
  <div id="sun" class="pointer-events-none fixed top-0 left-0 z-50 w-6 h-6">
    <!-- Inner animated glowing sun -->
    <div class="w-full h-full rounded-full" id="sun-core"></div>
  </div>

  <div class="min-h-screen flex flex-col">
    <header class="shadow-sm">
      <Navbar />
    </header>

    <main class="flex-grow flex justify-center">
      <section class="w-full max-w-6xl px-4 py-6">
        <RouterView />
      </section>
    </main>

    <footer class="bg-gray-100">
      <Footer />
    </footer>
  </div>
</template>

<style scoped>
#sun-core {
  background: radial-gradient(circle at center, #ffdd57, #ff8c00, #ff4500);
  border-radius: 50%;
  width: 100%;
  height: 100%;
  animation: flicker 0.2s infinite, float 1s ease-in-out infinite, fireTrail 1s ease-in-out infinite;
  box-shadow: 0 0 30px rgba(255, 140, 0, 0.6),
              0 0 60px rgba(255, 69, 0, 0.4),
              0 0 90px rgba(255, 0, 0, 0.2);
}

/* Flicker Animation */
@keyframes flicker {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.85; transform: scale(1.05); }
}

/* Floating effect */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-2px); }
}

/* Fire Trail Glow */
@keyframes fireTrail {
  0% { box-shadow: 0 0 20px #ff8c00, 0 0 40px #ff4500, 0 0 60px #ff0000; }
  50% { box-shadow: 0 0 25px #ffa500, 0 0 45px #ff6347, 0 0 70px #ff0000; }
  100% { box-shadow: 0 0 20px #ff8c00, 0 0 40px #ff4500, 0 0 60px #ff0000; }
}

</style>

<script setup>
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import Navbar from "@/components/layout/Navbar.vue"
import Footer from "@/components/layout/Footer.vue"

onMounted(() => {
  const sun = document.getElementById('sun')
  if (!sun) return

  window.addEventListener('mousemove', (e) => {
    const x = e.clientX - sun.offsetWidth / 2
    const y = e.clientY - sun.offsetHeight / 2
    sun.style.transform = `translate(${x}px, ${y}px)`
  })
})
</script>
